import express from 'express';
import { PurchaseController } from '../controller/PurchaseController';

export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController();

purchaseRouter.get("/:id", purchaseController.findById);

purchaseRouter.post("/:clientId", purchaseController.create);