import React from "react";

const Textarea = ({ field }) => {
  return (
    <div className="col-md-12">
      <textarea
        className="form-control"
        placeholder={field.placeholder}
        rows={field?.config.rows}
        name={field.name}
        id={field.id}
        required={field?.config.required}
        minLength={
          field?.config.minimum !== "0" ? field?.config.minimum : undefined
        }
        maxLength={
          field?.config.maximum !== "0" ? field?.config.maximum : undefined
        }
      ></textarea>
    </div>
  );
};

export default Textarea;
