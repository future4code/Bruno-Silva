import { app } from './app';
import { getAllCountries } from './endpoints/getAllCountries';
import { getCountryById } from './endpoints/getCountryById';
import { getFilteredCountry } from './endpoints/getFilteredCountry';
import { postEditCountry } from './endpoints/postEditCountry';

app.get("/countries", getAllCountries);
app.get("/countries/search", getFilteredCountry);
app.get("/countries/:id", getCountryById);
app.post("/countries/:id", postEditCountry);
