import feathers from "@feathersjs/client";
import axios from "axios";

export const apiUrl = `http://localhost:3030`;

const app = feathers();

const restClient = feathers.rest(apiUrl);

app.configure(restClient.axios(axios));


export default app;
