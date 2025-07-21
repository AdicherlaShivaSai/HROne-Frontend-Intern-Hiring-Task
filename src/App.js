import React, { useState } from "react";
import FieldRow from "./Components/FieldRow";
import JsonPreview from "./Components/JsonPreview";
import "./App.css";


function App() {
  const [fields, setFields] = useState([]);

  // Update a specific field in the form
  const updateField = (index, updatedField) => {
    const updatedFields = [...fields];
    updatedFields[index] = updatedField;
    setFields(updatedFields);
  };

  // Remove a field from the form
  const deleteField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Add a new field to the form
  const addField = () => {
    setFields(prev => [...prev, { key: "", type: "string", required: false }]);
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div>
        {fields.map((field, index) => (
          <FieldRow
            key={index}
            data={field}
            onChange={(updated) => updateField(index, updated)}
            onDelete={() => deleteField(index)}
          />
        ))}
        <button onClick={addField} style={{ marginTop: "10px" }}>+ Add Item</button>
        <br /><br />
        <button onClick={() => console.log(fields)}>Submit</button>
      </div>
      <JsonPreview data={fields} />
    </div>
  );
}

export default App;