import { STATUS } from "./enum";

export interface UserRequestPayload {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    roles: number[] | any;
    status: STATUS | "";
    username: string;
}

export interface UserResponsePayload {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;
    authorized: boolean;
    status: STATUS;
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
    roles: Role[];
}

type Role = {
    id: number;
    name: string;
    description: string;
    authorized: boolean;
    status: STATUS;
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
};
