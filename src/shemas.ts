import * as yup from "yup";
export const shemasLogin = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail Obrigatorio"),
  password: yup.string().required("Senha Obrigatoria"),
});
export const searchQuery = yup.object().shape({
  searchQuery: yup.string().required("Search query is required"),
});

export const searchSchema = yup.object().shape({
  origin: yup.string().required("Origem é obrigatória"),
  destination: yup.string().required("Destino é obrigatório"),
  departureDate: yup
    .date()
    .typeError("Data de ida é obrigatória")
    .required("Data de ida é obrigatória"),
  returnDate: yup
    .date()
    .typeError("Data de volta é obrigatória")
    .required("Data de volta é obrigatória")
    .when("departureDate", (departureDate, schema) =>
      schema.min(departureDate, "Data de volta deve ser após a data de ida")
    ),
});
