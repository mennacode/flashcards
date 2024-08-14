import Image from "next/image";
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, Card, CardContent } from '@mui/material';
import { SignedIn,SignedOut, UserButton, UserProfile} from "@clerk/nextjs";


export default function Home() {
  return (
    <>
    <Head>
      <title>Flashcard SaaS</title>
      <meta name="description" content="Create and study flashcards effortlessly." />
    </Head>

    {/* Header */}
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Flashcard SaaS
        </Typography>
        <SignedOut>
        <Button color="inherit" href=  "/sign-in">Login</Button>
        <Button color="inherit"href= "/sign-up">Sign Up</Button>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </Toolbar>
    </AppBar>

    <Container maxWidth="lg" sx={{ mt: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h2" gutterBottom>
          Supercharge Your Learning with Flashcards
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Create, manage, and study flashcards with ease. Sign up today to start enhancing your knowledge.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ m: 1 }}>
          Get Started
        </Button>
        <Button variant="outlined" color="secondary" size="large" sx={{ m: 1 }}>
          Learn More
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Easy to Use
                </Typography>
                <Typography color="textSecondary">
                  Our intuitive interface makes it simple to create and organize flashcards quickly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Study Anywhere
                </Typography>
                <Typography color="textSecondary">
                  Access your flashcards from any device, whether you’re on the go or at home.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Analytics
                </Typography>
                <Typography color="textSecondary">
                  Track your progress with detailed statistics on your study sessions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Choose a plan that fits your needs.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Free
                </Typography>
                <Typography variant="h6">$0/month</Typography>
                <Typography color="textSecondary">Basic features for casual users.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Pro
                </Typography>
                <Typography variant="h6">$9.99/month</Typography>
                <Typography color="textSecondary">Advanced features for serious learners.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 Flashcard SaaS. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </>
  );
}
