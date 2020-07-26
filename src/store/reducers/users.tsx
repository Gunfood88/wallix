import { ADD_USER } from '../actions/actionTypes'
import { IAction } from '../../intefaces/action.interface'
import { IUsers } from '../../intefaces/user.interace'


const initialState: IUsers = {
  users: [{
    name: "test",
    profile: "engineer",
    email: 'test@test.com'
  }],


}


const addUserMethod = (state: IUsers, action: IAction) => {
  return {
    ...state,
    users: [...state.users, action.payload]
  }
}

const reducer = (state: IUsers = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_USER:
      return addUserMethod(state, action)

    default:
      return state
  }
}

export default reducer
