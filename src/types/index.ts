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
