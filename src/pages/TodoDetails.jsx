import { useParams } from "react-router";
import useFetch from "../useFetch";

export default function TodoDetails() {
  //GETTING TODOID WITH USEPARAMS
  const { todoID } = useParams();

  //DATA FETCH
  const { data, loading, error, refetch } = useFetch(
    "https://playground-07-backend.vercel.app/api/get-todo"
  );

  //FOUND TODO FUNCTION
  const foundTodo = data?.find((todo) => todo._id === todoID);

  return (
    <>
      <main className="container my-5">
        {/* LOADING STATES */}
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}

        {data && (
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
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
