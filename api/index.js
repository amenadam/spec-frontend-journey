import express from "express";
import cors from "cors";
//dummy data
let users = [
  { _id: "1", fullName: "Abebe Bekele", userType: "Basic" },
  { _id: "2", fullName: "Solomon Demissie", userType: "Pro" },
  { _id: "3", fullName: "User 3", userType: "Pro +" },
  { _id: "4", fullName: "Ezra Solomon", userType: "Pro +" },
  { _id: "5", fullName: "User 5", userType: "Pro +" },
  { _id: "6", fullName: "User 6", userType: "Pro +" },
  { _id: "7", fullName: "User 7", userType: "Pro +" },
  { _id: "8", fullName: "User 8", userType: "Pro +" },
  { _id: "9", fullName: "User 9", userType: "Pro +" },
  { _id: "10", fullName: "User 10", userType: "Pro +" },
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
