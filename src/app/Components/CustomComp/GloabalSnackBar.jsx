"use client"
import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import useGlobal from '../Hooks/useGlobal';

function GlobalSnackBar() {
    const { snackbarData, setSnackbarData } = useGlobal();
    const severity = snackbarData?.severity?.toLowerCase();
    const handleClose = () => {
        setSnackbarData((ps) => {
            return { ...ps, status: false };
        });
    };
    return (
        <Snackbar
            open={snackbarData?.status}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
                {snackbarData?.message}
            </Alert>
        </Snackbar>
    )
}

export default GlobalSnackBar
