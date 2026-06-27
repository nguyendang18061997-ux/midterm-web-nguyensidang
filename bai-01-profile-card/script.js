// ===== BÀI 01: PROFILE CARD =====

// Lấy nút đổi theme từ HTML
const themeBtn = document.querySelector("#themeBtn");

// Hàm đổi chế độ sáng/tối
function changeTheme() {
  // toggle: nếu chưa có class "dark-mode" thì thêm vào, nếu có rồi thì xóa đi
  document.body.classList.toggle("dark-mode");

  // Đổi text của nút tùy theo trạng thái hiện tại
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️ Chế độ sáng";
  } else {
    themeBtn.textContent = "🌙 Chế độ tối";
  }
}

// Gắn sự kiện click vào nút
themeBtn.addEventListener("click", changeTheme);
