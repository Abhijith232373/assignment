import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div style={{marginTop:"80px"}}>
        <Typography variant='h4'>BLOG FORM</Typography>
        <TextField label="Blog Name" variant='outlined'/><br/><br/>
        <TextField type="" label="Description" variant='outlined'/><br/><br/>
        <TextField type="" label="Author Name" variant='outlined'/><br/><br/>
        <Button variant="contained" color='success'>Login</Button>

    </div>
  )
}

export default Form