/**
 * https://www.npmjs.com/package/react-csv
 */
const sampleCsvHeaders = [
    { label: "Payee ID", key: "payee_id" },
    { label: "Account Number", key: "account_number" },
    { label: "Amount", key: "amount" },
    { label: "Beneficiary Name", key: "beneficiary_name" },
    { label: "Bank Name", key: "bank_name" },
    { label: "Bank Code", key: "bank_code" },
    { label: "Beneficiary Email", key: "beneficiary_email" },
    { label: "Beneficiary Phone Number", key: "beneficiary_phone_number" },
];

const sampleCsvData = [
    {
        payee_id: "",
        account_number: "",
        amount: "",
        beneficiary_name: "",
        bank_name: "",
        bank_code: "",
        beneficiary_email: "",
        beneficiary_phone_number: "",
    },
];

const csvSampleReport = {
    filename: "sample_csv_upload.csv",
    headers: sampleCsvHeaders,
    data: sampleCsvData,
    target: "_blank",
    className: "text-green-600",
};

export default csvSampleReport;
