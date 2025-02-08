import db from "../models";
import { Op } from "sequelize";

export async function getProducts(req, res) {
  //const products = await db.product.findAll();  not good, must "paging"
  // search and paging
  // req.query.search, eg: ...?search=iphone 16&page=1
  // name, description, or description, or specification contains "search"
  const { search, page = 1, limit = 5 } = req.query;
  const offset = (page - 1) * limit;

  const whereClause = search?.trim()
    ? {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { description: { [Op.like]: `%${search}%` } },
          { specification: { [Op.like]: `%${search}%` } },
        ],
      }
    : {};

  // run parallel
  const [products, totalProducts] = await Promise.all([
    db.product.findAll({
      where: whereClause,
      limit: Number(limit),
      offset: Number(offset),
    }),

    db.product.count({ where: whereClause }),
  ]);

  return res.status(200).json({
    message: "Lấy danh sách sản phẩm thành công!",
    data: products,
    currentPage: Number(page),
    totalPages: Math.ceil(totalProducts / limit),
    totalProducts,
  });
}

export async function getProductById(req, res) {
  const { id } = req.params;
  const product = await db.product.findByPk(id);

  return !product
    ? res.status(404).json({
        message: "Sản phẩm không tìm thấy",
      })
    : res.status(200).json({
        message: "Lấy thông tin sản phẩm thành công",
        data: product,
      });
}

export async function insertProduct(req, res) {
  const product = await db.product.create(req.body);
  return res.status(201).json({
    message: "thêm mới sản phẩm thành công!",
    data: product,
  });
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  const deleted = await db.product.destroy({
    where: { id },
  });

  return deleted
    ? res.status(200).json({
        message: "xóa sản phẩm thành công!",
      })
    : res.status(404).json({
        message: "Không tìm thấy sản phẩm với ID này",
      });
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const updatedProduct = await db.product.update(req.body, {
    where: { id },
  });
  return updatedProduct[0] > 0
    ? res.status(200).json({
        message: "Cập nhật sản phẩm thành công!",
      })
    : res.status(404).json({
        message: "Sản phẩm không tìm thấy!",
      });
}

