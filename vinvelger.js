function showRecommendedWine() {
    const activitiesSelect = document.getElementById("activities");
    const selectedActivity = activitiesSelect.value;
    let wineRecommendation;
  
    switch (selectedActivity) {
      case "middagsselskap":
        wineRecommendation = "Guttas Rouge vil gjøre middagen til en dere sent vil glemme!";
        break;
      case "fest":
        wineRecommendation = "Guttas Berry er en soleklar vinner på dette feltet!"
        + " Du kjenner effekten etter kun ett glass, skravla kommer og du klarer ikke å holde kjeft";
        break;
      case "frokost":
        wineRecommendation = "Hvorfor ikke prøve en smakfull Guttas Hvite eller en elegant Guttas Piesporter?";
        break;
      case "rolig-kveld":
        wineRecommendation = "Kos deg med en deilig Guttas Rouge eller en frisk Guttas Hvite på en rolig kveld.";
        break;
      case "hytta":
        wineRecommendation = "Skal du på hytta kan du ta hvilken faens vin du selv vil ha! På hytta funker ALT!";
        break;  
      case "romantisk":
        wineRecommendation = "Gjør kvelden romantisk med en flaske Guttas Riesling";
        break;
      case "ost":
        wineRecommendation = "Skal du ha ost og vinkveld vil jeg anbefale en flaske av hver sort."
        + " Prøv å finn ut av hvilken vin som passer til de ulike ostene;)";
        break;
      case "kultur":
        wineRecommendation = "En elegant Guttas Rouge eller en forfriskende Guttas Piesporter passer godt til kulturelle opplevelser.";
        break;
      case "piknik":
        wineRecommendation = "Nyt pikniken med en lett og fruktig vin: Guttas Riesling. Kommer til å løfte stemningen flere hakk^";
        break;
      case "familie":
        wineRecommendation = "Del gode øyeblikk med familien og en god flaske Guttas Riesling";
        break;
      case "restaurant":
        wineRecommendation = "Spør servitøren om en anbefaling tilpasset restaurantens meny.";
        break;
      default:
        wineRecommendation = "Vi kunne ikke finne en anbefaling for denne aktiviteten.";
    }
  
    const wineRecommendationDiv = document.getElementById("wineRecommendation");
    wineRecommendationDiv.innerText = wineRecommendation;
  }

  
const postForm = document.getElementById("postForm");
const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
  
  imageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        previewImage.src = event.target.result;
        previewImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.src = "#";
      previewImage.style.display = "none";
    }
  });
  
  postForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(postForm);
  
    fetch("/api/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Innlegget ble lagret på serveren.");
          postForm.reset();
          previewImage.src = "#";
          previewImage.style.display = "none";
        } else {
          alert("Det oppsto en feil under opplastingen. Vennligst prøv igjen.");
        }
      })
      .catch((error) => {
        console.error("Feil ved opplasting av innlegg:", error);
        alert("Noe gikk galt. Vennligst prøv igjen senere.");
      });
  });