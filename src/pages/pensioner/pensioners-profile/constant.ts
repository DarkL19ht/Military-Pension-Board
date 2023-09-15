import _ from "lodash";
import { STATUS, VerificationStatus } from "@/types/enum";

export const STATUS_OPTIONS = [
    {
        label: STATUS.ENABLED,
        value: STATUS.ENABLED,
    },
    {
        label: STATUS.DISABLED,
        value: STATUS.DISABLED,
    },
    {
        label: _.replace(STATUS.PENDING_CREATION, /_/g, " "),
        value: STATUS.PENDING_CREATION,
    },
    {
        label: _.replace(STATUS.PENDING_UPDATE, /_/g, " "),
        value: STATUS.PENDING_UPDATE,
    },
];

export const VERIFICATION_STATUS_OPTIONS = [
    {
        label: _.replace(VerificationStatus.COMPLETED, /_/g, " "),
        value: VerificationStatus.COMPLETED,
    },
    {
        label: _.replace(VerificationStatus.FAILED, /_/g, " "),
        value: VerificationStatus.FAILED,
    },
    {
        label: _.replace(VerificationStatus.ONGOING, /_/g, " "),
        value: VerificationStatus.ONGOING,
    },
    {
        label: _.replace(VerificationStatus.SUCCESSFUL, /_/g, " "),
        value: VerificationStatus.SUCCESSFUL,
    },
];
