function changeColors(element) {
    var colors = ["red", "blue", "green", "orange"]; // Liste med farger
    var currentIndex = 0;
    var interval = setInterval(function() {
      element.style.color = colors[currentIndex]; // Endrer fargen til gjeldende farge i listen
      currentIndex++;
      if (currentIndex === colors.length) {
        currentIndex = 0; // Tilbakestiller indeksen når vi har nådd slutten av listen
      }
    }, 300); // Endrer farge hvert 300. millisekund
  
    element.dataset.interval = interval; // Lagrer interval-ID-en på elementet for senere avbrudd
  }
  
  function resetColor(element) {
    clearInterval(element.dataset.interval); // Avbryter fargeendringsintervallet
    element.style.color = ""; // Tilbakestiller fargen til standard
  }


function flipCard() {
    var card = event.currentTarget;
    card.classList.toggle('flipped');
  }

