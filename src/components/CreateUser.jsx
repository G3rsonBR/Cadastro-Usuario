import { useState } from "react";

export function CreateUser({ cancelCreateUser, updateCreatedUsers }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({})
    updateCreatedUsers(formData)
  };

  return (
    <div className="createUserDiv">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome: <span>*</span>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu Nome..."
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="ra">
          RA: <span>*</span>
          <input
            type="text"
            id="ra"
            name="ra"
            placeholder="Digite seu RA..."
            value={formData.ra || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="dataNasc">
          Data de Nascimento: <span>*</span>
          <input
            type="date"
            id="dataNasc"
            name="dataNasc"
            value={formData.dataNasc || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="namePai">
          Nome do Pai:
          <input
            type="text"
            id="namePai"
            name="namePai"
            value={formData.namePai || ""}
            onChange={handleChange}
            placeholder="Nome do Pai..."
            required
          />
        </label>

        <label htmlFor="nameMae">
          Nome da Mãe: <span>*</span>
          <input
            type="text"
            id="nameMae"
            name="nameMae"
            placeholder="Nome da Mãe..."
            value={formData.nameMae || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="numTel">
          Número de contato: <span>*</span>
          <input
            type="text"
            id="numTel"
            name="numTel"
            placeholder="(99) 99999-9999"
            value={formData.numTel || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="endereco">
          Endereço: <span>*</span>
          <input
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Digite seu Endereço..."
            value={formData.endereco || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          E-mail: <span>*</span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu E-mail..."
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="curso">
          Curso: <span>*</span>
          <input
            type="text"
            id="curso"
            name="curso"
            placeholder="Digite seu Curso..."
            value={formData.curso || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="periodo">
          Período: <span>*</span>
          <input
            type="text"
            id="periodo"
            name="periodo"
            placeholder="Digite o Período..."
            value={formData.periodo || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="nota1">
          Nota 1: <span>*</span>
          <input
            type="text"
            id="nota1"
            name="nota1"
            placeholder="Digite a Primeira Nota..."
            value={formData.nota1 || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="nota2">
          Nota 2: <span>*</span>
          <input
            type="text"
            id="nota2"
            name="nota2"
            placeholder="Digite a Segunda Nota..."
            value={formData.nota2 || ""}
            onChange={handleChange}
            required
          />
        </label>

        <button className="btnFormsCreate" type="submit">
          Cadastrar
        </button>

        <button
          className="btnFormsCancel"
          type="button"
          onClick={cancelCreateUser}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
