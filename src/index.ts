// @ts-ignore
import express from "express";

const app = express()
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
    return res.set({
        status: "success",
        message: "Hello From Express Server"
    });
});

app.listen(PORT, () => console.log(`Express Server started on PORT: ${PORT}`));