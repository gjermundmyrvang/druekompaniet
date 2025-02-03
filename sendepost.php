<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Hent skjemafeltverdiene
    $epost = $_POST["epost"];
    $melding = $_POST["melding"];

    // Valider skjemafeltene
    $epost = filter_var($epost, FILTER_SANITIZE_EMAIL);
    $melding = htmlspecialchars($melding);

    // Sjekk om feltene er fylt ut
    if (empty($epost) || empty($melding)) {
        echo "Vennligst fyll ut alle feltene.";
        exit;
    }

    // Konfigurer e-postparametere
    $mottaker = "druekompaniet@gmail.com";
    $emne = "Kontaktskjema";
    $beskjed = "E-post: $epost\n\nMelding:\n$melding";
    $header = "From: $epost";

    // Send e-post
    if (mail($mottaker, $emne, $beskjed, $header)) {
        echo "Takk for din henvendelse!";
    } else {
        echo "Beklager, det oppsto en feil ved sending av e-post.";
    }
}
?>