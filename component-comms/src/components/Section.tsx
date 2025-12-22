import { useState } from "react";
import { Form } from "./Form";

export function Section({ name }: { name: string }) {
  const [inputVal, setInputVal] = useState<string>("I");
  return (
    <div className="section">
      <h4>
        <div>Section {name}</div>
        <input
          value={inputVal}
          onChange={({ target: { value } }) => setInputVal(value)}
        />
        <div className="input-val">Input val: {inputVal}</div>
      </h4>

      <div className="nodes">
        <Form name="general" />
        <Form name="contact" />
      </div>
    </div>
  );
}
