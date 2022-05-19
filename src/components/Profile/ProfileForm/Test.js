import { useState } from "react";

function Test() {
  const [formFields, setFormFields] = useState([{ name: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);

    for(let i=0;i<formFields.length;i++){
        console.log(formFields[i].name);
    }
 
  };

  const addFields = () => {
    let object = {
      name: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="Test">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />

              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Test;
