import { useState } from "react";

interface validar {
  erro?: boolean | undefined;
  msg?: string | null;
  email?: string;
  senha?: string;
}

export default function useValidacao() {
  const [msg, setMsg] = useState<string | undefined | null>("");
  const validarRespostaRequisicao = (valor: validar) => {
    if (valor.erro) {
      setMsg(valor.msg);
    }
  };

  return {
    validarRespostaRequisicao,
    msg,
  };
}
