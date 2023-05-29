import React from "react";
import { useDispatch } from "react-redux";

type Contact = {
  firstName: string;
  lastName: string;
  status: string;
  id: number;
};

type Props = {
  contact: Contact;
  updateState: (prevState: (prevState: {}) => {}) => {};
};

const ContactCard: React.FC<Props> = ({ contact, updateState }) => {
  const dispatch = useDispatch();

  return (
    <>
      <>
        <div className="max-w-[275px] w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-4">
            <div>
              <h5 className="mt-2 text-l font-medium text-gray-900 dark:text-white">
                First Name: {contact.firstName}
              </h5>
              <h5 className="mt-2 text-l font-medium text-gray-900 dark:text-white">
                Last Name: {contact.lastName}
              </h5>
              <h5 className="mt-2 text-l font-medium text-gray-900 dark:text-white">
                Status: {contact.status}
              </h5>
            </div>
            <div className="flex sm:flex-row mt-4 md:mt-6">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() =>
                  updateState((prev) => ({
                    ...prev,
                    isEditData: { ...contact, isEdit: true },
                  }))
                }
              >
                Edit
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                onClick={() => {
                  dispatch({ type: "DELETE_CONTACT", payload: contact.id });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ContactCard;
