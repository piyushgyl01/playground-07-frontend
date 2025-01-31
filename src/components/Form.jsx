export default function Form({
  titleText,
  buttonText,
  data,
  setData,
  handleSubmit,
}) {
  return (
    <>
      <main className="container my-5">
        <h1>{titleText}</h1>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Title:
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            id="titleInput"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">
            Description:
          </label>
          <input
            type="text"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            id="descriptionInput"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" onClick={() => handleSubmit()}>
          {buttonText}
        </button>
      </main>
    </>
  );
}