// fake data
[
  {
    name: "iPhone 13 Pro",
    image: "",
    price: 29990000,
    oldprice: 32990000,
    description:
      "iPhone 13 Pro với camera chất lượng cao và hiệu suất vượt trội, mang đến trải nghiệm người dùng tuyệt vời.",
    specification:
      "Màn hình Super Retina XDR 6.1 inch; Chipset A15 Bionic; RAM 6GB; Bộ nhớ trong 128GB; Camera sau: 12MP; Camera trước: 12MP; Pin 3095 mAh.",
    buyturn: 300,
    quantity: 50,
    brand_id: 4,
    category_id: 3,
  },
  {
    name: "Samsung Galaxy Z Fold 3",
    image: "",
    price: 49990000,
    oldprice: 52990000,
    description:
      "Galaxy Z Fold 3 là điện thoại gập đầu tiên hỗ trợ S Pen, với màn hình lớn và trải nghiệm đa nhiệm tuyệt vời.",
    specification:
      "Màn hình chính 7.6 inch AMOLED; Chipset Snapdragon 888; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 12MP. Pin 4400 mAh.",
    buyturn: 150,
    quantity: 30,
    brand_id: 1,
    category_id: 3,
  },
  {
    name: "Google Pixel 6",
    image: "",
    price: 19990000,
    oldprice: 22990000,
    description:
      "Google Pixel 6 mang đến trải nghiệm Android thuần khiết với camera xuất sắc và hiệu suất mượt mà.",
    specification:
      "Màn hình OLED 6.4 inch; Chipset Google Tensor; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 50MP. Pin 4614 mAh.",
    buyturn: 200,
    quantity: 40,
    brand_id: 8,
    category_id: 3,
  },
  {
    name: "OnePlus 9",
    image: "",
    price: 17990000,
    oldprice: 19990000,
    description:
      "OnePlus 9 với tốc độ sạc nhanh và camera Hasselblad chất lượng cao, là lựa chọn tuyệt vời cho người yêu công nghệ.",
    specification:
      "Màn hình Fluid AMOLED 6.55 inch; Chipset Snapdragon 888; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 48MP. Pin 4500 mAh.",
    buyturn: 250,
    quantity: 70,
    brand_id: 9,
    category_id: 3,
  },
  {
    name: "Xiaomi Mi 11",
    image: "",
    price: 15990000,
    oldprice: 17990000,
    description:
      "Xiaomi Mi 11 với hiệu suất mạnh mẽ và camera 108MP, mang đến trải nghiệm hình ảnh ấn tượng.",
    specification:
      "Màn hình AMOLED 6.81 inch; Chipset Snapdragon 888; RAM 8GB; Bộ nhớ trong 256GB; Camera sau: 108MP. Pin 4600 mAh.",
    buyturn: 400,
    quantity: 100,
    brand_id: 3,
    category_id: 3,
  },
  {
    name: "Sony Xperia 1 III",
    image: "",
    price: 32990000,
    oldprice: 34990000,
    description:
      "Sony Xperia 1 III với màn hình 4K và khả năng chụp ảnh chuyên nghiệp, là lựa chọn cho những người yêu thích nhiếp ảnh.",
    specification:
      "Màn hình OLED 6.5 inch 4K; Chipset Snapdragon 888; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 12MP. Pin 4500 mAh.",
    buyturn: 180,
    quantity: 20,
    brand_id: 6,
    category_id: 3,
  },
  {
    name: "Oppo Find X3 Pro",
    image: "",
    price: 29990000,
    oldprice: 31990000,
    description:
      "Oppo Find X3 Pro với thiết kế sang trọng và camera nổi bật, mang đến trải nghiệm cao cấp.",
    specification:
      "Màn hình AMOLED 6.7 inch; Chipset Snapdragon 888; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 50MP. Pin 4500 mAh.",
    buyturn: 220,
    quantity: 60,
    brand_id: 5,
    category_id: 3,
  },
  {
    name: "Vivo X60 Pro",
    image: "",
    price: 23990000,
    oldprice: 25990000,
    description:
      "Vivo X60 Pro với camera Zeiss và hiệu suất mạnh mẽ, là lựa chọn hàng đầu cho nhiếp ảnh di động.",
    specification:
      "Màn hình AMOLED 6.56 inch; Chipset Exynos 1080; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 48MP. Pin 4200 mAh.",
    buyturn: 210,
    quantity: 45,
    brand_id: 10,
    category_id: 3,
  },
  {
    name: "Realme GT",
    image: "",
    price: 16990000,
    oldprice: 18990000,
    description:
      "Realme GT với hiệu suất cao và thiết kế trẻ trung, là lựa chọn tuyệt vời cho giới trẻ.",
    specification:
      "Màn hình Super AMOLED 6.43 inch; Chipset Snapdragon 888; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4500 mAh.",
    buyturn: 260,
    quantity: 80,
    brand_id: 11,
    category_id: 3,
  },
  {
    name: "Huawei P40 Pro",
    image: "",
    price: 28990000,
    oldprice: 30990000,
    description:
      "Huawei P40 Pro với camera Leica và khả năng chụp ảnh xuất sắc, mang đến trải nghiệm nhiếp ảnh tuyệt vời.",
    specification:
      "Màn hình OLED 6.58 inch; Chipset Kirin 990; RAM 8GB; Bộ nhớ trong 256GB; Camera sau: 50MP. Pin 4200 mAh.",
    buyturn: 190,
    quantity: 35,
    brand_id: 12,
    category_id: 3,
  },
  {
    name: "Asus ROG Phone 5",
    image: "",
    price: 24990000,
    oldprice: 26990000,
    description:
      "Asus ROG Phone 5 với hiệu suất gaming mạnh mẽ và thiết kế độc đáo, là lựa chọn hàng đầu cho game thủ.",
    specification:
      "Màn hình AMOLED 6.78 inch; Chipset Snapdragon 888; RAM 16GB; Bộ nhớ trong 512GB; Camera sau: 64MP. Pin 6000 mAh.",
    buyturn: 230,
    quantity: 55,
    brand_id: 13,
    category_id: 3,
  },
  {
    name: "Nokia 8.3 5G",
    image: "",
    price: 17990000,
    oldprice: 19990000,
    description:
      "Nokia 8.3 5G với khả năng kết nối 5G và camera chất lượng, là lựa chọn cho những người yêu thích công nghệ mới.",
    specification:
      "Màn hình IPS LCD 6.81 inch; Chipset Snapdragon 765G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4500 mAh.",
    buyturn: 150,
    quantity: 40,
    brand_id: 7,
    category_id: 3,
  },
  {
    name: "Motorola Edge 20",
    image: "",
    price: 13990000,
    oldprice: 15990000,
    description:
      "Motorola Edge 20 với thiết kế mỏng nhẹ và camera 108MP, mang đến trải nghiệm chụp ảnh ấn tượng.",
    specification:
      "Màn hình OLED 6.7 inch; Chipset Snapdragon 778G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 108MP. Pin 4000 mAh.",
    buyturn: 180,
    quantity: 25,
    brand_id: 14,
    category_id: 3,
  },
  {
    name: "Honor 50",
    image: "",
    price: 15990000,
    oldprice: 17990000,
    description:
      "Honor 50 với camera selfie 32MP và hiệu suất tốt, là lựa chọn cho giới trẻ yêu thích chụp ảnh.",
    specification:
      "Màn hình OLED 6.57 inch; Chipset Snapdragon 778G; RAM 8GB; Bộ nhớ trong 256GB; Camera sau: 108MP. Pin 4300 mAh.",
    buyturn: 200,
    quantity: 50,
    brand_id: 15,
    category_id: 3,
  },
  {
    name: "ZTE Axon 20",
    image: "",
    price: 12990000,
    oldprice: 14990000,
    description:
      "ZTE Axon 20 với thiết kế màn hình vô cực và camera 32MP ẩn dưới màn hình.",
    specification:
      "Màn hình AMOLED 6.92 inch; Chipset Snapdragon 765G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4220 mAh.",
    buyturn: 170,
    quantity: 60,
    brand_id: 16,
    category_id: 3,
  },
  {
    name: "LG Wing",
    image: "",
    price: 29990000,
    oldprice: 31990000,
    description:
      "LG Wing với thiết kế độc đáo và màn hình xoay, là lựa chọn cho những người tìm kiếm sự mới mẻ.",
    specification:
      "Màn hình chính P-OLED 6.8 inch; Chipset Snapdragon 765G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4000 mAh.",
    buyturn: 160,
    quantity: 20,
    brand_id: 5,
    category_id: 3,
  },
  {
    name: "TCL 20 Pro 5G",
    image: "",
    price: 18990000,
    oldprice: 20990000,
    description:
      "TCL 20 Pro 5G với khả năng kết nối 5G và màn hình AMOLED sắc nét.",
    specification:
      "Màn hình AMOLED 6.67 inch; Chipset Snapdragon 750G; RAM 6GB; Bộ nhớ trong 256GB; Camera sau: 48MP. Pin 4500 mAh.",
    buyturn: 190,
    quantity: 50,
    brand_id: 17,
    category_id: 3,
  },
  {
    name: "Alcatel 3X",
    image: "",
    price: 6990000,
    oldprice: 9990000,
    description:
      "Alcatel 3X với thiết kế đẹp và hiệu suất đủ dùng cho nhu cầu cơ bản.",
    specification:
      "Màn hình IPS LCD 6.52 inch; Chipset MediaTek Helio P22; RAM 4GB; Bộ nhớ trong 128GB; Camera sau: 16MP. Pin 5000 mAh.",
    buyturn: 300,
    quantity: 100,
    brand_id: 18,
    category_id: 3,
  },
  {
    name: "Nokia G20",
    image: "",
    price: 8990000,
    oldprice: 10990000,
    description:
      "Nokia G20 với pin trâu và camera đa năng, là lựa chọn tốt cho người dùng bình dân.",
    specification:
      "Màn hình IPS LCD 6.52 inch; Chipset MediaTek Helio G35; RAM 4GB; Bộ nhớ trong 128GB; Camera sau: 48MP. Pin 5050 mAh.",
    buyturn: 400,
    quantity: 150,
    brand_id: 7,
    category_id: 3,
  },
];
