import React, { useState } from 'react'
import TopBar from '../dashboard/TopBar'
import { Box, Divider, Paper, Tab, Tabs, Typography } from '@mui/material'
import CustomerProfile from './CustomerProfile';
import CustomerList from './CustomerList';

const CustomerTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [editCustomer, setEditCustomer] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        if (newValue === 0 && !editCustomer) {
            setEditCustomer(null); // reset form if not editing
        }
    };

    const handleEditCustomer = (customer) => {
        setEditCustomer(customer); // send customer data to form
        setActiveTab(0); // switch to Add/Edit tab
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#f4f6f8",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <TopBar />
            <Box
                sx={{
                    flex: 1,
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 3, sm: 4, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    bgcolor: "#f8f9fa",
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        width: "100%",
                        maxWidth: { xs: 420, sm: 600, md: 720 },
                        p: { xs: 3, sm: 4 },
                        borderRadius: 4,
                        background: "#fff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        textAlign: "center",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight={700}
                        gutterBottom
                        sx={{ color: "#1A5276", letterSpacing: 0.5 }}
                    >
                        Customer profile
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ maxWidth: 500, mx: "auto" }}
                    >
                        Add new Customer profile information below or edit an existing one.
                    </Typography>
                </Paper>

                <Paper
                    elevation={0}
                    sx={{
                        width: "100%",
                        maxWidth: { xs: 420, sm: 600, md: 720 },
                        p: { xs: 3, sm: 4 },
                        borderRadius: 4,
                        background: "#fff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        border: "1px solid #e0e0e0",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="fullWidth"
                        sx={{
                            mb: 3,
                            borderRadius: 3,
                            backgroundColor: "#f1f3f6",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            "& .MuiTabs-indicator": {
                                height: "100%",
                                borderRadius: 3,
                                background: "linear-gradient(90deg, #1A5276, #145A86)",
                                transition: "all 0.3s ease",
                                zIndex: 1,
                            },
                        }}
                    >
                        {[`${editCustomer ? "Edit" : "Add"} Customer`, "View Customers"].map((label, idx) => (
                            <Tab
                                key={idx}
                                label={idx === 0 && editCustomer ? "Edit Customer" : label}
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    textTransform: "none",
                                    color: "#1A5276",
                                    transition: "all 0.3s ease",
                                    "&.Mui-selected": {
                                        color: "#fff !important",
                                        backgroundColor: "transparent", // rely on indicator
                                        zIndex: 2,
                                    },
                                    "&:hover": {
                                        color: "#145A86",
                                        backgroundColor: (theme) =>
                                            idx === activeTab ? "transparent" : "rgba(26,82,118,0.08)",
                                    },
                                }}
                            />
                        ))}
                    </Tabs>



                    <Box>
                        {activeTab === 0 && <CustomerProfile editData={editCustomer} onSave={() => setEditCustomer(null)} />}
                        {activeTab === 1 && <CustomerList onEditCustomer={handleEditCustomer} />}
                    </Box>

                </Paper>

                <Divider
                    sx={{ width: "100%", maxWidth: { xs: 420, sm: 600, md: 720 }, my: 3 }}
                />
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} MyApp — All Rights Reserved
                </Typography>
            </Box>
        </Box>
    )
}

export default CustomerTabs;
