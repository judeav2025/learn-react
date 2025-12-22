import "./App.css";
import { Section } from "./components/Section";

export function Tree() {
  return (
    <div className="tree">
      <div className="title">
        <div className="h1-container">
          <h1>UI Tree</h1>
        </div>
      </div>
      <div className="nodes">
        <Section name="Private" />
        <Section name="Public" />
      </div>
    </div>
  );
}
