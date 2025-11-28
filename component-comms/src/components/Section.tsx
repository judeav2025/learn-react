import { Form } from "./Form";

export function Section({ name }: { name: string }) {
  return (
    <div className="section">
      <h4>Section {name}</h4>
      <div className="nodes">
        <Form name="general" />
        <Form name="contact" />
      </div>
    </div>
  );
}
