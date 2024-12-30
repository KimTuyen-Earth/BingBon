function showInfo(infoId) {
    // Ẩn tất cả các info-box
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => box.classList.remove('active'));

    // Hiển thị info-box được chọn
    const selectedBox = document.getElementById(infoId);
    if (selectedBox) {
        selectedBox.classList.add('active');
    }
}