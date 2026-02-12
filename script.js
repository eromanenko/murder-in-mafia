const rounds = [
  {
    title: "Вступ",
    subtitle: "Історія починається",
    audio: "audio/00.mp3",
    img: "images/00.jpg",
  },
  {
    title: "Міккі",
    subtitle: "Громила",
    audio: "audio/01.mp3",
    img: "images/01.jpg",
  },
  {
    title: "Луїджі",
    subtitle: "Бос",
    audio: "audio/02.mp3",
    img: "images/02.jpg",
  },
  {
    title: "О’Салліван",
    subtitle: "Закон",
    audio: "audio/03.mp3",
    img: "images/03.jpg",
  },
  {
    title: "Вінні",
    subtitle: "Лезо",
    audio: "audio/04.mp3",
    img: "images/04.jpg",
  },
  {
    title: "Роза",
    subtitle: "Фатальна жінка",
    audio: "audio/05.mp3",
    img: "images/05.jpg",
  },
  {
    title: "Вбивця",
    subtitle: "Розв'язка",
    audio: "audio/06.mp3",
    img: "images/06.jpg",
  },
];

let currentIndex = 0;

const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const cardEl = document.getElementById("game-card");
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");

function loadRound(index) {
  const round = rounds[index];
  titleEl.innerText = round.title;
  subtitleEl.innerText = round.subtitle;
  cardEl.style.backgroundImage = `url('${round.img}')`;

  audioPlayer.pause();
  audioSource.src = round.audio;
  audioPlayer.load();
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadRound(currentIndex);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentIndex < rounds.length - 1) {
    currentIndex++;
    loadRound(currentIndex);
  }
});

document.getElementById("share-btn").addEventListener("click", async () => {
  const shareData = {
    title: "Murder in the Mafia Hints",
    text: "Потрібна допомога у розслідуванні?",
    url: "https://legacy.thinkfun.com/escapetheroom/mafia/hints/",
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Фолбек, якщо Web Share API не підтримується
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareData.text + " " + shareData.url)}`,
        "_blank",
      );
    }
  } catch (err) {
    console.error("Помилка шарингу:", err);
  }
});

loadRound(currentIndex);
