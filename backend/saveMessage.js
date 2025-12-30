// Robust message save route with proper error handling

app.post("/save", async (req, res) => {
  try {
    const { from, message } = req.body;

    if (!from || !message) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const result = await db.collection("messages").insertOne({
      from,
      message,
      timestamp: new Date()
    });

    res.status(201).json({
      status: "saved",
      id: result.insertedId
    });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});
