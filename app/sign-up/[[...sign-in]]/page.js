import React from "react";
import {Container, Box, Typography, AppBar, Toolbar, Button} from "@mui/material"
import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
    return (
      <>
        {/* Header */}
        <AppBar position="static" sx={{ backgroundColor: '#1a73e8', boxShadow: 'none', py: 1 }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Smartolia
            </Typography>
            <Box>
              <Link href="/login" passHref>
                <Button color="inherit" sx={{ mr: 2, fontWeight: 'bold' }}>
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="contained" color="secondary" sx={{ fontWeight: 'bold' }}>
                  Sign Up
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
  
        {/* Sign-Up Form */}
        <Container maxWidth="sm" sx={{ mt: 8 }}>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column"
          sx={{ textAlign: 'center', py: 8, backgroundColor: '#f4f6f8', borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
              Sign Up
            </Typography>
            
            <SignUp/>
            </Box>
        </Container>
      </>
    )
  }