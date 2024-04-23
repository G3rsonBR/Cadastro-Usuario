import './App.css';
import { Card } from './components/Card';
import { CreateUser } from './components/CreateUser';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);

  const updateCreatedUsers = (newUser) => {
    setData((prevData) => [...prevData, newUser]);
  }

  return (
    <>
      <header>
        <h1>Cadastrar Aluno</h1>
        <button onClick={() => setIsCreateUserOpen(!isCreateUserOpen)}>Criar usuário</button>
      </header>

      {isCreateUserOpen && <CreateUser cancelCreateUser={() => setIsCreateUserOpen(!isCreateUserOpen)} updateCreatedUsers={updateCreatedUsers}/>}

      {
        data && <div className='cardContainer'>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                ra={item.ra}
                dataNasc={item.dataNasc}
                pai={item.namePai}
                mae={item.nameMae}
                numTel={item.numTel}
                endereco={item.endereco}
                email={item.email}
                curso={item.curso}
                periodo={item.periodo}
                nota1={item.nota1}
                nota2={item.nota2}
              />
            );
          })}
        </div>
      }
    </>
  );
}
