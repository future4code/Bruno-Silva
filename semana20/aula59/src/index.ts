import { app } from "./controller/app";
import { userRouter } from './routes/userRouter';
import { taskRouter } from './routes/taskRouter';

app.use("/user", userRouter);
app.use("/task", taskRouter);