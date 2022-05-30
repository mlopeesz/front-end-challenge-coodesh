import React from 'react';
import { AppBar, Avatar, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
      }}
    >
      <Typography>Company Name</Typography>
      <Avatar Avatar>ML</Avatar>
    </AppBar>
  );
}

export default Navbar;
