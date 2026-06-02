async function loadNews() {
    const url = "https://erde2025.github.io/alltag24-api/news.json";

    const response = await fetch(url);
    const data = await response.json();

    const container = document.getElementById("news-container");
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "news-card";

        card.innerHTML = `
            <img src="${item.image}" class="news-image">
            <div class="news-content">
                <div class="news-title">${item.title}</div>
                <div class="news-date">${item.date}</div>
                <div class="news-text">${item.text}</div>
            </div>
        `;

        container.appendChild(card);
    });

    sendHeight();
}

function sendHeight() {
    const height = document.body.scrollHeight;
    parent.postMessage({ height: height }, "*");
}

window.onload = loadNews;
window.onresize = sendHeight;
