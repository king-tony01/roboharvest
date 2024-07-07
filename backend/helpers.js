import { readFile } from "fs";
import { join, extname } from "path";
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

export function homePage(way, response) {
  const filePath = join(__dirname, way, "index.html");
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

export function serveType(file_path, response) {
  const main_path = join(__dirname, "dist", file_path);
  let contentType;
  const extension = extname(file_path).toLowerCase();
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "application/javascript";
      break;
    case ".json":
    case ".webmanifest":
      contentType = "application/json";
      break;
    case ".jsx":
      contentType = "application/jsx";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpeg":
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      contentType = "application/octet-stream";
      break;
  }

  readFile(
    main_path,
    extension == ".jpg" || extension == ".png" || extension == ".jpeg"
      ? ""
      : "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Internal server error!" }));
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(data);
      }
    }
  );
}

export function serveAdminType(file_path, response) {
  const main_path = join(__dirname, "admin", file_path);
  console.log(main_path);
  let contentType;
  const extension = extname(file_path).toLowerCase();
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "application/javascript";
      break;
    case ".json":
    case ".webmanifest":
      contentType = "application/json";
      break;
    case ".jsx":
      contentType = "application/jsx";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpeg":
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      contentType = "application/octet-stream";
      break;
  }

  readFile(
    main_path,
    extension == ".jpg" || extension == ".png" || extension == ".jpeg"
      ? ""
      : "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Internal server error!" }));
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(data);
      }
    }
  );
}
