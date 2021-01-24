import React from "react";

import classes from "./inputForm.modules.scss";

const InputForm = ({
  name,
  labelName,
  type = "text",
  placeholder,
  isError,
  value,
  onChange,
  errorName,
  isDisabled,
}) => (
  <>
    <label className={classes.label} htmlFor={labelName}>
      {labelName}
    </label>
    <input
      name={name}
      type={type}
      disabled={isDisabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${classes.input}  ${isError && classes.input__error}`}
    />
    {isError && <div className={classes.input__feedback}>{errorName}</div>}
  </>
);

export default InputForm;
