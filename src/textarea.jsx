function TextArea({
  id = null,
  text = "",
  placeholder = "",
  inputVal,
  onChangeHandler,
}) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        name={id}
        onChange={onChangeHandler}
        value={inputVal}
      ></textarea>
    </>
  );
}

export default TextArea;
