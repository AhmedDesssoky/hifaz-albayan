const currentPage = window.location.pathname;

// تحديد الصفحات التي تحتاج إلى تسجيل دخول
const protectedPages = ["/paid", "/affairs", "/Episodes"]; // قم بتعديل هذا حسب حاجتك

// إذا كانت الصفحة من الصفحات المحمية وكان المستخدم لم يسجل دخوله
if (
  protectedPages.includes(currentPage) &&
  localStorage.getItem("isLoggedIn") !== "true"
) {
  // إعادة التوجيه إلى صفحة تسجيل الدخول
  window.location.href = "login.html";
}

// إنشاء حساب
function saveUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  if (!name || !email || !phone || !password) {
    alert("يرجى ملء جميع الحقول.");
    return; // إيقاف تنفيذ الكود إذا كانت هناك حقول فارغة
  }

  const user = {
    name: name,
    email: email,
    phone: phone,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("تم إنشاء الحساب بنجاح!");
  window.location.href = "account.html";
}

// تسجيل الدخول
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    localStorage.setItem("isLoggedIn", "true");
    document.getElementById("loginBtn").textContent = "تسجيل خروج";
    window.location.href = "account.html";
  } else {
    alert("البريد الإلكتروني أو كلمة السر غير صحيحة.");
  }
}

// عرض صفحة الحساب
window.onload = function () {
  if (window.location.pathname.includes("account.html")) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      document.getElementById("loginBtn").textContent = "تسجيل خروج";
      document.getElementById(
        "welcome-message"
      ).textContent = `مرحبًا ${storedUser.name}`;
    } else {
      window.location.href = "login.html";
    }
  }
};

// تسجيل الخروج
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
