"use client"

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import db from "@/firebase";
import { useRouter } from "next/navigation";
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box, TextField, Paper, Button } from "@mui/material";  // Import MUI components

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState('');
  const[name, setName] = useState('');
  const [llama, setLlama] = useState(false);
  const router = useRouter()

  const handleSubmit = async() => {
    fetch('api/generate', {
      method: 'POST',
      body: text
    }).then((res) => res.json()).then(data > setFlashcards(data))
  }

  // Function to handle card click
  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  };

  const handleOpen = () => {
    setLlama(true)
  }

  const handleClose = () => {
    setLlama(false)
  }

  const saveFlashcards = async() => {
    if(!name) {
      alert("Please enter a name")
      return
    }

    const batch = writeBatch(db)
    const userDocRef = doc(collection(db, "users"), user.id)
    const docSnap = await getDoc(userDocRef)

    if(docSnap.exists()) {
      const collections = docSnap.data().flashcards || []
      if(collections.find((f) => f.name === name)) {
        alert("Flashcard collection with the same name already exists.")
        return 
      }
      else {
        collections.push({name})
        batch.set(userDocRef, {flashcards: collections}, {merge: true})
      }
    }
    else {
      batch.set(userDocRef, {flashcards: [{name}]})
    }

    const colRef = collection(userDocRef, name)
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(colRef)
      batch.set(cardDocRef, flashcard)
    })

    await batch.commit()
    handleClose()
    router.push('/flashcards')
  }

  return (
    <Container maxwidth="md">
      <Box sx={{ mt:4,
                 mb: 6,
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center"}}>
        <Typography variant="h4">Generate Flashcards</Typography>
        <Paper sx={{p:4, width:"100%"}}>
          <TextField value={text} onChange={(e) => setText(e.target.value)} label="Enter text" fullWidth multiline
                     rows={4} variant="outlined" sx={{mb:2}}/>
          <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>Submit</Button>
        </Paper>
      </Box>
      {flashcards.length > 0 && (
        <Box sx={{mt:4}}>
          <Typography variant="h5">Flashcards Preview</Typography>
          <Grid container spacing={3}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea onClick={() => {
                    handleCardClick(index)
                  }}>
                    <CardContent>
                      <Box><div><div><Typography variant="h5" component="div">
                        {flashcard.front}</Typography></div></div>
                        <div><div><Typography variant="h5" component="div">
                        {flashcard.back}</Typography></div></div></Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}
