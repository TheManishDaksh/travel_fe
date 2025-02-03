import React from 'react'
import { CircularProgress } from '@mui/material';

function Loader() {
  return (
    <div>
        <div><CircularProgress/></div>
        <p>Please wait while it's Loading...</p>
    </div>
  )
}

export default Loader