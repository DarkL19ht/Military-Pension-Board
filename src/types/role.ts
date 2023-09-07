import { STATUS } from "./enum";

export interface IRoleRequestPayload {
    description: string;
    name: string;
    permissions: number[] | any;
    status: STATUS | "";
}

export interface IRoleResponsePayload {
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
