import { INputpProps } from "../../types/input";
import "./input.scss";

export const Input = (props: INputpProps) => {
  const { type = "text", title, onChange, name } = props;
  return (
    <div className="section-input">
      <input
        type={type}
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
      />
      <label htmlFor={name}>{title}</label>
    </div>
  );
};
