import css from "./Contact.module.css";
const Contact = ({ name, number }) => {
  return (
    <div className={css.contact_container}>
      <div>
        <p className={css.name}>{name}</p>
        <a href={`tel:${number}`}>{number}</a>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
