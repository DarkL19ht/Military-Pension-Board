import { IApiResponse } from ".";

export interface IGetBankResponsePayload extends IApiResponse<IBankDataContent> {}

export interface IBankDataContent {
    code: string;
    name: string;
    // id: number;
    // createdOn: string;
    // createdBy: number;
    // updatedOn: string;
    // updatedBy: string;
}
