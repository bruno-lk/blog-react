import { Link } from "react-router";
import styles from "./MenuHeader.module.css";

export function MenuHeader() {
  return (
    <section className={styles.menu}>
      <h3>
        <Link to={"/"}>Blog</Link>
      </h3>
      <h3>
        <Link to={"/about"}>Sobre</Link>
      </h3>
      <h3>
        <Link to={"/description"}>Descrição</Link>
      </h3>
    </section>
  );
}
