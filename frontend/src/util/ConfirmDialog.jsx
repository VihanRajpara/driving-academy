import React from "react";
import { Dialog, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material";

const ConfirmDialog = ({ open, onClose, onConfirm, title = "Confirm Action", message = "Are you sure?" }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    minWidth: 350,
                    p: 1,
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                }
            }}
        >
            <Box
                sx={{
                    background: "linear-gradient(90deg, #1A5276, #145A86)",
                    py: 1.5,
                    px: 3,
                    borderRadius: "12px 12px 0 0",
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "18px",
                    letterSpacing: 0.6
                }}
            >
                {title}
            </Box>

            <DialogContent sx={{ mt: 1 }}>
                <Typography variant="body1" color="text.primary" sx={{ textAlign: "center" }}>
                    {message}
                </Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                <Button
                    variant="contained"
                    onClick={onConfirm}
                    sx={{
                        background: "linear-gradient(90deg, #C0392B, #E74C3C)",
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: "12px",
                        "&:hover": { background: "linear-gradient(90deg, #E74C3C, #C0392B)" },
                        minWidth: 120
                    }}
                >
                    Yes
                </Button>

                <Button
                    variant="contained"
                    onClick={onClose}
                    sx={{
                        background: "linear-gradient(90deg, #1A5276, #145A86)",
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: "12px",
                        "&:hover": { background: "linear-gradient(90deg, #145A86, #0F466B)" },
                        minWidth: 120
                    }}
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
