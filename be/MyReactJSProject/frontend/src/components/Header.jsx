import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { NavLink, Link } from "react-router-dom";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "rgb(255 193 7)" : "#fff",
  fontWeight: isActive ? "bold" : "normal",
});

function Header() {
  return (
    <header className="p-3 text-bg-dark" id="header">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link
          to="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <EventNoteIcon
            fontSize="large"
            sx={{ color: "white", marginRight: "8px" }}
          />
          <span className="fs-4 fw-bold">VocabNote</span>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/" style={navLinkStyles} className="nav-link px-2">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/translate"
              style={navLinkStyles}
              className="nav-link px-2"
            >
              Phiên dịch
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vocabList"
              style={navLinkStyles}
              className="nav-link px-2"
            >
              Danh sách từ vựng
            </NavLink>
          </li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">
            Login
          </button>
          <button type="button" className="btn btn-warning">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
