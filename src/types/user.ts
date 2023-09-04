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
