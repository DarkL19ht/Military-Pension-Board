export const enum ReducerActionType {
    // Registration success modal
    OPEN_REG_SUCCESS_MODAL = "openRegSuccessModal",
    CLOSE_REG_SUCCESS_MODAL = "closeRegSuccessModal",
    // CSV upload modal
    OPEN_UPLOAD_CSV_MODAL = "openUploadCsvModal",
    CLOSE_UPLOAD_CSV_MODAL = "closeUploadCsvModal",
    // Manual Limit modal
    OPEN_LIMIT_MODAL = "openManualLimitModal",
    CLOSE_LIMIT__MODAL = "closeManualLimitModal",
}

type Action =
    // Registration success action type
    | { type: ReducerActionType.OPEN_REG_SUCCESS_MODAL }
    | { type: ReducerActionType.CLOSE_REG_SUCCESS_MODAL }
    // CSV upload action type
    | { type: ReducerActionType.OPEN_UPLOAD_CSV_MODAL }
    | { type: ReducerActionType.CLOSE_UPLOAD_CSV_MODAL }
    // Manual limit action type
    | { type: ReducerActionType.OPEN_LIMIT_MODAL }
    | { type: ReducerActionType.CLOSE_LIMIT__MODAL };

export const initialState: {
    isRegSuccess: boolean;
    isUploadCsv: boolean;
    hasReachedLimit: boolean;
} = {
    isRegSuccess: false,
    isUploadCsv: false,
    hasReachedLimit: false,
};

export const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case ReducerActionType.OPEN_REG_SUCCESS_MODAL:
            return {
                ...state,
                isRegSuccess: true,
            };
        case ReducerActionType.CLOSE_REG_SUCCESS_MODAL:
            return {
                ...state,
                isRegSuccess: false,
            };
        case ReducerActionType.OPEN_UPLOAD_CSV_MODAL:
            return {
                ...state,
                isUploadCsv: true,
            };
        case ReducerActionType.CLOSE_UPLOAD_CSV_MODAL:
            return {
                ...state,
                isUploadCsv: false,
            };
        case ReducerActionType.OPEN_LIMIT_MODAL:
            return {
                ...state,
                hasReachedLimit: true,
            };
        case ReducerActionType.CLOSE_LIMIT__MODAL:
            return {
                ...state,
                hasReachedLimit: false,
            };
        default:
            return state;
    }
};
