// Mood Tracker Functionality
function saveMood() {
    const mood = document.getElementById("mood").value;
    document.getElementById("mood-display").textContent = `Your current mood is: ${mood}`;
  }
  
  // Journal Functionality
  function saveJournal() {
    const entry = document.getElementById("journal-entry").value;
    if (entry) {
      document.getElementById("journal-display").textContent = `Last entry: ${entry}`;
      document.getElementById("journal-entry").value = ""; // Clear textarea after saving
    } else {
      alert("Please write something in the journal.");
    }
  }
  
  // Meditation Functionality
  function startMeditation() {
    alert("Starting a 5-minute meditation session. Take a deep breath and relax.");
  }
  