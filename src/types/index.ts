interface IconProps {
    size: number;
}

export interface InputProps {
    label: string;
    name: string;
    type: string;
    id: string;
    icon: React.ComponentType<IconProps>;
    iconSize: number;
}

export interface IApiResponse<T> {
    responseCode: string;
    responseMessage: string;
    execTime: number;
    data: {
        content: T[];
        page: number;
        size: number;
        totalElements: number;
        totalPages: number;
        first: boolean;
        last: boolean;
    };
}

export interface IAuthState {
    isAuthenticated: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    user: Record<string, any>;
}

export interface IDecodedToken {
    firstname: string;
    user_name: string;
    roles: string[];
    mobile: number;
    authorities: string[];
    client_id: string;
    lastname: string;
    aud: string[];
    scope: string[];
    exp: number;
    jti: string;
    email: string;
    username: string;
}
