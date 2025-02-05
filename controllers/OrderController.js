import { Sequelize } from "sequelize";
import db from "../models";

export async function getOrders(req, res) {
  res.status(200).json({
    message: "lấy danh sách đơn hàng thành công!",
  });
}

export async function getOrderById(req, res) {
  res.status(200).json({
    message: "lấy thông tin đơn hàng",
  });
}

export async function insertOrder(req, res) {
  res.status(200).json({
    message: "thêm mới đơn hàng thành công!",
  });
}

export async function deleteOrder(req, res) {
  res.status(200).json({
    message: "xóa đơn hàng thành công!",
  });
}

export async function updateOrder(req, res) {
  res.status(200).json({
    message: "cập nhật đơn hàng thành công!",
  });
}
