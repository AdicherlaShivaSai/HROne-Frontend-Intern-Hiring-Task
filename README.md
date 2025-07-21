# 🧩 JSON Schema Builder (HROne Frontend Task)

This project is a React-based recursive dynamic form builder that allows users to define a JSON schema visually. It was built as part of the HROne Frontend Intern Hiring Task.

---

## 🚀 Features

- Add, edit, and delete fields
- Support for three types: `string`, `number`, and `nested`
- Recursive nesting of fields under `nested` type
- Real-time JSON preview of the structure
- Required field toggle (for future validation logic)

---

## 🛠️ Tech Stack

- ⚛️ React (functional components with hooks)
- 💅 Basic inline styles (customizable)
- 📦 No external libraries used (simple & clean)

---

## 📁 Folder Structure

```
src/
├── App.jsx
└── components/
    ├── FieldRow.jsx
    └── JsonPreview.js
```

---

## 🧑‍💻 How to Run

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/json-schema-builder.git
cd json-schema-builder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

---

## 🖼️ Sample Screenshot

![screenshot](./screenshot.png) <!-- Optional -->

---

## 📋 JSON Output Example

```json
{
  "user": {
    "name": "STRING",
    "age": "NUMBER",
    "address": {
      "street": "STRING",
      "zip": "NUMBER"
    }
  }
}
```

---

## 📌 Notes

- This project is created from scratch and not generated using any AI code-generation tools.
- Focused on clean structure, clear logic, and recursion.
- Fully editable and extensible for further enhancements (e.g., validation, exporting JSON, etc.)

---

## 📧 Contact

If you have any questions, feel free to reach out via [your email] or [LinkedIn/GitHub].

---