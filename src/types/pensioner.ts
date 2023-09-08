import { IApiResponse } from ".";
import { STATUS } from "./enum";

export interface IPensionerRequestPayload {
    accountNo: string;
    bankCode: string;
    bvn: string;
    email: string;
    firstName: string;
    lastName: string;
    otherName: string;
    phone: string;
    rankCode: string;
    serviceNo: string;
}

export interface IGetPensionerResponsePayload
    extends IApiResponse<IPensionerDataContent> {}

export interface IPensionerDataContent {
    id: number;
    serviceNo: string;
    rank: {
        code: string;
        name: string;
    };
    lastName: string;
    firstName: string;
    otherName: string;
    email: string;
    phone: string;
    banks: {
        code: string;
        name: string;
    };
    accountNo: string;
    bvn: string;
    verificationStage: "NO_VERIFICATION";
    verificationOption: "NIN";
    adminComment: string | null;
    verificationIdNumber: null;
    verificationStatus: "VERIFICATION_NOT_COMPLETED";
    verificationReference: null;
    authorized: boolean;
    status: STATUS;
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number | null;
}
