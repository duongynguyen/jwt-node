import express from "express";
import { handleHelloWorld, handleUserPage } from "../controller/homeController";

const router = express.Router();

/**
 *
 * @param {*} app - express app
 */
const initWebRoutes = (app) => {
  router.get("/", handleHelloWorld);
  router.get("/user", handleUserPage);

  return app.use("/", router);
};

export default initWebRoutes;
