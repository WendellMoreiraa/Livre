import * as yup from "yup";
export const shemasLogin = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail Obrigatorio"),
  password: yup.string().required("Senha Obrigatoria"),
});
