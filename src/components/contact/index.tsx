import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import DisplayContacts from "./DisplayContacts";

type IsEditData = {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  isEdit: boolean;
};

type StateType = {
  isAdd: boolean;
  isEditData: IsEditData;
};

const Contact: React.FC = () => {
  const [isAddContact, setIsAddContact] = useState<StateType>({
    isAdd: false,
    isEditData: {
      id: 0,
      firstName: "",
      lastName: "",
      status: "",
      isEdit: false,
    },
  });
  const contacts = useSelector((state: any) => state);

  return (
    <div className="p-4 sm:ml-64 dark:bg-gray-800">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 flex flex-col justify-center">
        <div className="flex justify-center align-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() =>
              setIsAddContact((prev) => ({
                ...prev,
                isAdd: true,
                isEditData: {
                  id: 0,
                  firstName: "",
                  lastName: "",
                  status: "",
                  isEdit: false,
                },
              }))
            }
          >
            Create Contact
          </button>
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm w-full">
            {isAddContact.isAdd && (
              <ContactForm
                //@ts-ignore
                updateState={setIsAddContact}
                isEditData={isAddContact.isEditData}
              />
            )}
            {isAddContact.isEditData.isEdit && (
              <ContactForm
                //@ts-ignore
                updateState={setIsAddContact}
                isEditData={isAddContact.isEditData}
              />
            )}
          </div>
        </div>
        {contacts.contactsReducer.contacts.length === 0 &&
          !isAddContact.isAdd && (
            <>
              <div className="flex justify-center align-center">
                <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white text-center">
                  No Contacts Found. Please Add a Contact from the above button.
                </h2>
              </div>
            </>
          )}
        {contacts.contactsReducer.contacts.length > 0 &&
          !isAddContact.isAdd &&
          !isAddContact.isEditData.isEdit && (
            <DisplayContacts
              contacts={contacts.contactsReducer.contacts}
              updateState={setIsAddContact}
            />
          )}
      </div>
    </div>
  );
};

export default Contact;
