import { Router } from "express";
const router = Router();
import {
  product_create,
  product_all,
  product_details,
  product_update,
  product_delete,
} from "../controllers/productController.js";
// const router = require("express").Router();
// const productController = require("../controllers/productController");

router.post("/", product_create);
router.get("/", product_all);
router.get("/:productId", product_details);
router.patch("/:productId", product_update);
router.delete("/:productId", product_delete);

// module.exports = router;
export default router;
