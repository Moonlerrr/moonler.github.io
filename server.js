"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;
const USERS_DIR = path.join(ROOT, "Users");
const PORT = process.env.PORT || 2608;

fs.mkdirSync(USERS_DIR, { recursive: true });

const STATIC_FILES = {
  "/": "index.html",
  "/index.html": "index.html",
  "/app.js": "app.js",
  "/style.css": "style.css",
  "/manifest.json": "manifest.json",
  "/sw.js": "sw.js",
  "/logo.png": "logo.png",
};
const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
};

function hashPin(pin) {
  return crypto.createHash("sha256").update(String(pin)).digest("hex");
}
function isValidPin(pin) {
  return typeof pin === "string" && /^[0-9]{4,8}$/.test(pin);
}
function isValidToken(token) {
  return typeof token === "string" && /^[a-f0-9]{64}$/.test(token);
}
function userFile(token) {
  return path.join(USERS_DIR, token + ".json");
}
function defaultData() {
  return { friends: [], sales: [], payments: [], settings: {} };
}
function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > 5 * 1024 * 1024) { reject(new Error("too large")); req.destroy(); return; }
      chunks.push(c);
    });
    req.on("end", () => {
      try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {}); }
      catch (e) { reject(e); }
    });
    req.on("error", reject);
  });
}
function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Content-Length": Buffer.byteLength(body) });
  res.end(body);
}
function serveStatic(res, pathname) {
  const rel = STATIC_FILES[pathname];
  if (!rel) { res.writeHead(404); res.end("Not found"); return; }
  const filePath = path.join(ROOT, rel);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": CONTENT_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const pathname = url.pathname;

  try {
    if (req.method === "POST" && pathname === "/api/register") {
      const body = await readJsonBody(req);
      if (!isValidPin(body.pin)) return sendJson(res, 400, { error: "invalid_pin" });
      const token = hashPin(body.pin);
      const file = userFile(token);
      if (fs.existsSync(file)) return sendJson(res, 409, { error: "exists" });
      const data = defaultData();
      fs.writeFileSync(file, JSON.stringify(data));
      return sendJson(res, 200, { token, data });
    }

    if (req.method === "POST" && pathname === "/api/login") {
      const body = await readJsonBody(req);
      if (!isValidPin(body.pin)) return sendJson(res, 400, { error: "invalid_pin" });
      const token = hashPin(body.pin);
      const file = userFile(token);
      if (!fs.existsSync(file)) return sendJson(res, 404, { error: "not_found" });
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      return sendJson(res, 200, { token, data });
    }

    if (req.method === "GET" && pathname.startsWith("/api/session/")) {
      const token = decodeURIComponent(pathname.slice("/api/session/".length));
      if (!isValidToken(token)) return sendJson(res, 400, { error: "invalid_token" });
      const file = userFile(token);
      if (!fs.existsSync(file)) return sendJson(res, 404, { error: "not_found" });
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      return sendJson(res, 200, { data });
    }

    if (req.method === "POST" && pathname === "/api/save") {
      const body = await readJsonBody(req);
      if (!isValidToken(body.token)) return sendJson(res, 400, { error: "invalid_token" });
      const file = userFile(body.token);
      if (!fs.existsSync(file)) return sendJson(res, 404, { error: "not_found" });
      const data = body.data && typeof body.data === "object" ? body.data : defaultData();
      fs.writeFileSync(file, JSON.stringify(data));
      return sendJson(res, 200, { ok: true });
    }

    if (req.method === "GET") {
      return serveStatic(res, pathname);
    }

    res.writeHead(404); res.end("Not found");
  } catch (err) {
    sendJson(res, 500, { error: "server_error" });
  }
});

server.listen(PORT, () => console.log("FutureIL server running on port " + PORT));
