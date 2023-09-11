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
