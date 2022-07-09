const apiKey = "MfySiTmCdZxmAt1nshDdsSOrSP4YcN8btULK79BI";
const title = document.querySelector("#title");
const image = document.querySelector(".image");

function callMe() {
  sendApiRequest();
}

async function sendApiRequest() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  const data = await response.json();
  apiData(data);
}

function apiData(info) {
  title.innerHTML = info.title;
  image.src = info.hdurl;

  const p = document.createElement("p");
  content.append(p);
  p.textContent = info.explanation;
  date.textContent = `${info.date} photo by ${info.copyright}`;
}
