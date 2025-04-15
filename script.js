function openApp(app) {
  switch(app) {
    case 'facebook':
      window.location.href = "https://www.facebook.com/share/1BcK3TmiAZ/";
      break;
    case 'zalo':
      window.location.href = "https://zalo.me/0358757207";
      break;
    case 'instagram':
      window.location.href = "https://www.instagram.com/nguyenkhanhduy3003?igsh=Zmpyd3ZmeWQxN21j";
      break;
    case 'tiktok':
      window.location.href = "https://www.tiktok.com/@nguyen.duy029?_t=ZS-8vXkAC6O4Do&_r=1";
      break;
  }
}

// Hiển thị popup "Xin chào" khi truy cập
window.onload = function () {
  const modal = document.getElementById("greeting-modal");
  if (modal) {
    modal.style.display = "block";
  }
};

// Đóng popup khi nhấn nút
function closeModal() {
  const modal = document.getElementById("greeting-modal");
  if (modal) {
    modal.style.display = "none";
  }
}
