import React, { ReactNode } from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormComponentProps<T extends FieldValues> {
  children: ReactNode;
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
}

const FormComponent = <T extends FieldValues>({
  children,
  methods,
  onSubmit,
}: FormComponentProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, (error) => console.log(error))}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormComponent;
