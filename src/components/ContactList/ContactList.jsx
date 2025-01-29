import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contact }) => {
  return (
    <div className={css.contacts_wrapper}>
      <ul className={css.contacts_list}>
        {contact.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
