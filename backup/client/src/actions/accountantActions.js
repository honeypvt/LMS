import * as types from './actionTypes';
import request from 'superagent'

export function addData(id, name, accnumber, address, contact) {
  return { type: types.ADD_ACCOUNTANT_DATA, id, name, accnumber, address, contact }
}

export function editData(id, name, accnumber, address, contact) {
  return { type: types.EDIT_ACCOUNTANT_DATA, id, name, accnumber, address, contact }
}

export function deleteData(id) {
  return { type: types.DELETE_ACCOUNTANT_DATA, id }
}

export function deleteAll() {
  return { type: types.DELETE_ACCOUNTANT_ALL }
}

export function loadData() {
  return { type: types.LOAD_ACCOUNTANT_DATA }
}

export function accountant() {
  return dispatch => {
    dispatch(loadData());
    return request
      .get(`${types.SERVER_URL}accountant`)
      .end((err, res) => {
        if (err) {
          dispatch(loadAccountantFailure())
        } else {
          dispatch(loadAccountantSuccess(res.body))
        }
      })
  }
}

export function loadAccountant(skip, limit) {
  return dispatch => {
    dispatch(loadData());
    return request
      .get(`${types.SERVER_URL}accountant/${skip}/${limit}`)
      .end((err, res) => {
        if (err) {
          dispatch(loadAccountantFailure())
        } else {
          dispatch(loadAccountantSuccess(res.body))
        }
      })
  }
}

export function loadAccountantSuccess(accountant) {
  return { type: types.LOAD_ACCOUNTANT_SUCCESS, accountant }
}

export function loadAccountantFailure() {
  return { type: types.LOAD_ACCOUNTANT_FAILURE }
}

export function addloadAccountant(name, accnumber, address, contact) {
  let id = Date.now()
  return dispatch => {
    dispatch(addData(`${id}`, name, accnumber, address, contact))
    return request
      .post(`${types.SERVER_URL}accountant`)
      .type('form')
      .send({ id: id })
      .send({ name: name })
      .send({ accnumber: accnumber })
      .send({ address: address })
      .send({ contact: contact })
      .end((err, res) => {
        if (err) {
          dispatch(addAccountantFailure());
        } else {
          dispatch(addAccountantSuccess(res.body));
        }
      })
  }
}

export function addAccountantFailure() {
  return { type: types.ADD_ACCOUNTANT_FAILURE }
}

export function addAccountantSuccess(accountant) {
  return { type: types.ADD_ACCOUNTANT_SUCCESS, accountant }
}


export function editAccountant(id, name, accnumber, address, contact) {
  return dispatch => {
    dispatch(editData(id, name, accnumber, address, contact))
    return request
      .put(`${types.SERVER_URL}accountant/${id}`)
      .type('form')
      .send({ name: name })
      .send({ accnumber: accnumber })
      .send({ address: address })
      .send({ contact: contact })
      .end((err, res) => {
        if (err) {
          dispatch(editAccountantFailure());
        } else {
          dispatch(editAccountantSuccess(res.body));
        }
      })
  }
}

export function editAccountantFailure() {
  return { type: types.EDIT_ACCOUNTANT_FAILURE }
}

export function editAccountantSuccess(accountant) {
  return { type: types.EDIT_ACCOUNTANT_SUCCESS, accountant }
}


export function deleteAccountant(id) {
  return dispatch => {
    dispatch(deleteData(id))
    return request
      .delete(`${types.SERVER_URL}accountant/${id}`)
      .end((err, res) => {
        if (err) {
          dispatch(deleteAccountantFailure());
        } else {
          dispatch(deleteAccountantSuccess(res.body));
        }
      })
  }
}

export function deleteAccountantFailure() {
  return { type: types.DELETE_ACCOUNTANT_FAILURE }
}

export function deleteAccountantSuccess(accountant) {
  return { type: types.DELETE_ACCOUNTANT_SUCCESS, accountant }
}
