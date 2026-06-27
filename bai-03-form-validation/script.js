// ===== BÀI 03: FORM VALIDATION =====

// Lấy form và các input
const form = document.querySelector("#registerForm");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const agreeCheckbox = document.querySelector("#agree");

// --- Hàm hỗ trợ: hiển thị lỗi ---
function showError(inputEl, errorId, message) {
  document.querySelector("#" + errorId).textContent = message;
  if (inputEl) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

// --- Hàm hỗ trợ: xóa lỗi ---
function clearError(inputEl, errorId) {
  document.querySelector("#" + errorId).textContent = "";
  if (inputEl) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}

// --- Xóa toàn bộ lỗi cũ trước khi validate ---
function clearAllErrors() {
  const errorIds = [
    "fullNameError", "emailError", "phoneError",
    "genderError", "passwordError", "confirmPasswordError", "agreeError"
  ];
  errorIds.forEach(function (id) {
    document.querySelector("#" + id).textContent = "";
  });

  const inputs = form.querySelectorAll("input[type='text'], input[type='password']");
  inputs.forEach(function (input) {
    input.classList.remove("invalid", "valid");
  });
}

// --- Xử lý submit form ---
form.addEventListener("submit", function (event) {
  // Ngăn form gửi đi thật (không reload trang)
  event.preventDefault();

  // Xóa lỗi cũ
  clearAllErrors();

  // Lấy giá trị, .trim() để xóa khoảng trắng thừa
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const isAgreed = agreeCheckbox.checked;

  let isValid = true;

  // Kiểm tra họ tên
  if (fullName === "") {
    showError(fullNameInput, "fullNameError", "⚠ Vui lòng nhập họ và tên.");
    isValid = false;
  } else {
    clearError(fullNameInput, "fullNameError");
  }

  // Kiểm tra email: phải có @ và dấu chấm
  if (email === "") {
    showError(emailInput, "emailError", "⚠ Vui lòng nhập email.");
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    showError(emailInput, "emailError", "⚠ Email không hợp lệ (phải có @ và dấu chấm).");
    isValid = false;
  } else {
    clearError(emailInput, "emailError");
  }

  // Kiểm tra số điện thoại: không được trống, phải là số
  if (phone === "") {
    showError(phoneInput, "phoneError", "⚠ Vui lòng nhập số điện thoại.");
    isValid = false;
  } else if (!/^[0-9]{9,11}$/.test(phone.replace(/\s/g, ""))) {
    showError(phoneInput, "phoneError", "⚠ Số điện thoại phải có 9–11 chữ số.");
    isValid = false;
  } else {
    clearError(phoneInput, "phoneError");
  }

  // Kiểm tra giới tính
  if (!gender) {
    document.querySelector("#genderError").textContent = "⚠ Vui lòng chọn giới tính.";
    isValid = false;
  }

  // Kiểm tra mật khẩu tối thiểu 6 ký tự
  if (password.length < 6) {
    showError(passwordInput, "passwordError", "⚠ Mật khẩu phải có ít nhất 6 ký tự.");
    isValid = false;
  } else {
    clearError(passwordInput, "passwordError");
  }

  // Kiểm tra nhập lại mật khẩu trùng khớp
  if (confirmPassword !== password) {
    showError(confirmPasswordInput, "confirmPasswordError", "⚠ Mật khẩu nhập lại không khớp.");
    isValid = false;
  } else if (confirmPassword !== "") {
    clearError(confirmPasswordInput, "confirmPasswordError");
  }

  // Kiểm tra checkbox đồng ý
  if (!isAgreed) {
    document.querySelector("#agreeError").textContent = "⚠ Bạn cần đồng ý với điều khoản.";
    isValid = false;
  }

  // Nếu tất cả hợp lệ: hiển thị thông báo thành công
  if (isValid) {
    form.style.display = "none";
    const successMsg = document.querySelector("#successMessage");
    successMsg.style.display = "block";
    document.querySelector("#successDetail").textContent =
      "Chào mừng " + fullName + "! Tài khoản " + email + " đã được tạo.";
  }
});

// --- Nút đăng ký tài khoản khác ---
document.querySelector("#resetBtn").addEventListener("click", function () {
  form.reset();
  clearAllErrors();
  form.style.display = "block";
  document.querySelector("#successMessage").style.display = "none";
});

// --- Nút hiện/ẩn mật khẩu ---
document.querySelector("#togglePassword").addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    this.textContent = "👁";
  }
});

document.querySelector("#toggleConfirm").addEventListener("click", function () {
  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    this.textContent = "🙈";
  } else {
    confirmPasswordInput.type = "password";
    this.textContent = "👁";
  }
});
