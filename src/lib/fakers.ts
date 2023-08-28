// import { IPensioners } from "@/data/pensioners";

const getPensioners = (id: number) => ({
    id,
    image: "https://mdbootstrap.com/img/new/avatars/8.jpg",
    firstName: "Josephine",
    middleName: "Andrew",
    lastName: "Andrew",
    rank: "Staff sergeant",
    verificationMode: "NIN",
    referenceId: "20NA/62/2913",
    status: "Completed",
});

const getAdmins = (id: number) => ({
    id,
    username: "olayinka.ibrahim",
    referenceId: "08/30gc051",
    createdAt: "April 30th, 2023",
    role: "Andrew",
});

const pensionersData = new Array(50)
    .fill(null)
    .map((_, index) => getPensioners(index + 1));

const adminData = new Array(10).fill(null).map((_, index) => getAdmins(index + 1));

export { pensionersData, adminData };
