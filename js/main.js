$(document).ready(function() {
  //trovato il metedo di moment per estrapolare quanti giorni possiede un mese
  console.log();

  var giorniGennaio = moment("2017-01", "YYYY-MM").daysInMonth();
  console.log(giorniGennaio);
  //salvo tutti i giorni di gennaio in un array;
  var meseGennaio = [];
  var giorno = 0;
  for (var i = 1; i <= giorniGennaio; i++) {
    giorno = i;
    meseGennaio.push(giorno);
  }

  console.log(meseGennaio);

  console.log(meseGennaio.includes(1));
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
          //console.log(festivitaRecuperata);
          //poi le converto in un numero singolo
          var dataFestivita = moment(festivitaRecuperata).format("D");
          console.log("festa: " + dataFestivita);
          //applico il ciclo while con all'interno il confronta giorno / festivita
          var trovato = false ;
          var contatore = 0;
          while(!trovato){
            if(meseGennaio[contatore] == dataFestivita) {
              console.log("trovato");
              trovato = true ;
            }
            else {
              console.log("non trovato");
            }

            contatore ++;
          }
        }


      },
      error: function(richiesta, stato, errori) {
        console.log("c'è stato un errore " + errori);
      }


  });
});
