import "dotenv/config.js";
import http from "http";
import { dirname } from "path";
import { parse, fileURLToPath } from "url";
import { homePage, jsonSuccess, post } from "./backend/helpers.js";
const __filename = fileURLToPath(import.meta.url);

const PORT = process.env.PORT || 900;

export const __dirname = dirname(__filename);
const server = http.createServer((req, res) => {
  const { pathname, query } = parse(req.url, true);
  if (pathname == "/") {
    homePage(res);
  }
  if (pathname == "/register") {
    post(req, (data) => {
      console.log(data);
      jsonSuccess(res, { stat: true, message: "Data recieved successfully" });
    });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening at port: ${PORT}`);
});
