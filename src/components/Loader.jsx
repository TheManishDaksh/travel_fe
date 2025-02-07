import React from 'react'
import { CircularProgress } from '@mui/material';

function Loader() {
  return (
    <div className='flex justify-center items-center text-lg font-bold'>
        <div><CircularProgress/></div>
        <p>Please wait while it's Loading...</p>
    </div>
  )
}

export default Loader