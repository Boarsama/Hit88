document.getElementById("nhanNgayBtn").addEventListener("click", function() {
    // Hiển thị hiệu ứng loading
    document.getElementById("loading").style.display = "block";
    
    // Đợi 1 giây rồi mở trang đích
    setTimeout(function() {
        window.open("https://hit88.trangchu.online", "_blank");
        // Ẩn loading sau khi mở trang đích
        document.getElementById("loading").style.display = "none";
    }, 1000);
});
