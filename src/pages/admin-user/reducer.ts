type State = {
    isResetPassword: boolean;
    isDisableUser: boolean;
    isChangeRole: boolean;
    isNewUser: boolean;
};

export const initialState: State = {
    isResetPassword: false,
    isDisableUser: false,
    isChangeRole: false,
    isNewUser: false,
};

export const enum ReducerActionType {
    // Reset modal
    OPEN_RESET_MODAL = "openResetModal",
    CLOSE_RESET_MODAL = "closeResetModal",
    // Disable user
    OPEN_DISABLE_MODAL = "openDisableModal",
    CLOSE_DISABLE_MODAL = "closeDisableModal",
    // Change role
    OPEN_CHANGE_ROLE_MODAL = "openChangeRoleModal",
    CLOSE_CHANGE_ROLE_MODAL = "closeChangeRoleModal",
    // Add new user
    OPEN_ADD_NEW_USER__MODAL = "openAddNewUserModal",
    CLOSE_ADD_NEW_USER__MODAL = "closeAddNewUserModal",
}

type Action =
    // Reset password action type
    | { type: ReducerActionType.OPEN_RESET_MODAL } // {type : "openResetModal"}
    | { type: ReducerActionType.CLOSE_RESET_MODAL }
    // Disable user action type
    | { type: ReducerActionType.OPEN_DISABLE_MODAL }
    | { type: ReducerActionType.CLOSE_DISABLE_MODAL }
    // Change role action type
    | { type: ReducerActionType.OPEN_CHANGE_ROLE_MODAL }
    | { type: ReducerActionType.CLOSE_CHANGE_ROLE_MODAL }
    // Add new user action type
    | { type: ReducerActionType.OPEN_ADD_NEW_USER__MODAL }
    | { type: ReducerActionType.CLOSE_ADD_NEW_USER__MODAL };

export const reducer = (state: State, action: Action): typeof initialState => {
    const { type } = action;
    switch (type) {
        case ReducerActionType.OPEN_ADD_NEW_USER__MODAL:
            return {
                ...state,
                isNewUser: true,
            };
        case ReducerActionType.CLOSE_ADD_NEW_USER__MODAL:
            return {
                ...state,
                isNewUser: false,
            };
        case ReducerActionType.OPEN_RESET_MODAL:
            return {
                ...state,
                isResetPassword: true,
            };
        case ReducerActionType.CLOSE_RESET_MODAL:
            return {
                ...state,
                isResetPassword: false,
            };
        case ReducerActionType.OPEN_DISABLE_MODAL:
            return {
                ...state,
                isDisableUser: true,
            };
        case ReducerActionType.CLOSE_DISABLE_MODAL:
            return {
                ...state,
                isDisableUser: false,
            };
        case ReducerActionType.OPEN_CHANGE_ROLE_MODAL:
            return {
                ...state,
                isChangeRole: true,
            };
        case ReducerActionType.CLOSE_CHANGE_ROLE_MODAL:
            return {
                ...state,
                isChangeRole: false,
            };
        default:
            return state;
    }
};
