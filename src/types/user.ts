import { STATUS } from "./enum";

export interface UserRequestPayload {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    roles: number[];
    status: STATUS;
    username: string;
}
