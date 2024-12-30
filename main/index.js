const imgContainer = document.querySelector('.img-container');
const backgroundImage = document.querySelector('.background-image');
const foregroundImage = document.querySelector('.foreground-image');

// Biến trạng thái để theo dõi xem ảnh thứ hai có đang hiển thị không
let isForegroundVisible = false;

imgContainer.addEventListener('click', () => {
    if (isForegroundVisible) {
        // Ẩn ảnh thứ hai, trả lại vị trí ảnh thứ nhất
        backgroundImage.style.transform = 'translateX(0)';
        foregroundImage.style.transform = 'translate(-50%, -10%) scale(0)';
    } else {
        // Hiện ảnh thứ hai, đẩy ảnh thứ nhất sang trái
        backgroundImage.style.transform = 'translateX(-300px)';
        foregroundImage.style.transform = 'translate(-0%, -20%) scale(1)';
    }
    // Đổi trạng thái
    isForegroundVisible = !isForegroundVisible;
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
