// components/AddVocabForm.js
import React, { useEffect, useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import AddIcon from "@mui/icons-material/Add";

function AddVocabForm({ onAdd, onUpdate, editingItem }) {
  const [formInput, setFormInput] = useState({
    chinese: "",
    pinyin: "",
    meaning: "",
    note: "",
  });

  useEffect(() => {
    if (editingItem) {
      setFormInput(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingItem) {
      onUpdate(formInput);
    } else {
      onAdd(formInput);
    }

    setFormInput({
      chinese: "",
      pinyin: "",
      meaning: "",
      note: "",
    });
  };

  return (
    <div className="site-section" id="add-note-form">
      <h1>Add vocabulary notes here...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="chinese"
          placeholder="Tiếng Trung"
          value={formInput.chinese}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pinyin"
          placeholder="Pinyin"
          value={formInput.pinyin}
          onChange={handleChange}
        />
        <input
          type="text"
          name="meaning"
          placeholder="Tiếng Việt"
          value={formInput.meaning}
          onChange={handleChange}
        />
        <input
          type="text"
          name="note"
          placeholder="Ghi chú"
          value={formInput.note}
          onChange={handleChange}
        />
        <button id="btn-add" type="submit">
          {editingItem ? <UpdateIcon /> : <AddIcon />}
          {editingItem ? " Cập nhật" : " Thêm từ"}
        </button>
      </form>
    </div>
  );
}

export default AddVocabForm;
