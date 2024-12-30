
 // Khi trang được tải, lấy tên người dùng từ localStorage
 window.onload = function() {
    var username = localStorage.getItem("username");

    // Nếu có tên người dùng trong localStorage, hiển thị tên đó
    if (username) {
      document.getElementById("user-name").textContent = username;
    } else {
      // Nếu không có tên người dùng (ví dụ: người dùng chưa đăng nhập), chuyển hướng về trang đăng nhập
      window.location.href = "login.html";
    }
  };

  // Thêm sự kiện cho "Đăng Xuất" để xóa tên người dùng khỏi localStorage khi người dùng đăng xuất
  document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("username"); // Xóa tên người dùng khỏi localStorage
    window.location.href = "login.html"; // Quay lại trang đăng nhập
  });
  function toggleTabSummary() {
    const tabSummary = document.getElementById('tab-summary');
    const isVisible = tabSummary.style.display === 'block';

    if (isVisible) {
        tabSummary.style.display = 'none'; // Ẩn danh sách nếu đang hiển thị
    } else {
        // Hiển thị danh sách các tab
        const tabs = document.querySelectorAll('.tab');
        const tabList = document.getElementById('tab-list');
        tabList.innerHTML = ''; // Xóa danh sách cũ nếu có
        tabs.forEach((tab, index) => {
            const li = document.createElement('li');
            li.textContent = `Tab ${index + 1}: ${tab.id}`;
            tabList.appendChild(li);
        });

        tabSummary.style.display = 'block'; // Hiển thị danh sách
    }
}
 // Lấy ảnh mèo ngẫu nhiên mỗi lần tải trang
 window.onload = function() {
    const profileImage = document.getElementById("profileImage");
    profileImage.src = `https://cataas.com/cat?random=${Math.random()}`;
};