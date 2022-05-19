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
} from "./InternshipFormStyles";
import { Container } from "../../data/globalStyles";
import validateForm from "./validateForm";

const InternshipForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [spots, setSpots] = useState("");
  const [description, setDescription] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const resultError = validateForm({
    //   name,
    //   company,
    //   city,
    //   startDate,
    //   duration,
    //   spots,
    //   description,
    // });

    // if (resultError !== null) {
    //   setError(resultError);
    //   return;
    // }
    console.log("test");
    console.log(name, company, city, startDate, duration, spots, description);
    setName("");
    setCompany("");
    setCity("");
    setStartDate("");
    setDuration("");
    setSpots("");
    setDescription("");
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
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Companie",
      value: company,
      onChange: (e) => setCompany(e.target.value),
      type: "text",
    },
    {
      label: "Oras",
      value: city,
      onChange: (e) => setCity(e.target.value),
      type: "text",
    },
    {
      label: "Data de incepere",
      value: startDate,
      onChange: (e) => setStartDate(e.target.value),
      type: "date",
    },
    {
      label: "Durata",
      value: duration,
      onChange: (e) => setDuration(e.target.value),
      type: "text",
    },
    {
      label: "Locuri",
      value: spots,
      onChange: (e) => setSpots(e.target.value),
      type: "text",
    },
    {
      label: "Descriere",
      value: description,
      onChange: (e) => setDescription(e.target.value),
      type: "text",
    },
    {
      label: "De la",
      value: startHour,
      onChange: (e) => setStartHour(e.target.value),
      type: "number",
      min: "9",
      max: "18",
    },
    {
      label: "Pana la",
      value: endHour,
      onChange: (e) => setEndHour(e.target.value),
      type: "number",
      min: "9",
      max: "18",
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Internship Form</FormTitle>
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

              <FormButton type="submit">Signup</FormButton>
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

export default InternshipForm;
