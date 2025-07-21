import React from "react";

const FieldRow = ({ data, onChange, onDelete }) => {
  const handleKeyChange = (e) => {
    onChange({ ...data, key: e.target.value });
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    const updatedField = { ...data, type };
    if (type === "nested") {
      updatedField.children = [];
    } else {
      delete updatedField.children;
    }
    onChange(updatedField);
  };

  const handleRequiredToggle = (e) => {
    onChange({ ...data, required: e.target.checked });
  };

  const handleNestedChange = (index, updatedChild) => {
    const children = [...(data.children || [])];
    children[index] = updatedChild;
    onChange({ ...data, children });
  };

  const addNestedField = () => {
    const children = [...(data.children || []), { key: "", type: "string", required: false }];
    onChange({ ...data, children });
  };

  const deleteNestedField = (index) => {
    const children = data.children.filter((_, i) => i !== index);
    onChange({ ...data, children });
  };

  return (
    <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
      <input
        type="text"
        placeholder="Key"
        value={data.key}
        onChange={handleKeyChange}
        style={{ marginRight: "10px" }}
      />

      <select value={data.type} onChange={handleTypeChange} style={{ marginRight: "10px" }}>
        <option value="nested">nested</option>
        <option value="string">string</option>
        <option value="number">number</option>
        <option value="float">float</option>
        <option value="boolean">boolean</option>
      </select>

      <label style={{ marginRight: "10px" }}>
        Required
        <input
          type="checkbox"
          checked={data.required || false}
          onChange={handleRequiredToggle}
          style={{ marginLeft: "5px" }}
        />
      </label>

      <button onClick={onDelete} title="Delete field">❌</button>

      {data.type === "nested" && (
        <div style={{ paddingLeft: "20px", borderLeft: "2px solid #ccc", marginTop: "10px" }}>
          {data.children?.map((child, i) => (
            <FieldRow
              key={i}
              data={child}
              onChange={(updated) => handleNestedChange(i, updated)}
              onDelete={() => deleteNestedField(i)}
            />
          ))}
          <button onClick={addNestedField} style={{ marginTop: "5px" }}>+ Add Item</button>
        </div>
      )}
    </div>
  );
};

export default FieldRow;