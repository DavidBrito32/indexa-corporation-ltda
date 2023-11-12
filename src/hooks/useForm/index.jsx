import { useState } from "react";
export const useForm = (inicialState) => {
  const [form, setForm] = useState(inicialState);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setForm(prevForm => {
      const updatedForm = { ...prevForm };
  
      const fieldNames = name.split('.');
      let currentField = updatedForm;
  
      for (let i = 0; i < fieldNames.length; i++) {
        const fieldName = fieldNames[i];
  
        if (i === fieldNames.length - 1) {
          currentField[fieldName] = value;
        } else {
          currentField[fieldName] = { ...currentField[fieldName] };
          currentField = currentField[fieldName];
        }
      }
  
      return updatedForm;
    });
  };

  const handleCheckbox = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    setForm(prevForm => {
      const updatedForm = { ...prevForm };

      const fieldNames = name.split('.');
      let currentField = updatedForm;

      for (let i = 0; i < fieldNames.length; i++) {
        const fieldName = fieldNames[i];

        if (i === fieldNames.length - 1) {
          currentField[fieldName] = value;
        } else {
          currentField[fieldName] = { ...currentField[fieldName] };
          currentField = currentField[fieldName];
        }
      }
      return updatedForm;
    });
  };
  

  const clearForm = () => {
    setForm(inicialState);
  };
  return { form, handleForm, clearForm, handleCheckbox };
};
