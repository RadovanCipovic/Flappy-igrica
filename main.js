document.addEventListener("DOMContentLoaded", () => {
  const ptica = document.querySelector(".ptica");
  const igricaDisplej = document.querySelector(".game-container");
  const zemlja = document.querySelector(".zemlja");

  let pticaLijevo = 220;
  let pticaDolje = 100;
  let gravitacija = 2;
  let jeLiKrajIgre = false;
  let gap = 430;

  function pocniIgru() {
    pticaDolje -= gravitacija;
    ptica.style.bottom = pticaDolje + "px";
    ptica.style.left = pticaLijevo + "px";
  }
  pocniIgru();

  let igraTajmerID = setInterval(pocniIgru, 20);


  // PTICA SKOK
  function skok() {
    if (pticaDolje < 500) pticaDolje += 50;
    ptica.style.bottom = pticaDolje + "px";
    console.log(pticaDolje);
  }

  document.addEventListener("keyup", skok);

  // POKRET
  function generisiPrepreku() {
    let preprekaLijevo = 500;
    let randomVisina = Math.random() * 60;
    let preprekaDolje = randomVisina;

    const prepreka = document.createElement("div");
    const gorePrepreka = document.createElement("div");

    if (!jeLiKrajIgre) {
      prepreka.classList.add("prepreka");
      gorePrepreka.classList.add("gorePrepreka");
    }

    igricaDisplej.appendChild(prepreka);
    igricaDisplej.appendChild(gorePrepreka);

    prepreka.style.left = preprekaLijevo + "px";
    gorePrepreka.style.left = preprekaLijevo + "px";
    prepreka.style.bottom = preprekaDolje + "px";
    gorePrepreka.style.bottom = preprekaDolje + gap + "px";

    // PREPREKE - POMJERANJE
    function pomjeranjePrepreke() {
      preprekaLijevo -= 2;
      prepreka.style.left = preprekaLijevo + "px";
      gorePrepreka.style.left = preprekaLijevo + "px";

      if (preprekaLijevo === -60) {
        clearInterval();
        igricaDisplej.removeChild(prepreka);
        igricaDisplej.removeChild(gorePrepreka);
      }
      if (
        (preprekaLijevo > 200 &&
          preprekaLijevo < 280 &&
          pticaLijevo === 220 &&
          (pticaDolje < preprekaDolje + 150 ||
            pticaDolje > preprekaDolje + gap - 200)) ||
        pticaDolje === 0
      ) {
        krajIgre();
        clearInterval(tajmerID);
      }
    }
    let tajmerID = setInterval(pomjeranjePrepreke, 20);
    if (!jeLiKrajIgre) setTimeout(generisiPrepreku, 3000);
  }
  generisiPrepreku();

  // KRAJ IGRE
  function krajIgre() {
    clearInterval(igraTajmerID);
    // console.log("Kraj igre");
    jeLiKrajIgre = true;
    document.removeEventListener("keyup", skok);
  }
});
