import React from "react";
import "./form-input.styles.scss";

const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className='group'>
    <Input className='form-input' onChange={handleChange} />
  </div>
);

export default FormInput;
