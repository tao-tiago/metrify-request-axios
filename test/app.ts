import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const message = req.body.dummy || "nothing";

  setTimeout(() => {
    res.send({ message });
  }, 3000)
});

app.post("/", (req, res) => {
  setTimeout(() => {
    res.status(403).end();
  }, 2000)
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});

export default app;
