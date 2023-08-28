type State = {
    isResetPassword: boolean;
    isDisableUser: boolean;
    isChangeRole: boolean;
};

type Action =
    | { type: "openResetModal" }
    | { type: "closeResetModal" }
    | { type: "openDisableModal" }
    | { type: "closeDisableModal" }
    | { type: "openChangeRoleModal" }
    | { type: "closeChangeRoleModal" };

export const initialState: State = {
    isResetPassword: false,
    isDisableUser: false,
    isChangeRole: false,
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
        case "openChangeRoleModal":
            return {
                ...state,
                isChangeRole: true,
            };
        case "closeChangeRoleModal":
            return {
                ...state,
                isChangeRole: false,
            };
        default:
            return state;
    }
};
