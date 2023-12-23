import { useState } from "react";

function Input({
  id = null,
  text = "",
  type = "text",
  placeholder = "",
  inputVal,
  onChangeHandler,
}) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        name={id}
        value={inputVal}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default Input;
