import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../actions/actions";

let contactId: number = 0;
interface ContactFormValues {
  firstName: string;
  lastName: string;
  status: string;
}

interface MyComponentProps {
  isEditData: {
    id: number;
    isEdit: boolean;
    firstName: string;
    lastName: string;
    status: string;
  };
  updateState: React.Dispatch<React.SetStateAction<MyComponentProps>>;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required."),
  lastName: Yup.string().required("Lastname is required."),
});

const ContactForm: React.FC<MyComponentProps> = ({
  isEditData,
  updateState,
}) => {
  const dispatch = useDispatch();
  const initialValues: ContactFormValues = {
    firstName: isEditData.firstName,
    lastName: isEditData.lastName,
    status: isEditData.status === "" ? "inactive" : isEditData.status,
  };
  const handleSubmit = (values: ContactFormValues) => {
    if (isEditData.isEdit) {
      dispatch(editContact({ id: isEditData.id, ...values }));
    } else {
      dispatch(addContact({ id: (contactId += 1), ...values }));
    }
    updateState((prev) => ({
      ...prev,
      isAdd: false,
      isEditData: {
        id: 0,
        firstName: "",
        lastName: "",
        status: "",
        isEdit: false,
      },
    }));
  };

  return (
    <>
      <div className="flex justify-center align-center">
        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
          {isEditData.isEdit ? "Edit a Contact" : "Add a new Contact"}
        </h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              FirstName.
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your first name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              LastName.
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your last name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                Status: &nbsp;
              </label>
              <Field
                id="active"
                name="status"
                type="radio"
                value="active"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
              <label
                htmlFor="active"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Active &nbsp;
              </label>
              <Field
                id="inactive"
                name="status"
                type="radio"
                value="inactive"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
              <label
                htmlFor="inactive"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Inactive
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isEditData.isEdit ? "Save Edited Contact" : "Save Contact"}
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 sm:mt-0 mt-2 sm:ml-2 ml-0 md:ml-4 ml-0"
            onClick={() => {
              updateState((prev) => ({
                ...prev,
                isAdd: false,
                isEditData: {
                  id: 0,
                  firstName: "",
                  lastName: "",
                  status: "",
                  isEdit: false,
                },
              }));
            }}
          >
            Cancel
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
