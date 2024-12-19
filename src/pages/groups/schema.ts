import * as yup from "yup";

const CreateGroupSchema = yup.object().shape({
  name: yup.string().required("ველი სავალდებულოა"),
  description: yup.string().required("ველი სავალდებულოა"),
});

export default CreateGroupSchema;
