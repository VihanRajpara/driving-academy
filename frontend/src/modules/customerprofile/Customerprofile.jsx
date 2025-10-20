import React, { useState } from 'react'
import { format, addDays } from "date-fns";
import { Box, Button, Divider, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import {
    AccountCircle as AccountCircleIcon,
    Phone as PhoneIcon,
    Home as HomeIcon,
    CalendarToday as CalendarTodayIcon,
    Payment as PaymentIcon,
} from "@mui/icons-material";

const CustomerProfile = () => {
    const [profile, setProfile] = useState({
        name: "",
        address: "",
        dob: "",
        startDate: format(new Date(), "yyyy-MM-dd"),
        endDate: format(addDays(new Date(), 10), "yyyy-MM-dd"),
        fee: 4500,
        feeStatus: "Unpaid",
        mobile: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!profile.name) newErrors.name = "Name is required";
        if (!profile.address) newErrors.address = "Address is required";
        if (!profile.dob) newErrors.dob = "Date of Birth is required";
        if (!profile.startDate) newErrors.startDate = "Start Date is required";
        if (!profile.endDate) newErrors.endDate = "End Date is required";
        if (!profile.mobile) newErrors.mobile = "Mobile Number is required";
        if (!profile.fee) newErrors.fee = "Fee is required";
        if (!profile.feeStatus) newErrors.feeStatus = "Fee Status is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validate()) {
            console.log("Customer profile saved:", profile);
            // Add API call here
        }
    };
    return (
        <Box
            sx={{
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
                placeholder="Enter customer's full name"
                error={!!errors.name}
                helperText={errors.name}
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
                label="Address"
                name="address"
                fullWidth
                value={profile.address}
                onChange={handleChange}
                placeholder="Enter customer's address"
                error={!!errors.address}
                helperText={errors.address}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <HomeIcon sx={{ color: "#B79C70" }} />
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
                label="Date of Birth"
                name="dob"
                type="date"
                fullWidth
                value={profile.dob}
                onChange={handleChange}
                error={!!errors.dob}
                helperText={errors.dob}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarTodayIcon sx={{ color: "#B79C70" }} />
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

            <Stack direction="row" spacing={2}>
                <TextField
                    label="Start Date"
                    name="startDate"
                    type="date"
                    fullWidth
                    value={profile.startDate}
                    onChange={handleChange}
                    error={!!errors.startDate}
                    helperText={errors.startDate}
                    InputLabelProps={{ shrink: true }}
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
                    label="End Date"
                    name="endDate"
                    type="date"
                    fullWidth
                    value={profile.endDate}
                    onChange={handleChange}
                    error={!!errors.endDate}
                    helperText={errors.endDate}
                    InputLabelProps={{ shrink: true }}
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
            </Stack>

            <TextField
                label="Fee"
                name="fee"
                type="number"
                fullWidth
                value={profile.fee}
                onChange={handleChange}
                error={!!errors.fee}
                helperText={errors.fee}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PaymentIcon sx={{ color: "#B79C70" }} />
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
                label="Fee Status"
                name="feeStatus"
                fullWidth
                value={profile.feeStatus}
                onChange={handleChange}
                error={!!errors.feeStatus}
                helperText={errors.feeStatus}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PaymentIcon sx={{ color: "#B79C70" }} />
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
                label="Mobile Number"
                name="mobile"
                type="tel"
                fullWidth
                value={profile.mobile}
                onChange={handleChange}
                placeholder="Enter customer's mobile number"
                error={!!errors.mobile}
                helperText={errors.mobile}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PhoneIcon sx={{ color: "#B79C70" }} />
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
                Save Customer
            </Button>
        </Box>
    )
}

export default CustomerProfile