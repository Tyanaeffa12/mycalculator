import "./Button.css";

const Button = ({ symbol, color, textColor, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="btn-wrapper"
      style={{ backgroundColor: color, color: textColor }}
    >
      {symbol}
    </div>
  );
};

export default Button;
