let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

function isValidDate(date) {
  if (!regex.test(date)) {
    console.log("pas ok");
    return;
  }

  // On extrait jour, mois, année
  let [_, jourStr, moisStr, anneeStr] = date.match(regex);
  let jour = parseInt(jourStr);
  let mois = parseInt(moisStr);
  let annee = parseInt(anneeStr);

  // Vérifie si la date est réelle
  let dateObj = new Date(annee, mois - 1, jour); // JS : mois 0-indexé
  if (
    dateObj.getFullYear() === annee &&
    dateObj.getMonth() === mois - 1 &&
    dateObj.getDate() === jour
  ) {
    console.log("ok");
  } else {
    console.log("pas ok");
  }
}

let date = "12/12/2222";
isValidDate(date);  // Affiche : pas ok