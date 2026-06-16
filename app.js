const galleryContainer = document.getElementById('gallery');

// 이제 fileNames가 아니라 paintings 배열 데이터를 바탕으로 화면을 그립니다.
galleryContainer.innerHTML = paintings.map(painting => {
    
    // 1. 확장자를 떼고 가로세로 cm 치수를 분석하는 기계는 그대로 유지합니다.
    const pureName = painting.fileName.split('.')[0];
    const year = pureName.substring(0, 4);
    const widthCm = pureName.substring(8, 11);
    const heightCm = pureName.substring(11, 14);
    
    // 실제 치수 비례 크기 계산 (cm * 1.5)
    const displayWidth = Number(widthCm) * 1.5;
    const displayHeight = Number(heightCm) * 1.5;

    // 2. 붕어빵 틀에 넣을 때, painting 내부의 다국어 이름들을 쏙쏙 갈아 끼워 줍니다!
    return `
        <div class="gallery-item">
            <img src="./${painting.fileName}" alt="${painting.titleKo}" style="width: ${displayWidth}px; height: ${displayHeight}px;">
            
            <div class="painting-info">
                <h3 class="title-ko">🇰🇷 ${painting.titleKo}</h3>
                <p class="title-zh">🇨🇳 ${painting.titleZh}</p>
                <p class="title-en">🇺🇸 <i>${painting.titleEn}</i></p>
                <hr>
                <p>제작년도: ${year}년</p>
                <p>작품크기: ${widthCm} x ${heightCm} cm</p>
            </div>
            
            <a href="내링크" target="_blank">
                <button>문의하기</button>
            </a>
        </div>
    `;
}).join('');