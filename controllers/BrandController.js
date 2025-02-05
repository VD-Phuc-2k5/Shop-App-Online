import db from "../models";
import { Op } from "sequelize";

export async function getBrands(req, res) {
  const { search, page = 1, limit = 5 } = req.query;
  const offset = (page - 1) * limit;

  const whereClause = search?.trim()
    ? {
        name: { [Op.like]: `%${search}%` },
      }
    : {};

  // Chạy song song
  const [brands, totalBrands] = await Promise.all([
    db.brand.findAll({
      where: whereClause,
      limit: Number(limit),
      offset: Number(offset),
    }),

    db.brand.count({ where: whereClause }),
  ]);

  return res.status(200).json({
    message: "Lấy danh sách thương hiệu thành công!",
    data: brands,
    currentPage: Number(page),
    totalPages: Math.ceil(totalBrands / limit),
    totalBrands,
  });
}

export async function getBrandById(req, res) {
  const { id } = req.params;
  const brand = await db.brand.findByPk(id);
  return !brand
    ? res.status(404).json({
        message: "Sản phẩm không tìm thấy",
      })
    : res.status(200).json({
        message: "Lấy thông tin sản phẩm thành công",
        data: brand,
      });
}

export async function insertBrand(req, res) {
  const brand = await db.brand.create(req.body);
  return res.status(201).json({
    message: "Thêm mới thương hiệu thành công!",
    data: brand,
  });
}

export async function deleteBrand(req, res) {
  res.status(200).json({
    message: "xóa thương hiệu thành công!",
  });
}

export async function updateBrand(req, res) {
  res.status(200).json({
    message: "cập nhật thương hiệu thành công!",
  });
}
