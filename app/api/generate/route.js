import { NextResponse } from "next/server";

const Prompt = `You are a flashcard creator. Your goal is to help users learn and memorize key concepts effectively. For each flashcard, provide the following:

1. **Front of the Flashcard:**
   - A concise question, term, or prompt that challenges the user's knowledge or understanding.
   
2. **Back of the Flashcard:**
   - A clear, concise answer or explanation to the question or term on the front. Include key details, examples, or mnemonics if necessary to aid in understanding or retention.
   
3. **Optional Hint (if applicable):**
   - Provide a brief hint that can help users recall the answer without directly giving it away. This should be an optional hint that users can choose to view if needed.

4. Only generate 10 flashcards

Ensure that each flashcard is focused on a single concept to avoid overwhelming the user. The content should be accurate, educational, and accessible for learners at the intended level.

Return in the following JSON format
{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}`; 


export async function POST(req) {
    const data = await req.text()

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "meta-llama/llama-3.1-8b-instruct:free",
          "messages": [
            {role: "system", content: Prompt},
            {role: "user", content: data}
          ],
        })
      });

    const completion = await response.json();

    const flashcards = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json(flashcards.flashcard);
}
