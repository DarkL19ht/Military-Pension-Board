import { UserRequestPayload } from "@/types/user";

type State = {
    isResetPassword: boolean;
    isDisableUser: boolean;
    isNewUser: boolean;
    isEdit: boolean;
    rowData: UserRequestPayload | any;
};

const FormValues = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    roles: [],
    username: "",
    status: "",
};

export const initialState: State = {
    isResetPassword: false,
    isDisableUser: false,
    isNewUser: false,
    isEdit: false,
    rowData: {
        ...FormValues,
    },
};

export const enum ReducerActionType {
    // Reset modal
    OPEN_RESET_MODAL = "openResetModal",
    CLOSE_RESET_MODAL = "closeResetModal",
    // Disable user
    OPEN_DISABLE_MODAL = "openDisableModal",
    CLOSE_DISABLE_MODAL = "closeDisableModal",
    // Add new user
    OPEN_ADD_NEW_USER__MODAL = "openAddNewUserModal",
    CLOSE_ADD_NEW_USER__MODAL = "closeAddNewUserModal",
    //
    SET_FORM_DATA = "setFormData",
    SET_IS_EDIT = "setIsEdit",
}

type Action =
    // Reset password action type
    | { type: ReducerActionType.OPEN_RESET_MODAL; payload: UserRequestPayload } // {type : "openResetModal"}
    | { type: ReducerActionType.CLOSE_RESET_MODAL }
    // Disable user action type
    | { type: ReducerActionType.OPEN_DISABLE_MODAL; payload: UserRequestPayload }
    | { type: ReducerActionType.CLOSE_DISABLE_MODAL }
    // Add new user action type
    | { type: ReducerActionType.OPEN_ADD_NEW_USER__MODAL }
    | { type: ReducerActionType.CLOSE_ADD_NEW_USER__MODAL }
    //
    | { type: ReducerActionType.SET_IS_EDIT }
    | { type: ReducerActionType.SET_FORM_DATA; payload: UserRequestPayload };

export const reducer = (state: State, action: Action): typeof initialState => {
    switch (action.type) {
        // ADD NEW ADMIN USER
        case ReducerActionType.OPEN_ADD_NEW_USER__MODAL:
            return {
                ...state,
                isNewUser: true,
            };
        case ReducerActionType.CLOSE_ADD_NEW_USER__MODAL:
            return {
                ...state,
                isNewUser: false,
                isEdit: false,
                rowData: FormValues,
            };
        // RESET PASSWORD
        case ReducerActionType.OPEN_RESET_MODAL:
            return {
                ...state,
                isResetPassword: true,
                rowData: action.payload,
            };
        case ReducerActionType.CLOSE_RESET_MODAL:
            return {
                ...state,
                isResetPassword: false,
                rowData: FormValues,
            };
        // DISABLE USER
        case ReducerActionType.OPEN_DISABLE_MODAL:
            return {
                ...state,
                isDisableUser: true,
                rowData: action.payload,
            };
        case ReducerActionType.CLOSE_DISABLE_MODAL:
            return {
                ...state,
                isDisableUser: false,
                rowData: FormValues,
            };
        // EDIT USER
        case ReducerActionType.SET_IS_EDIT:
            return {
                ...state,
                isEdit: true,
            };
        case ReducerActionType.SET_FORM_DATA:
            return {
                ...state,
                rowData: action.payload,
            };
        default:
            return state;
    }
};
