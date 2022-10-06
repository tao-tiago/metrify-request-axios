import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/", (req, res) => {
  const message = req.body.dummy || "nothing";

  setTimeout(() => {
    res.send({ message });
  }, 1000)
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});

export default app;
