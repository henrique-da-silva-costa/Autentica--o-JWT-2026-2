import { useState, type ChangeEvent } from "react";
import { Button } from "reactstrap";
import useRequisicao from "../hooks/useRequisicao";
import useValidacao from "../hooks/useValidacao";

const Formulario = (valor: { dados: {} }) => {
  const [formularioValor, setFormularioValor] = useState<object>(valor.dados);
  const { requisicao, msg } = useRequisicao();

  const enviar = (e: ChangeEvent) => {
    e.preventDefault();

    requisicao({
      url: "http://127.0.0.1:8000/api/login",
      metodo: "post",
      dados: formularioValor,
    });
  };

  const changeFormulario = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormularioValor({ ...formularioValor, [name]: value });
  };

  return (
    <>
      <form onSubmit={enviar}>
        {Object.entries(formularioValor).map(([chave, valor]) => {
          return (
            <div key={chave}>
              <input
                type="text"
                value={valor}
                name={chave}
                onChange={(e) => changeFormulario(e)}
              />
            </div>
          );
        })}
        <Button color="success">ENVIAR</Button>
      </form>
      <p>{msg}</p>
    </>
  );
};

export default Formulario;
