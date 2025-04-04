import { Link } from "react-router";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      {/* esse card pode ser um objeto */}
      <div className={styles.card}>
        <img src="src\assets\react.svg" alt="react"></img>
        <h1>Meu nome</h1>
        <p>Breve descrição</p>
      </div>

      <h1>Home page</h1>

      <ul>
        <li>
          {" "}
          <Link to={"1"}>Blog 1</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/blog_2"}>Blog 2</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/blog_3"}>Blog 3</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/blog_4"}>Blog 4</Link>{" "}
        </li>
      </ul>
    </>
  );
}
