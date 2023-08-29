type State = {
    isRegSuccess: boolean;
    isUploadCsv: boolean;
};

type Action =
    | { type: "openRegSuccessModal" }
    | { type: "closeRegSuccessModal" }
    | { type: "openUploadCsvModal" }
    | { type: "closeUploadCsvModal" };

export const initialState: State = {
    isRegSuccess: false,
    isUploadCsv: false,
};

export const reducer = (state: State, action: Action) => {
    const { type } = action;
    switch (type) {
        case "openRegSuccessModal":
            return {
                ...state,
                isRegSuccess: true,
            };
        case "closeRegSuccessModal":
            return {
                ...state,
                isRegSuccess: false,
            };
        case "openUploadCsvModal":
            return {
                ...state,
                isUploadCsv: true,
            };
        case "closeUploadCsvModal":
            return {
                ...state,
                isUploadCsv: false,
            };
        default:
            return state;
    }
};
