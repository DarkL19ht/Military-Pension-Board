import { IApiResponse } from ".";

export interface IGetRankResponsePayload extends IApiResponse<IRankDataContent> {}

export interface IRankDataContent {
    code: string;
    name: string;
    // id: number;
    // createdOn: string;
    // createdBy: number;
    // updatedOn: string;
    // updatedBy: string;
}
