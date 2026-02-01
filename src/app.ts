import express from "express";
import bookRoutes from "./routes/book.routes";
import memberRoutes from "./routes/member.routes";

const app = express();

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);

export default app;
