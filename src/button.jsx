function Button({
  text = null,
  type = "button",
  ariaLabel = null,
  className = "",
  onClick = null,
  onDoubleClick = null,
  children = null,
}) {
  return (
    <button
      className={className}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      aria-label={ariaLabel}
      type={type}
    >
      {children}
      {text}
    </button>
  );
}

export default Button;
