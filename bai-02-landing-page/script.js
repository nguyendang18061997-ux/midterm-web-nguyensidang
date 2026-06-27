// ===== BÀI 02: LANDING PAGE =====

// --- Nút "Xem thực đơn" cuộn xuống section menu ---
const ctaBtn = document.querySelector("#ctaBtn");
ctaBtn.addEventListener("click", function () {
  document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

// --- Nút "Đặt bàn ngay" hiện thông báo ---
const orderBtn = document.querySelector("#orderBtn");
orderBtn.addEventListener("click", function () {
  alert("🎉 Đặt bàn thành công!\nChúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.\nCảm ơn bạn đã chọn Cà Phê Mộc!");
});

// --- Navbar đổi màu khi cuộn ---
const mainNav = document.querySelector("#mainNav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    mainNav.classList.add("scrolled");
  } else {
    mainNav.classList.remove("scrolled");
  }
});

// --- Smooth scroll khi bấm link trong menu ---
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    // Chỉ xử lý link nội bộ (bắt đầu bằng #)
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
