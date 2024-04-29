import { readFile } from "fs";
import { join } from "path";
import { __dirname } from "../server.js";
export function post(request, callback) {
  let body;
  request.on("data", (chunk) => {
    body = chunk;
  });
  request.on("end", () => {
    const data = JSON.parse(body);
    callback(data);
  });
}

export function homePage(response) {
  const filePath = join(__dirname, "index.html");
  readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Internal server error!" }));
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    }
  });
}

export function jsonSuccess(response, data) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
}
