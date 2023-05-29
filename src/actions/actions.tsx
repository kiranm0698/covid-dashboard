import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "./actionTypes";

interface ContactDetails {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

//To add contact details from redux store
export function addContact(contactDetails: ContactDetails) {
  return {
    type: ADD_CONTACT,
    payload: contactDetails,
  };
}
//To edit contact details from redux store
export function editContact(contactDetails: ContactDetails) {
  return {
    type: EDIT_CONTACT,
    payload: contactDetails,
  };
}

//To delete contact details from redux store
export function deleteContact(contactId: number) {
  return {
    type: DELETE_CONTACT,
    payload: contactId,
  };
}
