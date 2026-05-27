const projects = [
  {
    title: "사이트 리스트",
    description: "SmallCogwheel이 만든 사이트 정리, 바로 여기!",
    url: "https://smallcogwheel.github.io/siteList/"
  },
  {
    title: "가위 바위 보",
    description: "간단한 코드 덩어리와 하는 가위바위보 한판!",
    url: "https://smallcogwheel.github.io/Rock_Paper_Scissors/"
  },
  {
    title: "카페인 계산",
    description: "인류에게 필요한 카페인 난 얼마나 먹고있지?",
    url: "https://smallcogwheel.github.io/-_-/"
  },
  {
    title: "ROOT_ACCESS : 기계 도시",
    description: "약탈하고 파괴하고 정상에 올라 메인 기어를 멈춰라!",
    url: "https://smallcogwheel.github.io/text_game/"
  },
  {
    title: "Pandas 뉴스 요약",
    description: "Pandas를 시용해서 뉴스 기사를 요약 할수 있다고?",
    url: "https://pandas-nrp0.onrender.com/"
  }
];

const siteList = document.getElementById("siteList");

projects.forEach(project => {
  const item = document.createElement("div");
  item.className = "site-item";

  item.innerHTML = `
    <div class="site-info">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </div>

    <a href="${project.url}" target="_blank" class="site-link">
      링크
    </a>
  `;

  siteList.appendChild(item);
});
