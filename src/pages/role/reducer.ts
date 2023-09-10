import { IRoleRequestPayload } from "@/types/role";

const FormValues = {
    description: "",
    name: "",
    permissions: [],
    status: "",
};

export const initialState: {
    isResetPassword: boolean;
    isDisableRole: boolean;
    isNewRole: boolean;
    isEdit: boolean;
    rowData: IRoleRequestPayload | any;
} = {
    isResetPassword: false,
    isDisableRole: false,
    isNewRole: false,
    isEdit: false,
    rowData: {
        ...FormValues,
    },
};

export const enum ReducerActionType {
    // Reset modal
    OPEN_RESET_MODAL = "openResetModal",
    CLOSE_RESET_MODAL = "closeResetModal",
    // Disable role
    OPEN_DISABLE_MODAL = "openDisableModal",
    CLOSE_DISABLE_MODAL = "closeDisableModal",
    // Add new role
    OPEN_ADD_NEW_ROLE__MODAL = "openAddNewRoleModal",
    CLOSE_ADD_NEW_ROLE__MODAL = "closeAddNewRoleModal",
    //
    SET_FORM_DATA = "setFormData",
    SET_IS_EDIT = "setIsEdit",
}

type Action =
    // Reset password action type
    | { type: ReducerActionType.OPEN_RESET_MODAL; payload: IRoleRequestPayload } // {type : "openResetModal"}
    | { type: ReducerActionType.CLOSE_RESET_MODAL }
    // Disable role action type
    | { type: ReducerActionType.OPEN_DISABLE_MODAL; payload: IRoleRequestPayload }
    | { type: ReducerActionType.CLOSE_DISABLE_MODAL }
    // Add new role action type
    | { type: ReducerActionType.OPEN_ADD_NEW_ROLE__MODAL }
    | { type: ReducerActionType.CLOSE_ADD_NEW_ROLE__MODAL }
    //
    | { type: ReducerActionType.SET_IS_EDIT }
    | { type: ReducerActionType.SET_FORM_DATA; payload: IRoleRequestPayload };

export const reducer = (
    state: typeof initialState,
    action: Action
): typeof initialState => {
    switch (action.type) {
        // ADD NEW ADMIN ROLE
        case ReducerActionType.OPEN_ADD_NEW_ROLE__MODAL:
            return {
                ...state,
                isNewRole: true,
            };
        case ReducerActionType.CLOSE_ADD_NEW_ROLE__MODAL:
            return {
                ...state,
                isNewRole: false,
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
        // DISABLE ROLE
        case ReducerActionType.OPEN_DISABLE_MODAL:
            return {
                ...state,
                isDisableRole: true,
                rowData: action.payload,
            };
        case ReducerActionType.CLOSE_DISABLE_MODAL:
            return {
                ...state,
                isDisableRole: false,
                rowData: FormValues,
            };
        // EDIT ROLE
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
