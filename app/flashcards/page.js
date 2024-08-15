
"use client"

import {useUser} from "@clerk/nextjs"
import {useEffect} from "react"
import {collection, docs, getDocs, listConnections}  from "firebase/firestore"
import db from "@/firebase"

// export default function Flashcard(){

// const { isLoaded, isSignedIn, user } = useUser()
// const [flashcards, setFlashcards]= useState([])
// useEffect(()=> {
//   async function getFlashcards(){
//   //Check to see if doc exists
//   if (user === undefined) {
//     return
//   }
//   const docRef= doc(collection(db, "users"), user.id)
//   const docSnap= await  getDocs(docRef)

//   if (doc.Snap.exists()){
    
//     const collections= docSnap.data().flashcards
//     setFlashcards(collections)
    
//  }
//   else{
//     //Create 
//     await setDoc(docRef,{})
//   }
// }
// getFlashcards()
// },[user])


//   if (!isLoaded || !isSignedIn) {
//     // Handle loading state however you like
//     return null
//   }



//   console.log(user.id)
// return <></>
// }


"use client"

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import db from "@/firebase";
import { useRouter } from "next/router";
import { CardActionArea, CardContent, Container, Typography } from "@mui/material";
import { Container, Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";  // Import MUI components




export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getFlashcards() {
      // Check to see if doc exists
      if (!user) {
        return;
      }

      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards;
        setFlashcards(collections);
      } else {
        // Create document if it doesn't exist
        await setDoc(docRef, { flashcards: [] });
      }
    }

    getFlashcards();
  }, [user]);

  if (!isLoaded || !isSignedIn) {
    // Handle loading state however you like
    return null;
  }

  // Function to handle card click
  const handleCardClick = (name) => {
    router.push(`/page/flashcard?id=${name}`);
  };

  return (

    <Container maxwidth="md">
      <Grid container spacing ={3} sx={{mt:4}}>
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4}  key={index}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard)}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {flashcard}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
);
}
