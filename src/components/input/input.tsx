import { INputpProps } from "../../types/Input";
import "./input.scss";

export const Input = (props: INputpProps) => {
  const { type = "text", title, id, onChange } = props;
  return (
    <div className="section-input">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
