document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spinButton');
    const spinPopup = document.getElementById('spinPopup');
    const closePopup = document.getElementById('closePopup');
    const claimButton = document.getElementById('claimButton');

    spinButton.addEventListener('click', function() {
        spinPopup.style.display = 'flex';
        setTimeout(function() {
            document.getElementById('resultMessage').textContent = 'Chúc mừng bạn nhận được mã random 500k';
        }, 3000); // Delay to show the popup
    });

    closePopup.addEventListener('click', function() {
        spinPopup.style.display = 'none';
    });

    claimButton.addEventListener('click', function() {
        setTimeout(function() {
            window.open('https://hit88.trangchu.online', '_blank');
        }, 1000); // 1s delay before redirect
    });
});
