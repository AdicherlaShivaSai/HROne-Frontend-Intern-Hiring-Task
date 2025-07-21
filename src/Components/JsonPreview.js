const generateJson = (fields) => {
  const schema = {};

  fields.forEach((field) => {
    if (!field.key) return;

    if (field.type === "nested") {
      schema[field.key] = generateJson(field.children || []);
    } else {
      schema[field.key] = field.type.toUpperCase();
    }
  });

  return schema;
};

// Simple component to render JSON schema
function JsonPreview({ data }) {
  return (
    <div style={{ background: "#f9f9f9", padding: "10px", minWidth: "300px", border: "1px solid #ccc" }}>
      <h4>JSON Preview</h4>
      <pre style={{ fontSize: "14px" }}>{JSON.stringify(generateJson(data), null, 2)}</pre>
    </div>
  );
}

export default JsonPreview;
