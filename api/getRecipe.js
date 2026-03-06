import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};
    const { ingredients } = body;
    const groqApiKey = process.env.GROQ_API_KEY;

    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ error: "Ingredients are required." });
    }
    if (!groqApiKey) {
      return res.status(500).json({ error: "GROQ_API_KEY is not configured." });
    }

    const client = new OpenAI({
      apiKey: groqApiKey,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `Create a simple recipe using only these ingredients: ${ingredients.join(", ")}.
Return a clear markdown response with:
- Recipe name
- Ingredients with quantities
- Step-by-step instructions`,
        },
      ],
    });

    const recipeText = completion.choices?.[0]?.message?.content?.trim() ?? "";
    return res.status(200).json({ recipe: recipeText });
  } catch (error) {
    const status = Number.isInteger(error?.status) ? error.status : 500;
    const message =
      error?.error?.message || error?.message || String(error) || "Something went wrong";
    return res.status(status).json({ error: message });
  }
}
