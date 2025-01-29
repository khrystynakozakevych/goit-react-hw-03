import { useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import initialData from "./assets/contactData.json";

function App() {
  const [contact, setContact] = useState(initialData);
  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
    console.log(newContact);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;
