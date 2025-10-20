import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, TableContainer, TextField } from "@mui/material";
import { format, parseISO } from "date-fns";
import CustomerActionDialog from "./CustomerActionDialog";

const sampleData = [
    { id: 1, name: "VIHAN RAJPARA", mobile: "1234567890", address: "123 Main Street, City A", dob: "1990-05-15", fee: 4500, feeStatus: "Unpaid", startDate: "2025-10-20", endDate: "2025-10-30", batchId: 1 },
    { id: 2, name: "ANITA SHAH", mobile: "9876543210", address: "456 Park Avenue, City B", dob: "1988-08-22", fee: 4500, feeStatus: "Paid", startDate: "2025-09-15", endDate: "2025-09-25", batchId: 2 },
    { id: 3, name: "RAHUL MEHTA", mobile: "9123456780", address: "789 Lake Road, City C", dob: "1992-03-10", fee: 4500, feeStatus: "Unpaid", startDate: "2025-08-10", endDate: "2025-08-20", batchId: 3 },
    { id: 4, name: "PRIYA DESAI", mobile: "9988776655", address: "12 River Street, City D", dob: "1995-12-05", fee: 4500, feeStatus: "Partially Paid", startDate: "2025-10-01", endDate: "2025-10-11", batchId: 4 },
    { id: 5, name: "KARAN PATEL", mobile: "8877665544", address: "34 Hill Road, City E", dob: "1991-07-20", fee: 4500, feeStatus: "Paid", startDate: "2025-09-10", endDate: "2025-09-20", batchId: 5 },
    { id: 6, name: "SNEHA KAPOOR", mobile: "7766554433", address: "56 Lakeview Avenue, City F", dob: "1993-11-18", fee: 4500, feeStatus: "Unpaid", startDate: "2025-08-15", endDate: "2025-08-25", batchId: 6 },
    { id: 7, name: "AMIT GUPTA", mobile: "6655443322", address: "78 Maple Street, City G", dob: "1989-09-09", fee: 4500, feeStatus: "Partially Paid", startDate: "2025-10-05", endDate: "2025-10-15", batchId: 7 },
    { id: 8, name: "MEERA SINGH", mobile: "5544332211", address: "90 Pine Road, City H", dob: "1994-04-12", fee: 4500, feeStatus: "Paid", startDate: "2025-09-18", endDate: "2025-09-28", batchId: 8 },
    { id: 9, name: "RAVI SHARMA", mobile: "4433221100", address: "101 Oak Lane, City I", dob: "1990-01-25", fee: 4500, feeStatus: "Unpaid", startDate: "2025-08-20", endDate: "2025-08-30", batchId: 9 },
    { id: 10, name: "NISHA VERMA", mobile: "3322110099", address: "202 Cedar Street, City J", dob: "1992-06-30", fee: 4500, feeStatus: "Paid", startDate: "2025-10-12", endDate: "2025-10-22", batchId: 10 },
];


const CustomerList = ({ onEditCustomer }) => {
    const [search, setSearch] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const filteredData = sampleData.filter(
        (cust) => cust.name.toLowerCase().includes(search.toLowerCase()) || cust.mobile.includes(search)
    );

    const handleRowClick = (customer) => {
        setSelectedCustomer(customer);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedCustomer(null);
    };

    const handleDelete = (id) => {
        console.log("Delete customer with ID:", id);
        handleCloseDialog();
    };

    const handleEdit = (customer) => {
        onEditCustomer(customer); // send customer to parent to prefill form
        handleCloseDialog();
    };

    return (
        <Box>
            <Box sx={{ mb: 3, mt: -3 }}>
                <TextField
                    label="Search by Name or Mobile"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                />
            </Box>
            <TableContainer component={Paper} sx={{ maxHeight: 500, overflowX: "auto", borderRadius: 3, boxShadow: "0px 4px 15px rgba(26,82,118,0.1)" }}>
                <Table sx={{ tableLayout: "fixed", width: "100%" }}>
                    <TableHead sx={{ background: "#F4F6FF" }}>
                        <TableRow>
                            <TableCell sx={{ width: 50, fontWeight: 600, textAlign: 'center' }}>NO.</TableCell>
                            <TableCell sx={{ width: 200, fontWeight: 600, textAlign: 'center' }}>Name</TableCell>
                            <TableCell sx={{ width: 150, fontWeight: 600, textAlign: 'center' }}>Mobile</TableCell>
                            <TableCell sx={{ width: 120, fontWeight: 600, textAlign: 'center' }}>Start Date</TableCell>
                            <TableCell sx={{ width: 120, fontWeight: 600, textAlign: 'center' }}>End Date</TableCell>
                            <TableCell sx={{ width: 100, fontWeight: 600, textAlign: 'center' }}>Fee</TableCell>
                            <TableCell sx={{ width: 120, fontWeight: 600, textAlign: 'center' }}>Fee Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((cust, index) => (
                            <TableRow key={cust.id} hover onClick={() => handleRowClick(cust)}>
                                <TableCell sx={{ textAlign: 'center' }}>{index + 1}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{cust.name}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{cust.mobile}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{cust.startDate ? format(parseISO(cust.startDate), "dd-MM-yyyy") : "-"}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{cust.endDate ? format(parseISO(cust.endDate), "dd-MM-yyyy") : "-"}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{cust.fee}</TableCell>
                                <TableCell sx={{ textAlign: 'center', color: cust.feeStatus === "Paid" ? "green" : "red", fontWeight: 600 }}>{cust.feeStatus}</TableCell>
                            </TableRow>
                        ))}
                        {filteredData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} sx={{ textAlign: "center", py: 3 }}>No matching customers found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <CustomerActionDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                customer={selectedCustomer}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </Box>
    );
};

export default CustomerList;
