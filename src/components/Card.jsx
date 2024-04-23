export function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h3>RA: {props.ra}</h3>
      <h4>Informações Pessoais:</h4>
      <ul className="personalInformation">
        <li>Nascimento: {props.dataNasc}</li>
        <li>Nome do Pai: {props.pai}</li>
        <li>Nome da Mãe: {props.mae}</li>
        <li>Número de Telefone: {props.numTel}</li>
        <li>
          Endereço: 
          <address>{props.endereco}</address>
        </li>
        <li>Email: {props.email}</li>
      </ul>
      <h4>Informações de Matrícula:</h4>
      <ul className="courseInformations">
        <li>Curso: {props.curso}</li>
        <li>Período: {props.periodo}</li>
        <li>Nota 1: {props.nota1}</li>
        <li>Nota 2: {props.nota2}</li>
      </ul>
    </div>
  );
}
