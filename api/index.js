import express from "express";

//dummy data
let users = [
  { _id: "001", fullName: "Abebe Bekele", userType: "Basic" },
  { _id: "002", fullName: "Solomon Demissie", userType: "Pro" },
  { _id: "003", fullName: "Ezra Solomon", userType: "Pro +" },
];

const app = express();
app.use(express.json());
app.get("/=", (req, res) => {
  res.json({ success: true, message: "API running" });
});
app.get("/users", (req, res) => {
  res.json({ success: true, data: users });
});

app.listen(3000, () => console.log("Server running"));
