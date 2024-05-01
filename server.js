import "dotenv/config.js";
import http from "http";
import { dirname } from "path";
import { parse, fileURLToPath } from "url";
import { homePage, jsonSuccess, post, serveType } from "./backend/helpers.js";
import { insertMail, insertMessage, insertOne } from "./backend/model.js";
const __filename = fileURLToPath(import.meta.url);
const PORT = process.env.PORT || 900;

export const __dirname = dirname(__filename);
console.log(__dirname);
const server = http.createServer((req, res) => {
  const { pathname, query } = parse(req.url, true);
  console.log(pathname);
  if (pathname.includes(".")) {
    serveType(pathname, res);
  } else if (req.method == "POST") {
    if (pathname == "/register") {
      post(req, async (data) => {
        const status = await insertOne(data);
        jsonSuccess(res, status);
      });
    }
    if (pathname == "/message") {
      post(req, async (data) => {
        const status = await insertMessage(data);
        jsonSuccess(res, status);
      });
    }
    if (pathname == "/newsletter") {
      post(req, async (data) => {
        console.log(data);
        const status = await insertMail(data);
        jsonSuccess(res, status);
      });
    }
  } else {
    homePage(res);
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening at port: ${PORT}`);
});
