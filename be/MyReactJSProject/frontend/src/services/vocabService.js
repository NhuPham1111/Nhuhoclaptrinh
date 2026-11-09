import axios from "axios";

const API_URL = "http://localhost:3001/vocabs"; // endpoint trong db.json

// Lấy tất cả vocab
export const getVocabs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách vocab:", error);
    return [];
  }
};

// Lấy danh mục (nếu có categories trong db.json)
export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3001/categories");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy categories:", error);
    return [];
  }
};

// Thêm vocab mới
export const addVocab = async (vocab) => {
  try {
    const response = await axios.post(API_URL, vocab);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi thêm vocab:", error);
    return null;
  }
};

// Xóa vocab theo id
export const deleteVocab = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Lỗi khi xóa vocab:", error);
  }
};

// Cập nhật vocab
export const updateVocab = async (id, updatedVocab) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedVocab);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật vocab:", error);
    return null;
  }
};
