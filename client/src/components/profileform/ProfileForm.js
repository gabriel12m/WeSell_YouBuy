import axios from "axios";
import { useEffect, useState } from "react";
import "./ProfileForm.css";

function ProfileForm() {
  const [listaUtilizador, setListaUtilizador] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/utilizadores").then((response) => {
      setListaUtilizador(response.data);
    });
  }, []);
  return (
    <div className="Profile">
      {listaUtilizador.map((value, key) => {
        return (
          <div className="oneProfile">
            <table>
              <tr className="nome">
                <td className="headers">Nome</td>
                <td className="info">{value.nome}</td>
              </tr>
              <tr className="email">
                <td className="headers">Email</td>
                <td className="info">{value.email}</td>
              </tr>
              <tr className="datanascimento">
                <td className="headers">Data de Nascimento</td>
                <td className="info">{value.datanascimento}</td>
              </tr>
              <tr className="sexo">
                <td className="headers">Sexo</td>
                <td className="info">{value.sexo}</td>
              </tr>
              <tr className="contacto">
                <td className="headers">Contacto</td>
                <td className="info">{value.contacto}</td>
              </tr>
              <tr className="morada">
                <td className="headers">Morada</td>
                <td className="info">{value.morada}</td>
              </tr>
              <tr className="codPostal">
                <td className="headers">Código Postal</td>
                <td className="info">{value.cod_postal}</td>
              </tr>
              <tr className="NIF">
                <td className="headers">Nº de Identificação Fiscal</td>
                <td className="info">{value.NIF}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileForm;
