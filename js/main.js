$(document).ready(function() {
  //trovato il metedo di moment per estrapolare quanti giorni possiede un mese
  console.log();

  var giorniGennaio = moment("2017-01", "YYYY-MM").daysInMonth();
  console.log(giorniGennaio);
  //chiamata per il mese di gennaio per scaricare festività
    $.ajax({
      url: "https://holidayapi.com/v1/holidays",
      method: "GET",
      data: {
        key: "4c787bc0-88cd-4e5a-b4be-5e9f59b73ab7",
        country: "IT",
        year: 2017,
        month: 1
      },
      success: function(data, stato) {
        var infoMese = data;
        console.log(infoMese);
        console.log(infoMese.holidays.length);
        for (var i = 0; i < infoMese.holidays.length; i++) {
          //salvo le festevita del mese
          var festivitaRecuperata = infoMese.holidays[i].date;
          console.log(festivitaRecuperata);
          //poi le converto in un numero singolo
          var dataFestivita = moment(festivitaRecuperata).format("D");
          console.log(dataFestivita);


        }

      },
      error: function(richiesta, stato, errori) {
        console.log("c'è stato un errore " + errori);
      }


  });
});
