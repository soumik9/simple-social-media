import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const BackdropLoading = () => {
    return (
        <div className='flex justify-center items-center h-[50vh]'>
            <CircularProgress />
        </div>
    )
}

export default BackdropLoading