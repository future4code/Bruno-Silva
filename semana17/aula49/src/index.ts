import app from "./app";
import { getUsersFilterByName } from "./endpoints/getUsersFilterByName";
import { getUsersFilterByType } from './endpoints/getUsersFilterByType';

app.get("/user", getUsersFilterByName );
app.get("/user/:type", getUsersFilterByType);
