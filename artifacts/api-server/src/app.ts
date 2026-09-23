import express, {
  type ErrorRequestHandler,
  type Express,
  type RequestHandler,
} from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

const productionOrigins = (process.env["CORS_ORIGINS"] ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

if (process.env["NODE_ENV"] === "production" && productionOrigins.length === 0) {
  throw new Error("CORS_ORIGINS must list the permitted production origins.");
}

const isLocalOrigin = (origin: string) => {
  try {
    const url = new URL(origin);
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    );
  } catch {
    return false;
  }
};

const isAllowedOrigin = (origin: string | undefined) =>
  origin === undefined ||
  productionOrigins.includes(origin) ||
  (process.env["NODE_ENV"] !== "production" && isLocalOrigin(origin));

const enforceAllowedOrigin: RequestHandler = (req, res, next) => {
  if (!isAllowedOrigin(req.get("origin"))) {
    res.status(403).json({ error: "Origin is not permitted." });
    return;
  }

  next();
};

const malformedJsonHandler: ErrorRequestHandler = (error, _req, res, next) => {
  if (error instanceof SyntaxError && "body" in error) {
    res.status(400).json({ error: "Request body must be valid JSON." });
    return;
  }

  next(error);
};

app.disable("x-powered-by");
app.use(enforceAllowedOrigin);
app.use(
  cors({
    origin: (origin, callback) => callback(null, isAllowedOrigin(origin)),
    methods: ["GET", "HEAD", "OPTIONS"],
    optionsSuccessStatus: 204,
  }),
);
app.use((_req, res, next) => {
  res.set({
    "Content-Security-Policy": "default-src 'none'",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  });
  next();
});
app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));

app.use("/api", router);
app.use(malformedJsonHandler);

export default app;
