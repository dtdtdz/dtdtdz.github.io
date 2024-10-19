// 모든 링크에 클릭 이벤트 추가
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // 기본 동작 방지 (페이지 이동 대신 스크롤)
        
        // 링크된 섹션으로 스크롤
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  // 부드러운 스크롤 효과
        });
    });
});
