import xlsx, { IJsonSheet } from "json-as-xlsx";

/**
 * https://www.npmjs.com/package/json-as-xlsx
 */

interface IDownload {
    banks: {
        id: string;
        name: string;
        code: string;
    }[];
    ranks: {
        id: string;
        name: string;
        code: string;
    }[];
}
export default function downloadToExcel({ banks, ranks }: IDownload) {
    const data: IJsonSheet[] = [
        {
            sheet: "Bank Code",
            columns: [
                // { label: "ID", value: "id" },
                { label: "Bank Name", value: "label" },
                { label: "Bank Code", value: "value" },
                // { label: "Age", value: (row) => `${row.age} years` }, // Custom format
            ],
            content: banks,
        },
        {
            sheet: "Rank",
            columns: [
                // { label: "ID", value: "id" },
                { label: "Rank Name", value: "label" },
                { label: "Rank Code", value: "value" },
            ],
            content: ranks,
        },
    ];

    const settings = {
        fileName: "BankCode_RankName",
    };

    xlsx(data, settings);
}
