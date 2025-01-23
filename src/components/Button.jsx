const Button = ({ generateQrCode, children, color }) => {
  return (
    <button
      type="button"
      className={`${color} btn-lg`}
      style={{ width: "25rem" }}
      onClick={generateQrCode}
    >
      {children}
    </button>
  );
};

export default Button;
