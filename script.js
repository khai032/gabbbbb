function toggleMusic() {
    if (musicPlaying) {
      backgroundMusic.pause(); // Pauses the music
      musicPlaying = false;
      document.getElementById("musicBtn").textContent = "Play Music"; // Change button text
    } else {
      backgroundMusic.play(); // Plays the music
      musicPlaying = true;
      document.getElementById("musicBtn").textContent = "Pause Music"; // Change button text
    }
  }
  