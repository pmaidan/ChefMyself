import "./Button.css";

export default function Button({ children, onClick, variant = "filled" }) {
  return (
    <button className={`app-button app-button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}