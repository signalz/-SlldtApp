import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userLogin: ['username', 'password'],
  userLoginSuccess: user,
  userLoginError: error
})

export const LoginPageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: {},
  loading: false,
  error: false
})

/* ------------- Reducers ------------- */

export const performSearch = (state, { searchTerm }) => {
  const results = filter(startsWith(searchTerm), LIST_DATA)
  return state.merge({ searching: true, searchTerm, results })
}

export const login = (state) => state.merge({ loading: true, error: false });

export const loginSuccess = (state, user) => {
  console.log(user, 'user >>>>');
  return state.merge({ loading: false, error: false, user: user });
}

export const loginError = (state, error) => {
  console.log(error, 'error >>>>');
  return state.merge({ loading: false, error: true });
}

/* ------------- Selectors ------------- */

export const LoginPageSelectors = {
  selectUser: state => state.login.user
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGIN]: login,
  [Types.USER_LOGIN_SUCCESS]: loginSuccess,
  [Types.USER_LOGIN_ERROR]: loginError
})
