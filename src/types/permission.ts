import { IApiResponse } from ".";
import { STATUS } from "./enum";

export interface IGetPermissionResponsePayload
    extends IApiResponse<IPermissionDataContent> {}

export interface IPermissionDataContent {
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
}
