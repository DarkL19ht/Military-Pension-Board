export const enum ReducerActionType {
    // Registration success modal
    OPEN_RECOVERY_SUCCESS_MODAL = "openRecoverySuccessModal",
    CLOSE_RECOVERY_SUCCESS_MODAL = "closeRecoverySuccessModal",
}

type Action =
    // Registration success action type
    | { type: ReducerActionType.OPEN_RECOVERY_SUCCESS_MODAL }
    | { type: ReducerActionType.CLOSE_RECOVERY_SUCCESS_MODAL };
export const initialState: {
    isRecoverySuccess: boolean;
} = {
    isRecoverySuccess: false,
};

export const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case ReducerActionType.OPEN_RECOVERY_SUCCESS_MODAL:
            return {
                ...state,
                isRecoverySuccess: true,
            };
        case ReducerActionType.CLOSE_RECOVERY_SUCCESS_MODAL:
            return {
                ...state,
                isRecoverySuccess: false,
            };
        default:
            return state;
    }
};
