// Robust message save route with proper error handling
// The following code is written to save a message, but it sometimes fails silently:
// app.post("/save", async (req, res) => {
//   const { from, message } = req.body;
//   db.collection("messages").insertOne({ from, message });
//   res.json({ status: "saved" });
// });

// 👉 Identify the bugs/problems (minimum 3 issues) and rewrite robust, production-ready code that ensures:
// ●	Errors are properly caughts

// ●	Data is always saved with a timestamp

// ●	A proper response is sent back


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
