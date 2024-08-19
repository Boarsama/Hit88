document.getElementById('spinBtn').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    // Quay vòng quay
    wheel.classList.add('spinning');

    setTimeout(function() {
        // Hiển thị pop-up sau khi quay xong
        document.getElementById('rewardPopup').style.display = 'flex';
    }, 13000); // 3 giây cho vòng quay
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('rewardPopup').style.display = 'none';
});

document.getElementById('claimReward').addEventListener('click', function() {
    window.open('https://hit88.trangchu.online', '_blank');
});
