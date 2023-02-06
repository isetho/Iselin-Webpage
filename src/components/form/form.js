import Input from "./input";

function Form() {
  return (
    <div className="form">
      <h1>Kontaktskjema</h1>
      <form id="contact-form">
        <Input
          labelFor={"fname"}
          label={"Full name"}
          type={"text"}
          id={"fname"}
          name={"fullName"}
          placeholder={"Full name"}
        />
        <Input
          labelFor={"email"}
          label={"Email"}
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"example@email.com"}
        />
        <Input
          labelFor={"subject"}
          label={"Subject"}
          type={"text"}
          id={"subject"}
          name={"subject"}
          placeholder={"Subject"}
        />
        <Input
          labelFor={"message"}
          label={"Message"}
          type={"text"}
          id={"message"}
          name={"message"}
          placeholder={"Yuur message"}
        />
        <button
          type="submit"
          form="contact-form"
          value="Submit"
          className="button-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
