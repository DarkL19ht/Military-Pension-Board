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

export interface UserRequestPayload {
    created_by?: string;
    created_on?: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    roles: number[];
    status: "DISABLED" | "ENABLED";
    updated_by?: number;
    updated_on?: string;
    username: string;
}

export interface IPensioners {
    id: number;
    image: string;
    firstName: string;
    middleName: string;
    lastName: string;
    rank: string;
    verificationMode: string;
    referenceId: string;
    status: string;
}

export interface IAuthState {
    isAuthenticated: boolean;
    accessToken: string | null;
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
