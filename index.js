// 스크롤시 헤더 보임/숨기기
let headerEl = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    headerEl.classList.add('active');
  } else {
    headerEl.classList.remove('active');
  }
});


const clickedEl = document.querySelectorAll("#basic");
const originColor = [];

// 관심상품 컬러체인지
clickedEl.forEach((click, idx) => {
  originColor[idx] = click.style.color;
  click.addEventListener("click", () => {
    if (click.style.color === originColor[idx]) {
      alert('관심 상품이 추가 되었습니다.')
      click.style.color = `#ED6161`;
    } else {
      click.style.color = originColor[idx];
    }
  })
});


const tabMenu = document.querySelectorAll('.tapMenu li');
const tabContents = document.querySelectorAll('.tapContents > div');

// 쇼컨텐츠 함수
function showContent(num) {
  tabContents.forEach(function (item) {
    item.style.display = 'none';
  });
  tabContents[num].style.display = 'flex';
  tabContents[num].style.justifyContent = 'space-between';
};

showContent(0);

// 메뉴 클릭 이벤트
tabMenu.forEach(function (item, idx) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    showContent(idx);
  });
});

const scrollTop = document.querySelector("#btnTop");

// 상단으로 이동 
window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollTop.addEventListener('click', scrollToTop)

const panelQuetion = document.querySelectorAll('.panel_question');
console.log(panelQuetion);
// 아코디언
for (const pq of panelQuetion) {
  pq.addEventListener('click', function () {
    hideAll();
    this.classList.add('faq_active');
  })
}
function hideAll() {
  for (q of panelQuetion) {
    q.classList.remove('faq_active');
  }
}

// AOS 라이브러리 
AOS.init();


