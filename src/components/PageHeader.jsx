import { useNavigate } from "react-router-dom";
import "./PageHeader.css";

export default function PageHeader({ title, showBack = false }) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      {showBack && (
        <button className="page-header-back" onClick={() => navigate(-1)}>
          &larr;
        </button>
      )}
      <h1>{title}</h1>
    </header>
  );
}