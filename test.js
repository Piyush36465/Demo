import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  { id: "101", name: "Piyush", info: "Piyush love to read novel" },
  { id: "102", name: "Raj", info: "raj is a psycopath" },
  { id: "103", name: "Charu", info: "Charu is a witch" },
];

app.get("/", (req, res) => {
  res.send(`
    <h2>User Login</h2>
    <form method="POST" action="/check">
      <label>Name:</label>
      <input type="text" name="name" required><br><br>
      <label>ID:</label>
      <input type="text" name="id" required><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/check", (req, res) => {
  const { name, id } = req.body;

  const user = users.find(
    (u) => u.name.toLowerCase() === name.toLowerCase() && u.id === id
  );

  if (user) {
    res.send(`
      <h2>Welcome, ${user.name}!</h2>
      <p>${user.info}</p>
      <a href="/">Back</a>
    `);
  } else {
    res.send(`
      <h2>Invalid name or ID!</h2>
      <a href="/">Try Again</a>
    `);
  }
});

app.listen(3030, () => {
  console.log(connected);
});
