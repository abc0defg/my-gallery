const galleryContainer = document.getElementById('gallery');

// 파일 이름 배열을 돌면서 자동으로 정보를 추출하고 화면에 그립니다.
galleryContainer.innerHTML = fileNames.map(fileName => {
    
    // 1. 확장자(.jpg)를 떼어내고 순수 이름만 남깁니다 -> "20250000150150hehuanhua"
    const pureName = fileName.split('.')[0];
    
    // 2. 글자 수 위치를 정교하게 잘라내서 정보를 추출합니다 (substring 문법 사용)
    const year = pureName.substring(0, 4);       // 0번째부터 4글자 -> "2025"
    const widthCm = pureName.substring(8, 11);   // 8번째부터 3글자 -> "150"
    const heightCm = pureName.substring(11, 14); // 11번째부터 3글자 -> "150"
    const title = pureName.substring(14);        // 14번째부터 끝까지 -> "hehuanhua"
    
    // 3. 실제 치수(cm)에 비례해서 화면에 보여줄 픽셀(px) 크기를 계산합니다.
    // 너무 크면 안 되니까 실제 센티미터 수치에 1.5를 곱해서 적당한 화면 크기(px)로 바꿉니다.
    const displayWidth = Number(widthCm) * 1.5;
    const displayHeight = Number(heightCm) * 1.5;

    // 4. 추출한 정보들을 붕어빵 철판 틀에 쏙쏙 집어넣어 리턴합니다.
    return `
        <div class="gallery-item">
            <img src="./${fileName}" alt="${title}" style="width: ${displayWidth}px; height: ${displayHeight}px;">
            <h3>작품명: ${title}</h3>
            <p>제작년도: ${year}년</p>
            <p>실제작품 치수: ${widthCm} x ${heightCm} cm</p>
            <a href="내링크" target="_blank">
                <button>문의하기</button>
            </a>
        </div>
    `;
}).join('');