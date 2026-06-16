// 1. 다국어 사전 (맨 위에 한 번만 선언합니다)
const dictionary = {
    ko: {
        year: "제작년도",
        size: "작품크기",
        btn: "문의하기"
    },
    zh: {
        year: "创作年份",
        size: "作品尺寸",
        btn: "咨询购买"
    },
    en: {
        year: "Created Year",
        size: "Size",
        btn: "Inquire Now"
    }
};

// 2. 현재 언어 설정 변수 (여기에 딱 한 번만 let으로 만듭니다!)
let currentLang = 'ko'; 

const galleryContainer = document.getElementById('gallery');
const langButtons = document.querySelectorAll('.lang-btn');

// 3. 갤러리 화면을 그리는 함수
function renderGallery() {
    galleryContainer.innerHTML = paintings.map(painting => {
        const pureName = painting.fileName.split('.')[0];
        const year = pureName.substring(0, 4);
        const widthCm = pureName.substring(8, 11);
        const heightCm = pureName.substring(11, 14);
        
        const displayWidth = Number(widthCm) * 1.5;
        const displayHeight = Number(heightCm) * 1.5;

        let selectedTitle = painting.titleKo;
        if (currentLang === 'zh') selectedTitle = painting.titleZh;
        if (currentLang === 'en') selectedTitle = painting.titleEn;

        const langText = dictionary[currentLang];

        return `
            <div class="gallery-item">
                <div class="frame-3d">
                    <img src="./${painting.fileName}" alt="${selectedTitle}" style="width: ${displayWidth}px; height: ${displayHeight}px;">
                </div>
                <div class="painting-info">
                    <h3>${selectedTitle}</h3>
                    <p>${langText.year}: ${year}년</p>
                    <p>${langText.size}: ${widthCm} x ${heightCm} cm</p>
                </div>
                <a href="내링크" target="_blank">
                    <button>${langText.btn}</button>
                </a>
            </div>
        `;
    }).join('');
}

// 4. 언어 버튼 클릭 이벤트 설정
langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        langButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        currentLang = e.target.getAttribute('data-lang');
        renderGallery(); 
    });
});

// 5. 첫 화면 실행
renderGallery();