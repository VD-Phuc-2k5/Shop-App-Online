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
  const order = await db.order.create(req.body);
  return res.status(201).json({
    message: "Thêm mới đơn hàng thành công!",
    data: order,
  });
}

export async function deleteOrder(req, res) {
  const { id } = req.params;
  const deleted = await db.order.destroy({
    where: { id },
  });

  return deleted
    ? res.status(200).json({
        message: "Xóa đơn hàng thành công!",
      })
    : res.status(404).json({
        message: "Không tìm thấy đơn hàng với ID này",
      });
}

export async function updateOrder(req, res) {
  const { id } = req.params;
  const updatedOrder = await db.order.update(req.body, {
    where: { id },
  });

  return updatedOrder[0] > 0
    ? res.status(200).json({
        message: "Cập nhật đơn hàng thành công!",
      })
    : res.status(404).json({
        message: "Đơn hàng không tìm thấy!",
      });
}
