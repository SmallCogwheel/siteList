const projects = [
  {
    title: "포트폴리오 사이트",
    description: "자기소개와 프로젝트를 정리한 웹사이트",
    url: "https://example.com"
  },
  {
    title: "할 일 관리 앱",
    description: "할 일을 추가하고 체크할 수 있는 앱",
    url: "https://example2.com"
  },
  {
    title: "게임 커뮤니티",
    description: "게임 유저들이 소통할 수 있는 커뮤니티",
    url: "https://example3.com"
  },
  {
    title: "음악 플레이어",
    description: "브라우저에서 음악을 재생할 수 있는 사이트",
    url: "https://example4.com"
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
