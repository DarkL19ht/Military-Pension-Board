type State = {
    isResetPassword: boolean;
    isDisableUser: boolean;
    isChangeRole: boolean;
};

export const enum ReducerActionType {
    OPEN_RESET_MODAL = "openResetModal",
    CLOSE_RESET_MODAL = "closeResetModal",
    OPEN_DISABLE_MODAL = "openDisableModal",
    CLOSE_DISABLE_MODAL = "closeDisableModal",
    OPEN_CHANGE_ROLE_MODAL = "openChangeRoleModal",
    CLOSE_CHANGE_ROLE_MODAL = "closeChangeRoleModal",
}

type Action =
    | { type: ReducerActionType.OPEN_RESET_MODAL } // {type : "openResetModal"}
    | { type: ReducerActionType.CLOSE_RESET_MODAL }
    | { type: ReducerActionType.OPEN_DISABLE_MODAL }
    | { type: ReducerActionType.CLOSE_DISABLE_MODAL }
    | { type: ReducerActionType.OPEN_CHANGE_ROLE_MODAL }
    | { type: ReducerActionType.CLOSE_CHANGE_ROLE_MODAL };

export const initialState: State = {
    isResetPassword: false,
    isDisableUser: false,
    isChangeRole: false,
};

export const reducer = (state: State, action: Action): typeof initialState => {
    const { type } = action;
    switch (type) {
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
