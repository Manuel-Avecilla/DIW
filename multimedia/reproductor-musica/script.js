document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim();
    const resultsList = document.getElementById("results");
    resultsList.innerHTML = ""; // Limpiar resultados anteriores

    if (!query) {
        resultsList.innerHTML = "<li>Escribe algo para buscar.</li>";
        return;
    }

    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // data = []
            if (data.results.length === 0) {
                resultsList.innerHTML = "<li>No se encontraron resultados.</li>";
                return;
            }
            // data = [o1, o2 ,o3]
            let contador = 0
            data.results.forEach(item => {
                const li = document.createElement("li");
                
                const audio_id = contador
                contador++

                li.innerHTML = `
                                <strong>${item.trackName}</strong> — ${item.artistName}
                                <br>
                                <button onclick="controlAudio(this, '${"audio_"+audio_id}')">Play</button>
                                <audio id="${"audio_"+audio_id}" src="${item.previewUrl}"></audio>

                                <img src="${item.artworkUrl100}">
                                `;
                resultsList.appendChild(li);
            });
        })
        .catch(err => {
            resultsList.innerHTML = "<li>Error al buscar datos.</li>";
            console.error(err);
        });
});


let boolean = false

function controlAudio(btn, audio_id) {
    
    let audio = document.getElementById("audio_"+audio_id)

    boolean = !boolean

    if (boolean) {
        btn.textContent = "Pause"
    } else {
        btn.textContent = "Play"
    }
    console.log("Pausar audio..."+ audio_id)
}