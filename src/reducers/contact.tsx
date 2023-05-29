interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface State {
  contacts: Contact[];
}

interface AddContactAction {
  type: "ADD_CONTACT";
  payload: Contact;
}

interface EditContactAction {
  type: "EDIT_CONTACT";
  payload: Contact;
}

interface DeleteContactAction {
  type: "DELETE_CONTACT";
  payload: number;
}

type Action = AddContactAction | EditContactAction | DeleteContactAction;

const initialState: State = {
  contacts: [],
};

//Reducer is to update the state for contact details.

function contactsReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        }),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default contactsReducer;
