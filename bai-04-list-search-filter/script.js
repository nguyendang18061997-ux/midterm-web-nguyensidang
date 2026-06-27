// ===== BÀI 04: DANH SÁCH TÌM KIẾM VÀ LỌC =====

// --- Dữ liệu các khóa học (mảng tĩnh) ---
const items = [
  {
    name: "HTML & CSS Cơ Bản",
    category: "web",
    desc: "Học xây dựng trang web từ đầu với HTML5 và CSS3. Phù hợp cho người mới bắt đầu.",
    price: 199000,
    icon: "🌐"
  },
  {
    name: "JavaScript Nâng Cao",
    category: "web",
    desc: "Làm chủ JavaScript với ES6+, async/await, DOM manipulation và các design pattern.",
    price: 399000,
    icon: "⚡"
  },
  {
    name: "React JS Từ Cơ Bản Đến Nâng Cao",
    category: "web",
    desc: "Xây dựng ứng dụng web hiện đại với React, hooks, context và Redux.",
    price: 599000,
    icon: "⚛️"
  },
  {
    name: "Flutter & Dart Mobile",
    category: "mobile",
    desc: "Phát triển app iOS và Android với Flutter. Từ setup đến publish lên store.",
    price: 699000,
    icon: "📱"
  },
  {
    name: "React Native",
    category: "mobile",
    desc: "Xây dựng app mobile cross-platform dùng JavaScript và React Native.",
    price: 549000,
    icon: "📲"
  },
  {
    name: "Python & Data Science",
    category: "data",
    desc: "Phân tích dữ liệu với Python, Pandas, NumPy và trực quan hóa với Matplotlib.",
    price: 499000,
    icon: "📊"
  },
  {
    name: "Machine Learning Cơ Bản",
    category: "data",
    desc: "Hiểu và áp dụng các thuật toán ML cơ bản: regression, classification, clustering.",
    price: 799000,
    icon: "🤖"
  },
  {
    name: "UI/UX Design với Figma",
    category: "design",
    desc: "Thiết kế giao diện chuyên nghiệp với Figma. Học wireframe, prototype và design system.",
    price: 349000,
    icon: "🎨"
  },
  {
    name: "Adobe Photoshop Cơ Bản",
    category: "design",
    desc: "Chỉnh sửa ảnh, thiết kế đồ họa và tạo banner với Photoshop.",
    price: 299000,
    icon: "🖼️"
  }
];

// --- Lấy các phần tử HTML ---
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const itemList = document.querySelector("#itemList");
const resultCount = document.querySelector("#resultCount");

// --- Hàm định dạng giá tiền ---
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " đ";
}

// --- Hàm render danh sách ra HTML ---
function renderItems(data) {
  itemList.innerHTML = "";

  // Cập nhật số kết quả
  resultCount.textContent = "Tìm thấy " + data.length + " khóa học";

  // Nếu không có kết quả
  if (data.length === 0) {
    itemList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>Không tìm thấy khóa học phù hợp. Thử từ khóa khác nhé!</p>
      </div>
    `;
    return;
  }

  // Render từng item
  data.forEach(function (item) {
    itemList.innerHTML += `
      <div class="item-card">
        <div class="card-image">${item.icon}</div>
        <div class="card-body">
          <p class="card-category">${item.category}</p>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <span class="card-price">${formatPrice(item.price)}</span>
            <button class="card-btn" onclick="alert('Đã thêm: ${item.name}')">
              + Đăng ký
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// --- Hàm lọc và sắp xếp ---
function filterItems() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  // Bước 1: Lọc theo từ khóa và danh mục
  let result = items.filter(function (item) {
    const matchName = item.name.toLowerCase().includes(keyword);
    const matchCategory = category === "all" || item.category === category;
    return matchName && matchCategory;
  });

  // Bước 2: Sắp xếp theo giá
  if (sort === "price-asc") {
    result.sort(function (a, b) { return a.price - b.price; });
  } else if (sort === "price-desc") {
    result.sort(function (a, b) { return b.price - a.price; });
  }

  renderItems(result);
}

// --- Gắn sự kiện ---
// "input" kích hoạt mỗi khi người dùng gõ phím
searchInput.addEventListener("input", filterItems);
// "change" kích hoạt khi chọn khác trong dropdown
categoryFilter.addEventListener("change", filterItems);
sortFilter.addEventListener("change", filterItems);

// --- Hiển thị danh sách lần đầu khi tải trang ---
renderItems(items);
