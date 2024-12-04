import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("ველი სავალდებულოა"),
    personalId: yup.string().required("ველი სავალდებულოა"),
    mobilePhone: yup.string().required("ველი სავალდებულოა"),
    product: yup.string().required("ველი სავალდებულოა"),
    channel: yup.string().required("ველი სავალდებულოა"),
    amount: yup.string().notRequired(),
    ccy: yup.string().notRequired(),
});

export default schema;
