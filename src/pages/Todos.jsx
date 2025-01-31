import { Link } from "react-router";
import useFetch from "../useFetch.jsx";
import { useState } from "react";
import ToastNotification from "../components/ToastNotification.jsx";

export default function Todos() {
  //STATES
  const [showToast, setShowToast] = useState(false);

  //DATA FETCH
  const { data, loading, error, refetch } = useFetch(
    "https://playground-07-backend.vercel.app/api/get-todo"
  );

  //HANDLE DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      const respose = await fetch(
        `https://playground-07-backend.vercel.app/api/delete-todo/${id}`,
        {
          method: "DELETE",
        }
      );

      if (respose.ok) {
        setShowToast(true);
        refetch();
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    } catch (error) {
      console.log("UNABLE TO DELETE THE TODO", error);
    }
  };

  return (
    <>
      {showToast && (
        <ToastNotification
          toastMessage={"Todo Deleted successfully"}
          setShowToast={showToast}
        />
      )}
      <main className="container my-5">
        {/* LOADING STATES */}
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}

        {/* TODO LIST DISPLAY */}
        <div className="row">
          {data && (
            <>
              <h1>Todo List</h1>
              <ul className="list-group">
                {data?.map((todo) => (
                  <>
                    <li className="list-group-item col-md-8" key={todo._id}>
                      <Link to={`/todos/${todo.title}/${todo._id}`}>
                        {todo.title}
                      </Link>
                      <button
                        className="btn btn-danger float-end"
                        onClick={() => handleDelete(todo._id)}
                      >
                        Delete
                      </button>
                    </li>
                  </>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}
