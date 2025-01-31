import { useParams } from "react-router";
import useFetch from "../useFetch.jsx";
import { useState } from "react";
import Form from "../components/Form.jsx";
import ToastNotification from "../components/ToastNotification.jsx";

export default function TodoDetails() {
  //STATES
  const [showEditForm, setShowEditForm] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [showToast, setShowToast] = useState(false);

  //GETTING TODOID WITH USEPARAMS
  const { todoID } = useParams();

  //DATA FETCH
  const {
    data: todos,
    loading,
    error,
    refetch,
  } = useFetch("https://playground-07-backend.vercel.app/api/get-todo");

  //FOUND TODO FUNCTION
  const foundTodo = todos?.find((todo) => todo._id === todoID);

  //HANDLE EDIT FUNCTION
  const handleEdit = async () => {
    try {
      const response = await fetch(
        `https://playground-07-backend.vercel.app/api/put-todo/${todoID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setShowToast(true);
        refetch();
        setShowEditForm(false)
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    } catch (error) {
      console.log("UNABLE TO EDIT THE DETAIL OF THE TODO");
    }
  };

  return (
    <>
      {/* TOAST NOTIFICATION */}
      {showToast && (
        <ToastNotification
          toastMessage={"Todo edited successfully"}
          setShowToast={showToast}
        />
      )}

      <main className="container my-5">
        {/* LOADING STATES */}
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}

        {todos && (
          <div className="row">
            <div className="card col-md-8">
              <h2 className="card-header">Todo Details</h2>
              <div className="card-body">
                <p>
                  <strong>ID: </strong>
                  {foundTodo?._id}
                </p>
                <p>
                  <strong>Title: </strong>
                  {foundTodo?.title}
                </p>
                <p>
                  <strong>Description: </strong>
                  {foundTodo?.description}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowEditForm(!showEditForm)}
                >
                  {showEditForm ? "Dismiss Edit" : "Edit Details"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      {showEditForm && (
        <Form
          titleText={`Edit Details of ${foundTodo?.title}`}
          buttonText={"Save Changes"}
          data={data}
          setData={setData}
          handleSubmit={handleEdit}
        />
      )}
    </>
  );
}
