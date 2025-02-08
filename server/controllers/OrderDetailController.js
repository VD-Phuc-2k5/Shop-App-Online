import { Sequelize } from "sequelize";
import db from "../models";

export async function getOrderDetails(req, res) {
  const orderDetails = await db.orderDetail.findAll();
  return res.status(200).json({
    message: "Lấy danh sách chi tiết đơn hàng thành công!",
    data: orderDetails,
  });
}

export async function getOrderDetailById(req, res) {
  const { id } = req.params;
  const orderDetail = await db.orderDetail.findOne({ where: { id } });

  return orderDetail
    ? res.status(200).json({
        message: "Lấy thông tin chi tiết đơn hàng thành công!",
        data: orderDetail,
      })
    : res.status(404).json({
        message: "Không tìm thấy chi tiết đơn hàng với ID này",
      });
}

export async function insertOrderDetail(req, res) {
  const orderDetail = await db.orderDetail.create(req.body);
  return res.status(201).json({
    message: "Thêm mới chi tiết đơn hàng thành công!",
    data: orderDetail,
  });
}

export async function deleteOrderDetail(req, res) {
  const { id } = req.params;
  const deleted = await db.orderDetail.destroy({
    where: { id },
  });

  return deleted
    ? res.status(200).json({
        message: "Xóa chi tiết đơn hàng thành công!",
      })
    : res.status(404).json({
        message: "Không tìm thấy chi tiết đơn hàng với ID này",
      });
}

export async function updateOrderDetail(req, res) {
  const { id } = req.params;
  const updatedOrderDetail = await db.orderDetail.update(req.body, {
    where: { id },
  });

  return updatedOrderDetail[0] > 0
    ? res.status(200).json({
        message: "Cập nhật chi tiết đơn hàng thành công!",
      })
    : res.status(404).json({
        message: "Chi tiết đơn hàng không tìm thấy!",
      });
}
