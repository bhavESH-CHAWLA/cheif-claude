import express from "express"
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";


dotenv.config();


const app= express();
app.use(cors()); 
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/getRecipe", async (req, res) => {   
  try {
    const { ingredients } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: `Create a simple recipe using only these ingredients: ${ingredients.join(", ")}` }
      ]
    });

       res.json({ recipe: completion.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }

  });

app.listen(3001, () => {
  console.log("✅ Server running on http://localhost:3001");
});