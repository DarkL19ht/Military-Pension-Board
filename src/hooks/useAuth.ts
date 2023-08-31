import { useAppDispatch, useAppSelector } from "./useRedux";
import { logout, setAuthenticationDetails } from "@/redux/reducers/auth-slice";

const useAuth = () => {
    const dispatch = useAppDispatch();
    const authState = useAppSelector((state) => ({ ...state.authReducer }));
    return {
        authState,
        logout,
        setAuthenticationDetails,
        dispatch,
    };
};

export default useAuth;
