import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography  variant='h4'>BLOG APPLICATION</Typography>&nbsp;&nbsp;
                <Button variant='contained' color='success'> 
                <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>home</Link></Button> &nbsp; &nbsp;
                <Button variant='contained' color='secondary'>
                    <Link to={'/Form'} style={{textDecoration:'none', color:'white'}}>add blog</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar