import React, { useState } from "react";
import { Box, TextField, Typography, Button, Paper, InputAdornment, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import TopBar from "../dashboard/TopBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useUser } from "../context/UserProvider";

const MyProfile = () => {
    const { user, batches } = useUser();
    const [profile, setProfile] = useState({
        name: user?.name || "",
        email: user?.email || "",
        mobile: user?.number || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Profile Saved:", profile);
        // Call your API to save profile here
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
                        My Profile
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ maxWidth: 500, mx: "auto" }}
                    >
                        Update your personal information below.
                    </Typography>
                </Paper>

                {/* Form */}
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
                    <TextField
                        label="Name"
                        name="name"
                        fullWidth
                        value={profile.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon sx={{ color: "#B79C70" }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            borderRadius: "12px",
                            background: "#fff",
                            boxShadow: "0px 4px 15px rgba(26, 82, 118, 0.1)",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                "& fieldset": {
                                    borderColor: "#1a537664",
                                    borderWidth: 1.5,
                                },
                                "&:hover fieldset": {
                                    borderColor: "#145A86",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#1A5276",
                                    borderWidth: 2,
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "#1A5276",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#1A5276",
                            },
                        }}
                    />


                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        fullWidth
                        value={profile.email}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: "#B79C70" }} />
                                </InputAdornment>
                            ),
                        }}
                        placeholder="Enter your email"
                        sx={{
                            borderRadius: "12px",
                            background: "#fff",
                            boxShadow: "0px 4px 15px rgba(26, 82, 118, 0.1)",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                "& fieldset": {
                                    borderColor: "#1a537664",
                                    borderWidth: 1,
                                },
                                "&:hover fieldset": {
                                    borderColor: "#145A86",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#1A5276",
                                    borderWidth: 2,
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "#1A5276",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#1A5276",
                            },
                        }}
                    />

                    <TextField
                        label="Mobile Number"
                        name="mobile"
                        type="tel"
                        fullWidth
                        value={profile.mobile}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon sx={{ color: "#B79C70" }} />
                                </InputAdornment>
                            ),
                        }}
                        placeholder="Enter your mobile number"
                        sx={{
                            borderRadius: "12px",
                            background: "#fff",
                            boxShadow: "0px 4px 15px rgba(26, 82, 118, 0.1)",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                "& fieldset": {
                                    borderColor: "#1a537664",
                                    borderWidth: 1,
                                },
                                "&:hover fieldset": {
                                    borderColor: "#145A86",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#1A5276",
                                    borderWidth: 2,
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "#1A5276",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#1A5276",
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 1.1,
                            fontWeight: 600,
                            fontSize: "16px",
                            borderRadius: "12px",
                            background: "linear-gradient(90deg, #1A5276, #145A86)",
                            boxShadow: "0px 4px 15px rgba(26, 82, 118, 0.4)",
                            "&:hover": {
                                background: "linear-gradient(90deg, #145A86, #0F466B)",
                                boxShadow: "0px 6px 20px rgba(26, 82, 118, 0.5)",
                            },
                        }}
                        onClick={handleSave}
                    >
                        Save Changes
                    </Button>

                </Paper>

                <Box sx={{ width: "100%", mt: 1, display: "flex", justifyContent: "center" }}>
                    <TableContainer
                        component={Paper}
                        sx={{
                            maxWidth: { xs: 420, sm: 600, md: 720 },
                            borderRadius: 3,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ p: 2, color: "#1A5276", fontWeight: 700, justifyContent: "center", display: "flex" }}
                        >
                            Batch List
                        </Typography>
                        <Table>
                            <TableHead sx={{ backgroundColor: "#f4f6f8" }}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 600, color: "#1A5276" }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#1A5276" }}>Start Time</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#1A5276" }}>End Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {batches.map((batch) => (
                                    <TableRow key={batch.id} hover>
                                        <TableCell>{batch.id}</TableCell>
                                        <TableCell>{batch.startTime}</TableCell>
                                        <TableCell>{batch.endTime}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

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

export default MyProfile;
