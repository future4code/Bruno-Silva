import app from "./app";

import getAllUsers from "./endpoints/getAllUsers";
import getAllProducts from "./endpoints/getAllProducts";
import getAllTrips from "./endpoints/getAllTrips";

import createNewProduct from "./endpoints/createNewProduct";
import createNewUser from "./endpoints/createNewUser";
import createNewTrip from "./endpoints/createNewTrip";
import createNewPurchase from "./endpoints/createNewPurchase";

app.get("/user", getAllUsers);
app.get("/product", getAllProducts);
app.get("/trip", getAllTrips);

app.post("/user", createNewUser);
app.post("/product", createNewProduct);
app.post("/trip", createNewTrip);
app.post("/purchase", createNewPurchase);

// caminho para criação de trip deveria ser /product, já que no banco é só uma tabela?