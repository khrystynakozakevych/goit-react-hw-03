import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.contacts_wrapper}>
      <ul className={css.contacts_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
