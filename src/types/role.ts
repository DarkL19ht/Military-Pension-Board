import { STATUS } from "./enum";
import { IApiResponse } from ".";
import { IPermissionDataContent } from "./permission";

export interface IRoleRequestPayload {
    description: string;
    name: string;
    permissions: number[] | any;
    status: STATUS | "";
}

export interface IGetRoleResponsePayload extends IApiResponse<IRoleDataContent> {}

export interface IRoleDataContent {
    id: number;
    name: string;
    description: string;
    status: STATUS | ""; // check and confirm why the empty string is use here
    permissions: IPermissionDataContent[];
}
