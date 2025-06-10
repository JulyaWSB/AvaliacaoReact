import { useState } from "react";
import styles from "../Message/message.module.css";
import { Button } from "../../Components/Button/button";
import { useNavigate } from "react-router-dom";

export function Message() {
  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);

  const mensagemInicial =
    "Para saber mais sobre capivaras aperte no botão abaixo:";
  const mensagemCapivara =
    "Capivaras são excelentes nadadoras e podem ficar submersas por até 5 minutos! Elas têm até membranas interdigitais (como um 'dedo de pato') que ajudam a nadar melhor. Além disso, seus olhos, orelhas e narinas ficam no topo da cabeça, permitindo que elas fiquem quase totalmente submersas, só com esses pontos fora da água para observar o ambiente e respirar. Isso ajuda elas a escapar de predadores com muita eficiência!";

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <p className={styles.text}>
          {mostrar ? mensagemCapivara : mensagemInicial}
        </p>
        <div className={styles.buttonContainer}>
          <Button
            type="button"
            message={mostrar ? "Esconder" : "Aperte aqui!"}
            onClick={() => setMostrar(!mostrar)}
          />

          <Button
            type="button"
            message="Voltar para Home"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}
