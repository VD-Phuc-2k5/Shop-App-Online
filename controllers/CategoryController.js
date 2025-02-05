import db from "../models";
import { Op } from "sequelize";

export async function getCategories(req, res) {
  const { search, page = 1, limit = 5 } = req.query;
  const offset = (page - 1) * limit;

  const whereClause = search?.trim()
    ? {
        name: { [Op.like]: `%${search}%` },
      }
    : {};

  // Chạy song song
  const [categories, totalCategories] = await Promise.all([
    db.category.findAll({
      where: whereClause,
      limit: Number(limit),
      offset: Number(offset),
    }),

    db.category.count({ where: whereClause }),
  ]);

  return res.status(200).json({
    message: "Lấy danh sách danh mục thành công!",
    data: categories,
    currentPage: Number(page),
    totalPages: Math.ceil(totalCategories / limit),
    totalCategories,
  });
}

export async function getCategoryById(req, res) {
  const { id } = req.params;
  const category = await db.category.findByPk(id);
  return !category
    ? res.status(404).json({
        message: "Sản phẩm không tìm thấy",
      })
    : res.status(200).json({
        message: "Lấy thông tin sản phẩm thành công",
        data: category,
      });
}

export async function insertCategory(req, res) {
  const category = await db.category.create(req.body);
  return res.status(201).json({
    message: "Thêm mới danh mục thành công!",
    data: category,
  });
}

export async function deleteCategory(req, res) {
  res.status(200).json({
    message: "xóa danh mục thành công!",
  });
}

export async function updateCategory(req, res) {
  res.status(200).json({
    message: "cập nhật danh mục thành công!",
  });
}
