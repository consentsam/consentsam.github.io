import React from "react";

const Input = ({ field }) => {
  return (
    <div className="col-md-12">
      <input
        type={field.type}
        placeholder={field.placeholder}
        className="form-control"
        name={field.name}
        id={field.id}
        required={field?.config.required}
        minLength={
          field?.config.minimum !== "0" ? field?.config.minimum : undefined
        }
        maxLength={
          field?.config.maximum !== "0" ? field?.config.maximum : undefined
        }
      />
    </div>
  );
};

export default Input;
