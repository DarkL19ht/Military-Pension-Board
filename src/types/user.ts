import { STATUS } from "./enum";
import { IApiResponse } from ".";

export interface UserRequestPayload {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    roles: number[] | any;
    status: STATUS | "";
    username: string;
}

export interface IGetUserResponsePayload extends IApiResponse<IUserDataContent> {}

export interface IUserDataContent {
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
    roles: {
        id: number;
        name: string;
        description: string;
        authorized: boolean;
        status: STATUS;
        createdOn: string;
        createdBy: number;
        updatedOn: string;
        updatedBy: number;
    }[];
}
