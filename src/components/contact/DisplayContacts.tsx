import React from "react";
import ContactCard from "./ContactCard";

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
};

type Props = {
  contacts: Contact[];
  updateState: any;
};

const DisplayContacts: React.FC<Props> = ({ contacts, updateState }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-6 gap-y-6 mt-8 customSm:grid-cols-1 customMd:grid-cols-2 customLg:grid-cols-3 customXl:grid-cols-4">
        {contacts.map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            updateState={updateState}
          />
        ))}
      </div>
    </>
  );
};

export default DisplayContacts;
