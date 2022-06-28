import axios from "axios";
const DummyApi = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  timeout: 10000,
  headers: { "app-id": process.env.REACT_APP_API_KEY },
});

export { DummyApi };
