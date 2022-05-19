import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from "./TutorFormStyles";
import { Container } from "../../data/globalStyles";
import validateForm from "./validateForm";

const TutorForm = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({
      surname,
      name,
      phone,
      address,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    console.log(surname, name, phone, address);
    setSurname("");
    setName("");
    setPhone("");
    setAddress("");
    setError(null);
    setSuccess("Application was submitted!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Nume",
      value: surname,
      onChange: (e) => setSurname(e.target.value),
      type: "text",
    },
    {
      label: "Prenume",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Telefon",
      value: phone,
      onChange: (e) => setPhone(e.target.value),
      type: "text",
    },
    {
      label: "Adresa",
      value: address,
      onChange: (e) => setAddress(e.target.value),
      type: "text",
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Tutor Form</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Introdu ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit">Adauga tutore</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default TutorForm;
