import express from "express";
import cors from "cors";
//dummy data
let users = [
  { _id: "001", fullName: "Abebe Bekele", userType: "Basic" },
  { _id: "002", fullName: "Solomon Demissie", userType: "Pro" },
  { _id: "003", fullName: "Ezra Solomon", userType: "Pro +" },
];

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "API running" });
});
app.get("/users", (req, res) => {
  res.json({ success: true, data: users });
});
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u._id === req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.json({ success: true, data: user });
});

app.listen(3001, () => console.log("Server running"));
