import { CgMoreVertical } from "react-icons/cg";
import Pagination from "../Pagination/Pagination";

const Table = () => {
  return (
    <>
      <div className="flex flex-col font-latoRegular">
        <div className="w-full">
          <table className="w-full text-left text-sm font-light">
            <thead className="border-b font-medium bg-[#F2FAF5]">
              <tr className="text-[#00873D]">
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  S/N
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Image
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  First Name
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Middle Name
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Last Name
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Rank
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Verification Mode
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Verification Date
                  <div>(dd/mm/yy)</div>
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Reference ID
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Date of Birth
                  <div>(dd/mm/yy)</div>
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Status
                </th>
                <th scope="col" className="px-4 py-2 text-[12px] text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#EAFCF2] rounded-[16px] py-[4px] px-[12px] text-[#27AE60] font-[600]">
                    Completed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#EAFCF2] rounded-[16px] py-[4px] px-[12px] text-[#27AE60] font-[600]">
                    Completed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#FFE5E5] rounded-[16px] py-[4px] px-[12px] text-[#DC2C2C] font-[600]">
                    Failed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#FEF4DB] rounded-[16px] py-[4px] px-[12px] text-[#EFB008] font-[600]">
                    Pending
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#FFE5E5] rounded-[16px] py-[4px] px-[12px] text-[#DC2C2C] font-[600]">
                    Failed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#EAFCF2] rounded-[16px] py-[4px] px-[12px] text-[#27AE60] font-[600]">
                    Completed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#FEF4DB] rounded-[16px] py-[4px] px-[12px] text-[#EFB008] font-[600]">
                    Pending
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#FFE5E5] rounded-[16px] py-[4px] px-[12px] text-[#DC2C2C] font-[600]">
                    Failed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#EAFCF2] rounded-[16px] py-[4px] px-[12px] text-[#27AE60] font-[600]">
                    Completed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2 text-[10px] font-medium text-center">
                  01
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-[10px]">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-[50%]"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Josephine
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-center text-[10px]">
                  Andrew
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  Garba
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-[10px]">
                  Staff sergeant
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  NIN
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  03/07/2019
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  20NA/62/2913
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  21st/Oct/1854
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <span className="bg-[#EAFCF2] rounded-[16px] py-[4px] px-[12px] text-[#27AE60] font-[600]">
                    Completed
                  </span>
                </td>
                <td className="cursor-pointer whitespace-nowrap px-4 py-2  text-center text-[10px]">
                  <CgMoreVertical />
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Table;
