
import { IStudent, userAction, userState } from "../component/Student.type";
import LocalStorage from "../LocalStorage";
import { ADD_STUDENT, DELETE_ACTION, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT } from "./constant/actionConstant";


const initialState: userState = {
    userStates: [{ id: 0, firstName: '', lastName: '', email: '',phone:'' }],
    action: { msg: "", open: false }
};

const LocalStorage1 = new LocalStorage();

const reducer = (state: userState = initialState, action: userAction): userState => {

    switch (action.type) {

        case ADD_STUDENT:
            const newUser: IStudent = {
                id: action.user.id,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                email: action.user.email,
                phone:action.user.phone

            }
            const getdata = LocalStorage1.getData('store');
            let values = getdata && getdata.userStates ? getdata.userStates : [];
            if (newUser.id === 0) {
                if (localStorage.getItem('store') == null) {
                    newUser.id = 1;
                } else {
                    newUser.id = values.length + 1;
                }
                values.push(newUser);
            } else {

                let index = values.findIndex((i: IStudent) => i.id == newUser.id);
                if (index != -1) {

                    values[index].firstName = newUser.firstName;
                    values[index].lasttName = newUser.lastName
                    values[index].email = newUser.email


                }
            }
            const newState: userState = { ...state, userStates: values, action: { msg: newUser.firstName + " added successfully", open: true } }
            LocalStorage1.setData('store', newState);
            return newState;






        case UPDATE_STUDENT:
            const getdata12 = LocalStorage1.getData('store');
            let getvalues = getdata12 && getdata12.userStates ? getdata12.userStates : [];
            let index = getvalues.findIndex((i: IStudent) => i.id == action.user.id);
            if (index !== -1) {
                getvalues[index].firstName = action.user.firstName;
                getvalues[index].lasttName = action.user.lastName
                getvalues[index].email = action.user.email


            }
            const newupdatedState: userState = { userStates: getvalues, action: { msg: action.user.firstName + " updated successfully", open: true } }
            LocalStorage1.setData('store', newupdatedState);
            return newupdatedState;

        case DELETE_STUDENT:
            const getdata1 = LocalStorage1.getData('store');
            let values1 = getdata1.userStates;
            values1.forEach((k: any, i: number) => {
                if (k.id === (action.user.id)) {
                    values1.splice(i, 1);
                }
            });
            const newState1: userState = { userStates: values1, action: { msg: action.user.firstName + " deleted successfully", open: true } }
            LocalStorage1.setData('store', newState1);
            return newState1;
        case GET_STUDENT:
            const getState = LocalStorage1.getData('store');
            if (getState && getState.userStates && getState.userStates.length) {
                return getState;
            }
            return state;

        case DELETE_ACTION:
            const gateState = LocalStorage1.getData('store');
            let currentvalue = gateState.userStates;
            const newState12: userState = { userStates: currentvalue, action: { msg: " deleted successfully", open: false } }
            LocalStorage1.setData('store', newState12);
            return newState12;
    }
    return state;
}
export default reducer;