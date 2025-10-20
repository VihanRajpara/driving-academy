import React from "react";
import {
    Typography,
    Box,
    Paper,
    Divider,
} from "@mui/material";
import {
    AccountCircle,
    PeopleAlt,
    DirectionsCar,
    ReceiptLong,
    Payment,
    Assessment,
    DriveEta,
    PersonPin,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

const Dashboard = () => {
    const userName = "Vihan";
    const navigate = useNavigate();
    const items = [
        { label: "My Profile", icon: <AccountCircle />, color: "#b79c70", path: "/myprofile" },
        { label: "Customer Profile", icon: <PeopleAlt />, color: "#c5a77f", path: "/customer-profile" },
        { label: "Ride Detail", icon: <DirectionsCar />, color: "#d0b58c", path: "/ride-detail" },
        { label: "Receipts", icon: <ReceiptLong />, color: "#ddc29a", path: "/receipts" },
        { label: "Payment", icon: <Payment />, color: "#e6ccaa", path: "/payment" },
        { label: "Cars", icon: <DriveEta />, color: "#d4b892", path: "/cars" },
        { label: "Driver", icon: <PersonPin />, color: "#c5a77f", path: "/driver" },
        { label: "Reports", icon: <Assessment />, color: "#b79c70", path: "/reports" },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#f4f6f8",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* 🔹 Top App Bar */}
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
                {/* Header Card */}
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
                        Hello, {userName}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ maxWidth: 500, mx: "auto" }}
                    >
                        Welcome back! Here’s a summary of your account and quick actions.
                    </Typography>
                </Paper>

                {/* Action Grid */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, 1fr)",
                            sm: "repeat(3, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gap: { xs: 2.5, sm: 3, md: 3.5 },
                        width: "100%",
                        maxWidth: { xs: 420, sm: 600, md: 720 },
                    }}
                >
                    {items.map((item, idx) => (
                        <Paper
                            key={idx}
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                p: { xs: 2.2, sm: 2.5 },
                                textAlign: "center",
                                border: "1px solid #e0e0e0",
                                cursor: "pointer",
                                background: "#fff",
                                transition: "all 0.35s ease",
                                boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: `0 8px 20px ${item.color}55`,
                                },
                            }}
                            onClick={() => {
                                navigate(item?.path);
                            }}
                        >
                            <Box
                                sx={{
                                    width: 54,
                                    height: 54,
                                    borderRadius: "50%",
                                    mx: "auto",
                                    mb: 1.5,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    background: `linear-gradient(145deg, ${item.color}, #a6885d)`,
                                    boxShadow: `0 4px 10px ${item.color}55`,
                                    fontSize: 28,
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    color: "#1A5276",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Paper>
                    ))}
                </Box>

                {/* Footer */}
                <Divider
                    sx={{ width: "100%", maxWidth: { xs: 420, sm: 600, md: 720 }, my: 3 }}
                />
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} MyApp — All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Dashboard;
