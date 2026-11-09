// components/VocabList.js
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function VocabList({ items, onDelete, onEdit }) {
  return (
    <div className="site-section" id="vocab-list">
      <h2>Danh sách từ vựng đã lưu</h2>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiếng Trung</th>
              <th>Phiên âm</th>
              <th>Tiếng Việt</th>
              <th>Ghi chú</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.chinese}</td>
                <td>{item.pinyin}</td>
                <td>{item.meaning}</td>
                <td>{item.note}</td>
                <td id="btn-event">
                  <button id="edit-btn" onClick={() => onEdit(item.id)}>
                    <EditIcon sx={{ color: "blue" }} />
                  </button>
                  <button id="delete-btn" onClick={() => onDelete(item.id)}>
                    <DeleteForeverIcon sx={{ color: "red" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VocabList;
