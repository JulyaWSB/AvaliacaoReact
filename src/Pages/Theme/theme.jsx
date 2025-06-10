import { useState } from "react";
import styles from "../Theme/theme.module.css";
import { Button } from "../../Components/Button/button";
import { useNavigate } from "react-router-dom";

export function Theme() {
  const [claro, setClaro] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.container} ${claro ? styles.claro : styles.escuro}`}
    >
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          message={`Tema ${claro ? "Escuro" : "Claro"}`}
          onClick={() => setClaro(!claro)}
          className={styles.button}
        />

        <Button
          type="button"
          message="Voltar para Home"
          onClick={() => navigate("/")}
          className={styles.button}
        />
      </div>
    </div>
  );
}
