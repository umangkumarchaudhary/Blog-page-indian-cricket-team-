
function startImageSlider() {
    const imageSources = ["https://wallpaperaccess.com/full/1950262.jpg",'https://wallpaperaccess.com/full/1316013.jpg', 'https://wallpaperaccess.com/full/1950235.jpg','https://wallpaperaccess.com/full/1950238.jpg'];
    let currentIndex = 0;

    function updateImage() {
        document.getElementById('sliderImage').src = imageSources[currentIndex];
        currentIndex = (currentIndex + 1) % imageSources.length;
    }

    
    setInterval(updateImage, 1000);
}

window.onload = startImageSlider;


const url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '74e9ef10f8msh06b91f44fd407d2p132fe4jsn2c64aff4648d',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
};

async function fetchLiveMatchData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse the response as JSON
        
        // Assuming 'data' contains the live match score information
        const liveScoreContainer = document.getElementById('live-score-container');
        
        // Update the content of the container with the live score information
        liveScoreContainer.innerHTML = `
            <h2>Live Match Score</h2>
            <p>Team A vs. Team B</p>
            <p>Score: ${data.score}</p>
            <p>Status: ${data.status}</p>
        `;
    } catch (error) {
        console.error(error);
    }
}

// Call the function to fetch and display live match data
fetchLiveMatchData();

document.getElementById('read-more').addEventListener('click', function () {
    // Toggle the visibility of hidden player profiles
    var hiddenPlayers = document.querySelector('.hidden-players');
    if (hiddenPlayers.style.display === 'none' || hiddenPlayers.style.display === '') {
        hiddenPlayers.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        hiddenPlayers.style.display = 'none';
        this.textContent = 'Read More';
    }
});



