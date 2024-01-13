// @ts-ignore
import express from "express";
import {mockSendEmail} from "./utils/email";
import {addUserToCourseQuery} from "./utils/course";

const app = express()
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
    return res.json({
        status: "success",
        message: "Hello From Express Server"
    });
});

app.post("/add-user-to-course", async (req, res) => {
    console.log("Adding User to Course");
    await addUserToCourseQuery();
    await mockSendEmail({
        from: "subhanshu.bansal5566@gmail.com",
        to: "student@gmail.com",
        subject: "Congrats on Enrolling in the Course",
        body: "Dear Student, You have been enrolled to XYZ Course",
    });
    return res.json({
        status: "success",
        message: "Enrolled Successfully"
    });
})

app.listen(PORT, () => console.log(`Express Server started on PORT: ${PORT}`));