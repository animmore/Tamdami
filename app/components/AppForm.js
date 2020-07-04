import React from "react";
import { Formik } from "formik";

export function AppForm({ initialValues, onSubmit, validationSchema, childrem }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <>{childrem}</>}
    </Formik>
  );
}
