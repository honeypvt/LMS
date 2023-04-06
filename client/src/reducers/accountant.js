import * as types from '../actions/actionTypes';

const initialState = [];

export default function accountant(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_ACCOUNTANT_DATA:
            return state

        case types.LOAD_ACCOUNTANT_SUCCESS:
            return [...state, ...action.accountant]

        case types.LOAD_ACCOUNTANT_FAILURE:
        case types.ADD_ACCOUNTANT_FAILURE:
        case types.EDIT_ACCOUNTANT_FAILURE:
            return state

        case types.ADD_ACCOUNTANT_DATA:
            return [
                {
                    id: action.id,
                    name: action.name,
                    accnumber: action.accnumber,
                    address: action.address,
                    contact: action.contact
                },
                ...state
            ]

        case types.ADD_ACCOUNTANT_SUCCESS:
            let dataAdd = state
            let add = dataAdd.map(function (x) {
                if (x.id === action.id) {
                    x.name = action.name;
                    x.accnumber = action.accnumber;
                    x.address = action.address;
                    x.contact = action.contact;
                }
                return x;
            });
            return add

        case types.EDIT_ACCOUNTANT_DATA:
            return state.map(data => data.id === action.id ? Object.assign({}, data, { name: action.name, accnumber: action.accnumber, address: action.address, contact: action.contact }) : data)

        case types.EDIT_ACCOUNTANT_SUCCESS:
            let dataEdit = state
            let edit = dataEdit.map(function (x) {
                if (x.id === action.id) {
                    x.name = action.name;
                    x.accnumber = action.accnumber;
                    x.address = action.address;
                    x.contact = action.contact;
                }
                return x;
            });
            return edit


        case types.DELETE_ACCOUNTANT_DATA:
            return state.filter(data => data.id !== action.id)

        case types.DELETE_ACCOUNTANT_ALL:
            return []

        default:
            return state

    }
}
