function Input(props) {
  return (
    <div>
      <label for={props.labelFor}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Input;
