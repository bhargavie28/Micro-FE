/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable default-case */
import React from "react";
import { Field, Form, useFormikContext } from "formik";
import { Box, Typography } from "@mui/material";
import TextFormField from "./TextFormField";

function FormContainer({
  formFields,
  submitText,
  submitFullWidth = false,
  showSubmit = true,
  formId,
}) {
  const formik = useFormikContext();
  const {
    values: { id },
  } = formik;
  return (
    <Form className={"cmp-form"} id={formId && formId}>
      {formFields.map((formField, index) => {
        const { type } = formField;
        switch (type) {
          case "heading":
            return <Typography>{formField.heading}</Typography>;
          case "number":
            return (
              <TextFormField
                key={`${id}-${formField.name}-${index}`}
                field={{
                  ...formField,
                  fieldType: "number",
                  placeholder: formField.placeholder,
                }}
                formik={formik}
              />
            );
          case "tel":
            return (
              <TextFormField
                key={`${id}-${formField.name}-${index}`}
                field={{
                  ...formField,
                  fieldType: "text",
                  placeholder: formField.placeholder,
                  replaceRegex: /\D+/g,
                }}
                formik={formik}
              />
            );
          case "password":
            return (
              <TextFormField
                key={`${id}-${formField.name}-${index}`}
                field={{
                  ...formField,
                  fieldType: "password",
                }}
                formik={formik}
              />
            );
          case "text":
            return (
              <TextFormField
                key={`${id}-${formField.name}-${index}`}
                field={formField}
                formik={formik}
              />
            );
          case "textarea":
            return (
              <Box key={`${id}-${formField.name}-${index}`}>
                <label
                  htmlFor={formField.name}
                  style={{
                    marginBottom: "24px",
                  }}
                >
                  <Typography variant={"a6"}>{formField.label}</Typography>
                </label>
                <Field
                  id={formField.name}
                  name={formField.name}
                  placeholder={formField.placeholder}
                  as={"textarea"}
                />
              </Box>
            );
        }
      })}
    </Form>
  );
}

export default FormContainer;
