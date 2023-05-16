
let indefUnntak = [
  {norsk: "vi sang", spansk: "cantamos"},
  {norsk: "du sang", spansk: "cantaste"},
  {norsk: "jeg sa", spansk: "dije"},
  {norsk: "du sa", spansk: "dijiste"},
  {norsk: "de snakket", spansk: "hablaron"},
  {norsk: "du snakket", spansk: "hablaste"},
  {norsk: "jeg snakket", spansk: "hablé"},
  {norsk: "du spurte", spansk: "preguntaste"},
  {norsk: "jeg spurte", spansk: "pregunté"},
  {norsk: "du gikk ut", spansk: "saliste"},
  {norsk: "jeg gikk ut", spansk: "salí"},
  {norsk: "jeg hadde", spansk: "tuve"},
  {norsk: "de så", spansk: "vieron"},
  {norsk: "vi så", spansk: "vimos"},
  {norsk: "du så", spansk: "viste"},
  {norsk: "Hun ble gal", spansk: "Se volvió loca"},
  {norsk: "Han ble prest", spansk: "Se hizo cura"},
  {norsk: "Hun fylte 18 år på lørdag", spansk: "Cumplió 18 años el sábado"},
  {norsk: "Jeg ble syk i går", spansk: "Me puse enferm@ ayer"},
  {norsk: "Jeg vil bli fotballspiller", spansk: "Quiero ser futbolista"},
  {norsk: "Spania ble demokrati fra 1975", spansk: "España se convirtió en democracia desde 1975"},
  {norsk: "Spania ble et fascistisk diktatur i 1939", spansk: "España se convirtió en una dictadura fascista en 1939"},
  {norsk: "Spania ble republikk fra 1931", spansk: "España se convirtió en una república en 1931"},
  {norsk: "Venezuela har blitt et fattig land", spansk: "Venezuela se ha convertido en un país pobre"},
  {norsk: "Han ble narkoman", spansk: "Se convirtió en drogadicto"},
  {norsk: "Beslutningen ble kritisert av alle", spansk: "La decisión fue criticada por todos"},
  {norsk:"FERDIG! Nå har du trykket deg gjennom alle kortene", spansk:""}
];



let front = document.getElementById('front');
let back = document.getElementById('back');
let buttonEl = document.querySelector('button');
buttonEl.addEventListener("click", nextBtn);
let kortTeller = 0;


// funksjon for neste kort, bytter ut teksten i diven
function nextBtn() {
  
  kortTeller += 1;

  front.innerHTML = indefUnntak[kortTeller].norsk;
  back.innerHTML = indefUnntak[kortTeller].spansk;
}


function restartPage() {
  location.reload(); // Reloader siden
}
