import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Donations Simulation
  let totalDonations = 642;
  const donationGoal = 1000;

  app.get("/api/donations", (req, res) => {
    res.json({ total: totalDonations, goal: donationGoal });
  });

  app.post("/api/donate", (req, res) => {
    const { amount } = req.body;
    totalDonations += amount;
    res.json({ success: true, newTotal: totalDonations });
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("New Contact Form Submission:", { name, email, message });
    
    // In a real app, you might save to DB or send email here
    res.json({ 
      success: true, 
      message: "Transmission logged in secure backend.",
      id: Math.random().toString(36).substring(7).toUpperCase()
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sybix Secure Server running on http://localhost:${PORT}`);
  });
}

startServer();
