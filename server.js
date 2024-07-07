import "dotenv/config.js";
import http from "http";
import { dirname } from "path";
import { parse, fileURLToPath } from "url";
import {
  homePage,
  jsonSuccess,
  post,
  serveAdminType,
  serveType,
} from "./backend/helpers.js";
import {
  getAll,
  getAllMessages,
  insertMail,
  insertMessage,
  insertOne,
} from "./backend/model.js";
const __filename = fileURLToPath(import.meta.url);
const PORT = process.env.PORT || 900;

export const __dirname = dirname(__filename);

const appServer = http.createServer((req, res) => {
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
    homePage("dist", res);
  }
});

const adminServer = http.createServer(async (req, res) => {
  const { pathname, query } = parse(req.url, true);
  console.log(pathname);
  if (pathname.includes(".")) {
    serveAdminType(pathname, res);
  } else if (req.method == "POST") {
    if (pathname == "/register") {
      post(req, async (data) => {
        const status = await insertOne(data);
        jsonSuccess(res, status);
      });
    }
  } else if (pathname == "/all-attendee") {
    const data = await getAll();
    console.log(data);
    jsonSuccess(res, data);
  } else if (pathname == "/all-messages") {
    const data = await getAllMessages();
    console.log(data);
    jsonSuccess(res, data);
  } else {
    homePage("admin", res);
  }
});

appServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening at port: ${PORT}`);
});

adminServer.listen(3000, "0.0.0.0", () => {
  console.log(`Server is listening at port: 3000`);
});
