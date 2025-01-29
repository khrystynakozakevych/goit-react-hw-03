import { nanoid } from "nanoid";
// import { Formik, Field, Form } from "formik";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset();
    onAdd({
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
      id: nanoid(),
    });
    console.log();
  };
  return (
    <div className={css.form_container}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="number" name="number" />
        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </form>
      {/* <Formik>
        <Form onSubmit={handleSubmit}>
          <Field name="name" />
          <Field name="number" />
          <button className={css.form_btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik> */}
    </div>
  );
};

export default ContactForm;
