import express from "express";
import * as ProductController from "./controllers/ProductController";
import * as CategoryController from "./controllers/CategoryController";
import * as BrandController from "./controllers/BrandController";
import * as OrderController from "./controllers/OrderController";
import * as OrderDetailController from "./controllers/OrderDetailController";
import asyncHandler from "./middlewares/asyncHandler";
import validate from "./middlewares/validate";
import InsertProductRequest from "./DTOs/requests/product/InsertProductRequest";
import UpdateProductRequest from "./DTOs/requests/product/updateProductRequest";

const router = express.Router();

export default function AppRoute(app) {
  // Product Routes
  router.get("/products", asyncHandler(ProductController.getProducts));
  router.get("/products/:id", asyncHandler(ProductController.getProductById));
  router.post(
    "/products",
    validate(InsertProductRequest),
    asyncHandler(ProductController.insertProduct)
  );
  router.delete("/products/:id", asyncHandler(ProductController.deleteProduct));
  router.put(
    "/products/:id",
    validate(UpdateProductRequest),
    asyncHandler(ProductController.updateProduct)
  );

  // Category Routes
  router.get("/categories", asyncHandler(CategoryController.getCategories));
  router.get(
    "/categories/:id",
    asyncHandler(CategoryController.getCategoryById)
  );
  router.post("/categories", asyncHandler(CategoryController.insertCategory));
  router.delete(
    "/categories/:id",
    asyncHandler(CategoryController.deleteCategory)
  );
  router.put(
    "/categories/:id",
    asyncHandler(CategoryController.updateCategory)
  );

  // Brand Routes
  router.get("/brands", asyncHandler(BrandController.getBrands));
  router.get("/brands/:id", asyncHandler(BrandController.getBrandById));
  router.post("/brands", asyncHandler(BrandController.insertBrand));
  router.delete("/brands/:id", asyncHandler(BrandController.deleteBrand));
  router.put("/brands/:id", asyncHandler(BrandController.updateBrand));

  // Order Routes
  router.get("/orders", asyncHandler(OrderController.getOrders));
  router.get("/orders/:id", asyncHandler(OrderController.getOrderById));
  router.post("/orders", asyncHandler(OrderController.insertOrder));
  router.delete("/orders/:id", asyncHandler(OrderController.deleteOrder));
  router.put("/orders/:id", asyncHandler(OrderController.updateOrder));

  // OrderDetail Routes
  router.get(
    "/order-details",
    asyncHandler(OrderDetailController.getOrderDetails)
  );
  router.get(
    "/order-details/:id",
    asyncHandler(OrderDetailController.getOrderDetailById)
  );
  router.post(
    "/order-details",
    asyncHandler(OrderDetailController.insertOrderDetail)
  );
  router.delete(
    "/order-details/:id",
    asyncHandler(OrderDetailController.deleteOrderDetail)
  );
  router.put(
    "/order-details/:id",
    asyncHandler(OrderDetailController.updateOrderDetail)
  );

  app.use("/api/", router);
}
