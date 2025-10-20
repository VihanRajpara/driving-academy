import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Box, TableContainer } from "@mui/material";
import { format, parseISO } from "date-fns";

const sampleData = [
    {
        id: 1,
        name: "VIHAN RAJPARA",
        mobile: "1234567890",
        fee: 4500,
        feeStatus: "Unpaid",
        startDate: "2025-10-20",
        endDate: "2025-10-30",
    },
    {
        id: 2,
        name: "ANITA SHAH",
        mobile: "9876543210",
        fee: 4500,
        feeStatus: "Paid",
        startDate: "2025-09-15",
        endDate: "2025-09-25",
    },
    {
        id: 3,
        name: "RAHUL MEHTA",
        mobile: "9123456780",
        fee: 4500,
        feeStatus: "Unpaid",
        startDate: "2025-08-10",
        endDate: "2025-08-20",
    },
    {
        id: 4,
        name: "PRIYA DESAI",
        mobile: "9988776655",
        fee: 4500,
        feeStatus: "Paid",
        startDate: "2025-07-05",
        endDate: "2025-07-15",
    },
    {
        id: 5,
        name: "KARTIK PATEL",
        mobile: "9876123450",
        fee: 4500,
        feeStatus: "Unpaid",
        startDate: "2025-06-01",
        endDate: "2025-06-11",
    },
    {
        id: 6,
        name: "NISHA GANDHI",
        mobile: "9123987654",
        fee: 4500,
        feeStatus: "Paid",
        startDate: "2025-05-20",
        endDate: "2025-05-30",
    },
    {
        id: 7,
        name: "VIKRAM SINGH",
        mobile: "9988112233",
        fee: 4500,
        feeStatus: "Unpaid",
        startDate: "2025-04-10",
        endDate: "2025-04-20",
    },
    {
        id: 8,
        name: "SNEHA RATHOD",
        mobile: "9877001122",
        fee: 4500,
        feeStatus: "Paid",
        startDate: "2025-03-15",
        endDate: "2025-03-25",
    },
    {
        id: 9,
        name: "ROHAN KUMAR",
        mobile: "9123450999",
        fee: 4500,
        feeStatus: "Unpaid",
        startDate: "2025-02-01",
        endDate: "2025-02-11",
    },
    {
        id: 10,
        name: "MEERA DESAI",
        mobile: "9988770099",
        fee: 4500,
        feeStatus: "Paid",
        startDate: "2025-01-10",
        endDate: "2025-01-20",
    },
    {
        id: 11,
        name: "ADITYA VERMA",
        mobile: "9876541122",
        fee: 4500,
        feeStatus: "Unpaid",
        startDate: "2024-12-05",
        endDate: "2024-12-15",
    },
];

const CustomerList = () => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                maxHeight: 500, // vertical scroll
                overflowX: "auto", // horizontal scroll
                borderRadius: 3,
                boxShadow: "0px 4px 15px rgba(26,82,118,0.1)",
            }}
        >
            <Table sx={{ tableLayout: "fixed", width: "100%" }}>
                <TableHead sx={{ background: "#F4F6FF" }}>
                    <TableRow>
                        <TableCell sx={{ width: 50, fontWeight: 600, textAlign: 'center' }}>NO.</TableCell>
                        {/* <TableCell sx={{ width: 50, fontWeight: 600, textAlign: 'center' }}>ID</TableCell> */}
                        <TableCell sx={{ width: 200, fontWeight: 600, textAlign: 'center' }}>Name</TableCell>
                        <TableCell sx={{ width: 150, fontWeight: 600, textAlign: 'center' }}>Mobile</TableCell>
                        <TableCell sx={{ width: 120, fontWeight: 600, textAlign: 'center' }}>Start Date</TableCell>
                        <TableCell sx={{ width: 120, fontWeight: 600, textAlign: 'center' }}>End Date</TableCell>
                        <TableCell sx={{ width: 100, fontWeight: 600, textAlign: 'center' }}>Fee</TableCell>
                        <TableCell sx={{ width: 120, fontWeight: 600, textAlign: 'center' }}>Fee Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sampleData.map((cust, index) => (
                        <TableRow key={cust.id} hover>
                            <TableCell sx={{ textAlign: 'center' }}>{index + 1}</TableCell>
                            {/* <TableCell sx={{ textAlign: 'center' }}>{cust.id}</TableCell> */}
                            <TableCell sx={{ textAlign: 'center' }}>{cust.name}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{cust.mobile}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>
                                {cust.startDate ? format(parseISO(cust.startDate), "dd-MM-yyyy") : "-"}
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>
                                {cust.endDate ? format(parseISO(cust.endDate), "dd-MM-yyyy") : "-"}
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{cust.fee}</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: cust.feeStatus === "Paid" ? "green" : "red", fontWeight: 600 }}>
                                {cust.feeStatus}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomerList;
