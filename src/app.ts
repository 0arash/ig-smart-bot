import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: "arash",
      password: "123",
      email: "arash@gmail.com",
    },
  });
  res.status(201).json({
    data: user,
  });
});

app.listen(3000, () => {
  console.log("server running....");
});
