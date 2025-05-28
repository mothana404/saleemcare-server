require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const http = require("http");
const setupSocket = require("./src/socket");
const errorHandler = require("./src/middlewares/errorHandler");
const connectDatabase = require("./src/config/databaseConnection");
const router = require("./src/routes/index.routes");
const { failedResponse } = require("./src/utils/response");

const app = express();
const server = http.createServer(app);

// connectDatabase();

app.use(helmet());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupSocket(server);

app.use("/api", router);

app.use((req, res) => {
  failedResponse(res, 404, null, "Resource not found");
});

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
