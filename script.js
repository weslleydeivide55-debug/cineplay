
const series = [
  {
    title: "Dragon Ball Super: Beerus",
    description: "Goku e seus amigos enfrentam o poderoso Deus da Destruição Beerus.",
    image: "https://i.postimg.cc/SsBNmSR2/filters-quality(95)format(webp).jpg",
    seasons: [
      {
        name: "Temporada 1",
        episodes: [
          {
            title: "Episódio 1",
            video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          },
          {
            title: "Episódio 2",
            video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          }
        ]
      }
    ]
  }
];

const catalog = document.getElementById("catalog");
const details = document.getElementById("details");
const player = document.getElementById("player");

function showCatalog() {
  catalog.innerHTML = "";

  series.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="cover" style="background-image: url('${item.image}')"></div>
      <p>${item.title}</p>
    `;

    card.onclick = () => showDetails(index);
    catalog.appendChild(card);
  });
}

function showDetails(index) {
  const item = series[index];

  catalog.style.display = "none";
  document.querySelector(".banner").style.display = "none";
  document.querySelector(".section-title").style.display = "none";
  details.classList.remove("hidden");
  player.classList.add("hidden");

  document.getElementById("seriesTitle").textContent = item.title;
  document.getElementById("description").textContent = item.description;

  const seasons = document.getElementById("seasons");
  seasons.innerHTML = "";

  item.seasons.forEach((season, seasonIndex) => {
    const button = document.createElement("button");
    button.textContent = season.name;
    button.onclick = () => showEpisodes(index, seasonIndex);
    seasons.appendChild(button);
  });

  document.getElementById("episodes").innerHTML = "";
}

function showEpisodes(seriesIndex, seasonIndex) {
  const episodes = series[seriesIndex].seasons[seasonIndex].episodes;
  const area = document.getElementById("episodes");

  area.innerHTML = "";

  episodes.forEach((episode) => {
    const button = document.createElement("button");
    button.className = "episode";
    button.textContent = episode.title;
    button.onclick = () => playEpisode(episode);
    area.appendChild(button);
  });
}

function playEpisode(episode) {
  details.classList.add("hidden");
  player.classList.remove("hidden");

  document.getElementById("episodeTitle").textContent = episode.title;

  const video = document.getElementById("video");
  video.src = episode.video;
  video.load();
}

function goHome() {
  player.classList.add("hidden");
  details.classList.add("hidden");
  catalog.style.display = "grid";
  document.querySelector(".banner").style.display = "block";
  document.querySelector(".section-title").style.display = "block";
}

function goDetails() {
  player.classList.add("hidden");
  details.classList.remove("hidden");
}

showCatalog();

