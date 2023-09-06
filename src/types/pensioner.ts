// import { IApiResponse } from ".";

export interface IPensionerRequestPayload {
    accountNo: string;
    bankCode: string;
    bvn: string;
    email: string;
    firstName: string;
    lastName: string;
    otherName: string;
    phone: string;
    rankCode: string; // confirm this has been changed
    serviceNo: string;
}

export interface IGetPensionerResponse {}

export interface IPensioners {
    id: number;
    image: string;
    firstName: string;
    middleName: string;
    lastName: string;
    rank: string;
    verificationMode: string;
    referenceId: string;
    status: string;
}
