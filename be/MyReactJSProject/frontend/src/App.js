import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddVocabForm from "./components/AddVocabForm";
import VocabList from "./components/VocabList";
import TranslateControls from "./components/TranslateControls";

import {
  getVocabs,
  addVocab,
  deleteVocab,
  updateVocab,
} from "./services/vocabService";

function App() {
  const [vocabItems, setVocabItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVocabs();
        setVocabItems(data);
      } catch (error) {
        console.log("Error while geting vocab data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  // Add new vocab
  const handleAdd = async (newVocab) => {
    if (!newVocab.chinese.trim() || !newVocab.meaning.trim()) {
      alert("Vui lòng nhập tiếng Trung và nghĩa tiếng Việt.");
      return;
    }

    const vocabWithId = {
      ...newVocab,
      id: uuidv4(),
    };

    const added = await addVocab(vocabWithId); // gửi lên json-server
    setVocabItems((prev) => [...prev, added]);
  };

  // Delete vocab
  const handleDelete = async (id) => {
    await deleteVocab(id); // xóa trên db.json
    setVocabItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Edit vocab
  const handleEdit = (id) => {
    const selectedItem = vocabItems.find((item) => item.id === id);
    setEditingItem(selectedItem);
  };

  // Update vocab
  const handleUpdate = async (updatedVocab) => {
    const updated = await updateVocab(updatedVocab.id, updatedVocab); // PUT lên db.json
    setVocabItems((prev) =>
      prev.map((item) => (item.id === updatedVocab.id ? updatedVocab : item))
    );
    setEditingItem(null); // reset form
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <TranslateControls />
                <AddVocabForm
                  onAdd={handleAdd}
                  onUpdate={handleUpdate}
                  editingItem={editingItem}
                />
                <VocabList
                  items={vocabItems}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </Home>
            }
          />
          <Route path="/translate" element={<TranslateControls />} />
          <Route
            path="/vocabList"
            element={
              <VocabList
                items={vocabItems}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
