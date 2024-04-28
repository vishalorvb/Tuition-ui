import { Skeleton, Stack } from '@mui/material';
import React from 'react'

function WaveSkeleton() {
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} animation='wave' />
            <Skeleton variant="rectangular" animation='pulse' height={210} />
            <Skeleton variant="rounded" animation='wave' height={100} />
        </Stack>
    );
}

export default WaveSkeleton
