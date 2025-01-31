import Form from "../components/Form.jsx";
import { useState } from "react";
import ToastNotification from "../components/ToastNotification.jsx";

export default function AddTodo() {
  //STATES
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [showToast, setShowToast] = useState(false);

  //ADD TODO HANDLER
  const handleAdd = async () => {
    try {
      const response = await fetch(
        `https://playground-07-backend.vercel.app/api/post-todo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setShowToast(true);
        setData({ title: "", description: "" });
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    } catch (error) {
      console.log("UNABLE TO ADD THE TODO");
    }
  };
  return (
    <>
      {/* TOAST NOTIFICATION */}
      {showToast && (
        <ToastNotification
          toastMessage={"Todo added successfully"}
          setShowToast={showToast}
        />
      )}
      <Form
        titleText={"Add Todos"}
        data={data}
        setData={setData}
        buttonText={"Add Todo"}
        handleSubmit={handleAdd}
      />
    </>
  );
}
