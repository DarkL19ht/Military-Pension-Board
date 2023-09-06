import { IApiResponse } from ".";

export interface IGetRoleResponsePayload extends IApiResponse<IRoleDataContent> {}

export interface IRoleDataContent {
    id: number;
    name: string;
    description: string;
    authorized: boolean;
    status: "DISABLED" | "ENABLED";
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
}
