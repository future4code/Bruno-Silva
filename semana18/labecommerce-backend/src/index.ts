import app from "./app";
import createNewProduct from "./endpoints/createNewProduct";
import createNewUser from "./endpoints/createNewUser";

app.post("/user", createNewUser);
app.post("/product", createNewProduct);