import axios from "axios";
import useValidacao from "./useValidacao";
import { useState } from "react";

type objsProps = {
  url: string;
  metodo: string;
  dados?: object;
};

export default function useRequisicao() {
  const { validarRespostaRequisicao } = useValidacao();
  const [msg, setMsg] = useState<string | null | undefined>("");

  const requisicao = (valor: objsProps) => {
    axios({
      method: valor.metodo,
      url: valor.url,
      data: valor.dados ? valor.dados : {},
    })
      .then((res) => {
        validarRespostaRequisicao(res.data);
        if (res.data.erro) {
          setMsg(res.data.msg);
          return;
        }

        setMsg(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    requisicao,
    msg,
  };
}
