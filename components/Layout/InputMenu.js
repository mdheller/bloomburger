import React from "react";
import { Form } from "react-bootstrap";

export default function InputMenu({ callback }) {
  const [field, setField] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (field) {
      callback(field);
    }
    setField("");
  };

  return (
    <div
      className="row bg-red text-light w-100 mx-0"
      style={{ height: "2rem" }}
    >
      <div className="col-4 px-0">
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-yellow w-100 border-1 px-2"
            style={{ height: "2rem", position: "relative" }}
            placeholder={`symbol`}
            value={field}
            onChange={(event) =>
              setField(event.target.value.trim().toUpperCase())
            }
          />
        </Form>
      </div>
      <div className="col-2 px-0">
        <button className="w-100 bg-red text-light" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="col-6 px-2" style={{ textAlign: "right" }}>
        GPC Candle Chart
      </div>
    </div>
  );
}
