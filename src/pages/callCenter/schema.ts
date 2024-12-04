import * as yup from "yup";

const schema = yup.object().shape({
    personalNumber: yup.string().required("ველი სავალდებულოა"),
    full_name: yup.string().required("ველი სავალდებულოა"),
    phone: yup.string().required("ველი სავალდებულოა"),
    productCode: yup.string().required("ველი სავალდებულოა"),
    supplier: yup.string().required("ველი სავალდებულოა"),
});

export default schema;
