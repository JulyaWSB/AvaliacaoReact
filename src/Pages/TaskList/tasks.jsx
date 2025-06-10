import { useState } from "react";
import { Button } from "../../Components/Button/button";
import { useNavigate } from "react-router-dom";
import styles from "../TaskList/tasks.module.css";
import { FaTrash } from "react-icons/fa";

export function Tasks() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setLista([...lista, { texto: tarefa, concluida: false }]);
      setTarefa("");
    }
  };

  const toggleTarefa = (index) => {
    const novaLista = [...lista];
    novaLista[index].concluida = !novaLista[index].concluida;
    setLista(novaLista);
  };

  const deletarTarefa = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>To Do List</h1>

      <div className={styles.mainContent}>
        <section className={styles.adicionar}>
          <input
            className={styles.input}
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            placeholder="Digite uma tarefa"
          />
          <Button
            type="button"
            message="Adicionar"
            onClick={adicionarTarefa}
            className={styles.botao}
          />
          <div className={styles.areaVoltar}>
            <Button
              type="button"
              message="Voltar para Home"
              onClick={() => navigate("/")}
            />
          </div>
        </section>

        <section className={styles.listar}>
          <ul className={styles.lista}>
            {lista.map((item, index) => (
              <li key={index} className={styles.item}>
                <input
                  type="checkbox"
                  checked={item.concluida}
                  onChange={() => toggleTarefa(index)}
                />
                <span
                  className={
                    item.concluida ? styles.concluida : styles.naoConcluida
                  }
                >
                  {item.texto}
                </span>
                <button
                  className={styles.deletar}
                  onClick={() => deletarTarefa(index)}
                  aria-label="Excluir tarefa"
                >
                  <FaTrash className={styles.iconeLixeira} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
