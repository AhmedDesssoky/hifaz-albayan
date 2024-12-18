(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "HckOvp5ZbSzdbTEd1",
  });
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    const formData = new FormData(this); // الحصول على البيانات من النموذج

    // إعداد البيانات لإرسالها في القالب
    const templateParams = {
      user_name: formData.get("user_name"), // من بيانات النموذج
      user_email: formData.get("user_email"), // من بيانات النموذج
      message: formData.get("message"), // من بيانات النموذج
      to_email: "info@hofathalbayan.com", // البريد الإلكتروني الذي تريد إرسال الرسالة إليه
    };

    // إرسال البريد الإلكتروني باستخدام EmailJS
    emailjs.send("service_25wfuns", "template_0fc0i6q", templateParams).then(
      function (response) {
        alert("تم إرسال رسالتك بنجاح!");
        window.location.href = "contact.html";
      },
      function (error) {
        console.log("فشل الإرسال", error);
        alert("حدث خطأ، يرجى المحاولة لاحقًا.");
      }
    );
  });

// window.onload = function () {
//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       // these IDs from the previous steps
//       emailjs.sendForm("service_25wfuns", "template_0fc0i6q", this).then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error);
//         }
//       );
//     });
// };
