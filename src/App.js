import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    })
  }, []);

  /**
   * Adicionar um repositório a sua API: Deve ser capaz de adicionar um novo 
   * item na sua API através de um botão com o texto Adicionar e, após a criação, 
   * deve ser capaz de exibir o nome dele após o cadastro.
   */
  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: "Desafio Node.js",
      url: "https://github.com/guilhermesandi/challenge02gostack",
      techs: ["Node.js", "JavaScript"]
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  /**
   * Remover um repositório da sua API: Para cada item da sua lista, deve possuir 
   * um botão com o texto Remover que, ao clicar, irá chamar uma função para remover 
   * esse item da lista do seu frontend e da sua API.
   */
  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => <li key={repository.id}>{repository.title}</li>)}
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
