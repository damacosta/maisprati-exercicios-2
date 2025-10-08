export default function Button({ children, onClick, disabled }) {
  return (
    <button
      className="btn btn--solid"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
