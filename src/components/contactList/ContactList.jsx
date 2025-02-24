import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";


export default function ContactList()
{ 
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

  return (
    <div className={css.list}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}