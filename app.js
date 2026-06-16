const galleryContainer = document.getElementById('gallery');
const langButtons = document.querySelectorAll('.lang-btn');

// 1. 기본 언어를 한국어('ko')로 설정해 둡니다.
let currentLang = 'ko';

// 2. 화면을 그리는 기능을 하나의 독립된 함수(명령어 상자)로 만듭니다.
function renderGallery() {
    galleryContainer.innerHTML = paintings.map(painting => {
        const pureName = painting.fileName.split('.')[0];
        const year = pureName.substring(0, 4);
        const widthCm = pureName.substring(8, 11);
        const heightCm = pureName.substring(11, 14);
        
        const displayWidth = Number(widthCm) * 1.5;
        const displayHeight = Number(heightCm) * 1.5;

        // [핵심] 현재 선택된 언어(currentLang)에 따라 보여줄 제목을 다르게 결정합니다.
        let selectedTitle = painting.titleKo;
        if (currentLang === 'zh') selectedTitle = painting.titleZh;
        if (currentLang === 'en') selectedTitle = painting.titleEn;

        return `
            <div class="gallery-item">
                <div class="frame-3d"> <img src="./${painting.fileName}" alt="${selectedTitle}" style="width: ${displayWidth}px; height: ${displayHeight}px;">
                </div>
                <div class="painting-info">
                    <h3>${selectedTitle}</h3>
                    <p>제작년도: ${year}년 / 크기: ${widthCm} x ${heightCm} cm</p>
                </div>
                <a href="내링크" target="_blank"><button>문의하기</button></a>
            </div>
        `;
    }).join('');
}

// 3. 언어 버튼들을 클릭했을 때 일어날 일을 설정합니다.
langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // 기존 활성화된 버튼 표시를 지우고 클릭한 버튼에 불을 켭니다.
        langButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // 버튼에 심어둔 언어 정보(ko, zh, en)를 읽어와서 현재 언어를 바꾸고 화면을 다시 그립니다!
        currentLang = e.target.getAttribute('data-lang');
        renderGallery(); 
    });
});

// 4. 맨 처음 사이트가 켜졌을 때 첫 화면을 그립니다.
renderGallery();