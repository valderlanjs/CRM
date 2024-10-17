import express from "express";
import { CustomerController } from "../controllers/customerController";

const router = express.Router();
const customerController  = new CustomerController();

router.post('/', customerController.createCustomer);
router.get("/", customerController.getAllCustomer);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export default router;