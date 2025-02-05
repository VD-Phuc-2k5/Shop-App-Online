import { Sequelize } from "sequelize";
import db from "../models";

export async function getOrderDetails(req, res) {
  res.status(200).json({
    message: "lấy danh sách chi tiết đơn hàng thành công!",
  });
}

export async function getOrderDetailById(req, res) {
  res.status(200).json({
    message: "lấy thông tin chi tiết đơn hàng",
  });
}

export async function insertOrderDetail(req, res) {
  res.status(200).json({
    message: "thêm mới chi tiết đơn hàng thành công!",
  });
}

export async function deleteOrderDetail(req, res) {
  res.status(200).json({
    message: "xóa chi tiết đơn hàng thành công!",
  });
}

export async function updateOrderDetail(req, res) {
  res.status(200).json({
    message: "cập nhật chi tiết đơn hàng thành công!",
  });
}
