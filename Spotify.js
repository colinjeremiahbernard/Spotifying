const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?namelike=${searchTerm}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((result) => displayResults(result))
    .catch((error) => console.error("Error fetching data:", error));
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden');
  resultsArtist.innerHTML = ''; // Clear any existing content
  if (result.length > 0) {
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");

    result.forEach(element => {
      const artistCard = document.createElement('div');
      artistCard.className = 'artist-card';

      const img = document.createElement('img');
      img.src = element.urlImg;
      img.alt = element.name;
      img.className = 'artist-img';
      img.onerror = function() {
        console.error("Image not found:", element.urlImg);
        img.src = 'fallback-image-url'; // Optional fallback image URL
      };
      artistCard.appendChild(img);

      const name = document.createElement('span');
      name.innerText = element.name;
      name.className = 'artist-name';
      artistCard.appendChild(name);

      resultsArtist.querySelector('.grid-container').appendChild(artistCard);
    });
    
    resultsArtist.classList.remove('hidden');

    // Display the first matching artist image and name in the input area
    artistName.innerText = result[0].name;
    artistImage.src = result[0].urlImg;
  }
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultPlaylist.classList.remove("hidden");
    resultsArtist.classList.add("hidden");
  } else {
    requestApi(searchTerm);
  }
});
