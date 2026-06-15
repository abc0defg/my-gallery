// 1. HTML에 있는 빈 그리드 방(#gallery)을 컴퓨터에게 찾으라고 합니다.
const galleryContainer = document.getElementById('gallery');

// 2. 100개의 데이터를 하나씩 꺼내어 HTML 양식 틀에 갈아 끼우는 마법의 문법입니다.
galleryContainer.innerHTML = paintings.map(painting => `
    <div class="gallery-item">
        <img src="${painting.img}" alt="${painting.title}">
        <h3>${painting.title}</h3>
        <p>${painting.price}</p>
        <a href="${painting.link}" target="_blank">
            <button>문의하기</button>
        </a>
    </div>
`).join(''); // 하나로 합쳐서 HTML 방 안에 쏙 집어넣습니다.