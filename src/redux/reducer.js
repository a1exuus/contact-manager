import { allContact } from "../components/Contacts/allContact";
import { ADD_CONTACT } from "./types";

const initialState = {
  allContact,
  contact: null
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
    default:
      return { ...state };
  }
};
