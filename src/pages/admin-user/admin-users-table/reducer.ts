type State = {
    isResetPassword: boolean;
    isDisableUser: boolean;
};

type Action =
    | { type: "openResetModal" }
    | { type: "closeResetModal" }
    | { type: "openDisableModal" }
    | { type: "closeDisableModal" };

export const initialState: State = {
    isResetPassword: false,
    isDisableUser: false,
};

export const reducer = (state: State, action: Action) => {
    const { type } = action;
    switch (type) {
        case "openResetModal":
            return {
                ...state,
                isResetPassword: true,
            };
        case "closeResetModal":
            return {
                ...state,
                isResetPassword: false,
            };
        case "openDisableModal":
            return {
                ...state,
                isDisableUser: true,
            };
        case "closeDisableModal":
            return {
                ...state,
                isDisableUser: false,
            };
        default:
            return state;
    }
};
