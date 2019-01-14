export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
const authenticateUser = data => {
  return {
    type: AUTHENTICATE_USER,
    payload: data
  };
};

export const actions = {
  authenticateUser
};
