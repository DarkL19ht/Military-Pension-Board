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
    status: "DISABLED" | "ENABLED";
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
