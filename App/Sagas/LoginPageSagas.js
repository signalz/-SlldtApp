import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import LoginPageActions from '../Redux/LoginPageRedux';

export function * login ({ username, password }) {
  console.log('hitttt');
  console.log(username, password);
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  if (username === 'admin') {
    yield put(LoginPageActions.userLoginSuccess({ role: 'Admin' }));
  } else if (username === 'parent') {
    yield put(LoginPageActions.userLoginSuccess({ role: 'Parent' }));
  } else if (username === 'teacher') {
    yield put(LoginPageActions.userLoginSuccess({ role: 'Teacher' }));
  }
  // const { username } = action
  // // make the call to the api
  // const response = yield call(api.getUser, username)

  // if (response.ok) {
  //   const firstUser = path(['data', 'items'], response)[0]
  //   const avatar = firstUser.avatar_url
  //   // do data conversion here if needed
  //   yield put(GithubActions.userSuccess(avatar))
  // } else {
  //   yield put(GithubActions.userFailure())
  // }
}
