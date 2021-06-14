import express, { Request, Response } from "express";
import { sequelize } from "./db/connection/index";
import { Sequelize, QueryTypes } from "sequelize";
import { router as userRouter } from "./api/user/index";
import { router as companyRouter } from "./api/company/index";
import { router as shiftRouter } from "./api/shifts/index";
import { router as authRouter } from "./api/auth/index";
import { router as allowanceRouter } from "./api/allowance/index"
import cors from "cors";
import { verifyToken } from "./utils/verifyToken";

sequelize.sync();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/users", verifyToken, userRouter);
app.use("/api/companys", verifyToken, companyRouter);
app.use("/api/shifts", verifyToken, shiftRouter);
app.use("/api/allowances", verifyToken, allowanceRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

