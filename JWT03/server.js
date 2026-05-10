import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import authRoutes from "./app/routes/auth.routes.js";
import userRoutes from "./app/routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/test", userRoutes);

// 🧠 PORT dinámico para Render
const PORT = process.env.PORT || 3000;

// 🚨 SOLO sincroniza DB si NO estás en producción
const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
    db.sequelize.sync({ force: false }).then(() => {
        console.log("Database synchronized (local)");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
} else {
    // 🚀 En producción NO uses sync con localhost DB
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} (production mode)`);
    });
}