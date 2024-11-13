//const

import { AUTH_STATUSES } from "./authStatuses";


export const INITIAL_STATE = {
  auth: {
    status: AUTH_STATUSES.loggedOut,
  },
  user: {
    id: null,
    email: null,
    name: null,
    password: null,
    userBooks: [],
  },
};
