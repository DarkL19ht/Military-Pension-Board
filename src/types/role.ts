import { STATUS } from "./enum";
import { IApiRoleResponse } from ".";

export interface IRoleRequestPayload {
    description: string;
    name: string;
    permissions: number[] | any;
    status: STATUS | "";
}

export interface IGetRoleResponsePayload extends IApiRoleResponse<IRoleDataContent> {}

export interface IRoleDataContent {
    id: number;
    name: string;
    description: string;
    status: STATUS | "";
    permissions: Permission[];
}

type Permission = {
    id: number;
    name: string;
    description: string;
    authorized: boolean;
    category: string;
    status: STATUS;
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
};
