// ===== BÀI 05: MINI WEBSITE - PORTFOLIO =====

// ===== 1. DỮ LIỆU DỰ ÁN =====
const projects = [
  {
    name: "Profile Card",
    category: "web",
    desc: "Thẻ giới thiệu cá nhân với chế độ sáng/tối bằng HTML, CSS, JS.",
    icon: "👤"
  },
  {
    name: "Landing Page Quán Cà Phê",
    category: "design",
    desc: "Trang giới thiệu quán cà phê dùng Bootstrap 5, có carousel và animation.",
    icon: "☕"
  },
  {
    name: "Form Đăng Ký Validation",
    category: "web",
    desc: "Form đăng ký có kiểm tra dữ liệu đầu vào bằng JavaScript thuần.",
    icon: "📝"
  },
  {
    name: "Danh Sách Khóa Học",
    category: "web",
    desc: "Danh sách có tìm kiếm, lọc theo danh mục và sắp xếp theo giá.",
    icon: "📚"
  },
  {
    name: "App Quản Lý Todo",
    category: "app",
    desc: "Ứng dụng ghi chú đơn giản với chức năng thêm, xóa, đánh dấu hoàn thành.",
    icon: "✅"
  },
  {
    name: "Portfolio Website",
    category: "design",
    desc: "Website portfolio cá nhân tổng hợp, responsive, hỗ trợ dark mode.",
    icon: "🌐"
  }
];

// ===== 2. RENDER DỰ ÁN =====
function renderProjects(data) {
  const grid = document.querySelector("#projectGrid");
  grid.innerHTML = "";

  if (data.length === 0) {
    grid.innerHTML = '<p class="text-center text-muted py-4">Không có dự án nào.</p>';
    return;
  }

  data.forEach(function (project) {
    grid.innerHTML += `
      <div class="col-md-4 col-sm-6">
        <div class="project-card">
          <div class="project-thumb">${project.icon}</div>
          <div class="project-body">
            <span class="project-tag">${project.category}</span>
            <h4 class="project-name">${project.name}</h4>
            <p class="project-desc">${project.desc}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Hiển thị tất cả dự án lúc đầu
renderProjects(projects);

// ===== 3. LỌC DỰ ÁN THEO DANH MỤC =====
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Xóa class active khỏi tất cả nút, thêm vào nút đang bấm
    filterBtns.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    if (filter === "all") {
      renderProjects(projects);
    } else {
      const filtered = projects.filter(function (p) { return p.category === filter; });
      renderProjects(filtered);
    }
  });
});

// ===== 4. DARK MODE TOGGLE =====
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ===== 5. SMOOTH SCROLL KHI BẤM MENU =====
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ===== 6. BACK TO TOP BUTTON =====
const backToTopBtn = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== 7. FORM LIÊN HỆ =====
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#contactName").value.trim();
  const email = document.querySelector("#contactEmail").value.trim();
  const message = document.querySelector("#contactMessage").value.trim();

  // Xóa lỗi cũ
  document.querySelector("#contactNameError").textContent = "";
  document.querySelector("#contactEmailError").textContent = "";
  document.querySelector("#contactMessageError").textContent = "";

  let isValid = true;

  if (name === "") {
    document.querySelector("#contactNameError").textContent = "Vui lòng nhập họ tên.";
    isValid = false;
  }

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    document.querySelector("#contactEmailError").textContent = "Email không hợp lệ.";
    isValid = false;
  }

  if (message === "") {
    document.querySelector("#contactMessageError").textContent = "Vui lòng nhập nội dung.";
    isValid = false;
  }

  if (isValid) {
    contactForm.style.display = "none";
    document.querySelector("#contactSuccess").style.display = "block";
  }
});

// ===== 8. NAVBAR ĐỔI MÀU KHI CUỘN =====
const mainNav = document.querySelector("#mainNav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    mainNav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  } else {
    mainNav.style.boxShadow = "none";
  }
});
