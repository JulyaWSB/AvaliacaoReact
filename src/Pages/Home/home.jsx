import { Link } from "react-router-dom";
import styles from "../Home/home.module.css";
import { Button } from "../../Components/Button/button";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.titulo}>Trabalho React</h1>
      <div className={styles.buttonContainer}>
        <Link to="/theme">
          <Button type="button" message="Mudar o Tema" />
        </Link>
        <Link to="/message">
          <Button type="button" message="Mensagem Secreta" />
        </Link>
        <Link to="/tasks">
          <Button type="button" message="Lista de Tarefas" />
        </Link>
      </div>
    </div>
  );
}
