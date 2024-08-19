document.getElementById('nhanNgayBtn').addEventListener('click', function() {
    // Hiển thị spinner và ẩn button
    document.getElementById('loading').style.display = 'block';
    document.getElementById('nhanNgayBtn').style.display = 'none';

    // Độ trễ 1s để tạo hiệu ứng loading rồi chuyển hướng đến trang đích
    setTimeout(function() {
        window.open('https://hit88.trangchu.online', '_blank');
        // Ẩn spinner và hiện lại button khi hoàn thành
        document.getElementById('loading').style.display = 'none';
        document.getElementById('nhanNgayBtn').style.display = 'block';
    }, 1000);
});
