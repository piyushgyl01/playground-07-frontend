import { Link } from "react-router";

export default function App() {
  return (
    <>
      <main className="container my-5">
        <section className="my-5">
          <img
            src="https://tse3.mm.bing.net/th?id=OIG1.QU2ug31_Eptcm9MVrtFJ&pid=ImgGn"
            className="img-fluid rounded"
            alt="hero-img"
          />
        </section>
        <section className="my-5 text-center">
          <h1>Todos</h1>
          <p>Welcome to the Todo application!</p>
          <Link className="btn btn-primary" to={"/todos"}>View Todos</Link>
        </section>
      </main>
    </>
  );
}
