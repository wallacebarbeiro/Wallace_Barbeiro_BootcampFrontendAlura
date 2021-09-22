/* eslint-disable import/prefer-default-export */
import React from 'react';

function formatErros(yupErrosInner = []) {
  return yupErrosInner.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path;
    const errorMessage = currentError.message;

    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export function useForm({
  initialValues,
  onSubmit,
  validadeSchema,
}) {
  const formStates = {
    DEFAULT: 'DEFAULT',
    DONE: 'DONE',
    LOADING: 'LOADING',
    ERROR: 'ERROR',
  };

  const [insFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionsStatus, setSubmissionsStatus] = React.useState(formStates.DEFAULT);
  const [values, setValues] = React.useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  const [errors, setErros] = React.useState({});
  const [touched, setTouchedFields] = React.useState({});

  async function validadeValues(currentValues) {
    try {
      await validadeSchema(currentValues);
      setIsFormDisabled(false);
      setErros({});
    } catch (err) {
      const formatedErros = formatErros(err.inner);
      setErros(formatedErros);
      setIsFormDisabled(true);
    }
  }

  React.useEffect(() => {
    validadeValues(values);
  }, [values]);

  return {
    values,
    setValues,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values, setSubmissionsStatus, formStates, setValues);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    formStates,
    insFormSubmited,
    setIsFormSubmited,
    submissionsStatus,
    setSubmissionsStatus,
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');
      setTouchedFields({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
