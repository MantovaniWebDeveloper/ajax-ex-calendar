$(document).ready(function() {
  //trovato il metedo di moment per estrapolare quanti giorni possiede un mese
  var giorniGennaio = moment("2017-01", "YYYY-MM").daysInMonth();
  console.log(giorniGennaio);
  //salvo tutti i giorni di gennaio in un oggetto;
  var gennaio = {
    giorni : [],
    festivita : []
  }
  var giorno = 0;
  var giornoMese;
  for (var i = 1; i <= giorniGennaio; i++) {
    giorno = i;
    gennaio.giorni.push(giorno);
    giornoMese = moment("2017-01-"+giorno).format("ddd");
    console.log(giornoMese)
  }
console.log(gennaio);

for (var i = 0; i < gennaio.giorni.length; i++) {
  var templateBase = $('#listaGiorni').html();
  var templateCompilato = Handlebars.compile(templateBase);
  var context = {
    giorni: gennaio.giorni[i],
  };
  var htmlStampato = templateCompilato(context);
  $('#wrapElenco').append(htmlStampato);
}
//chiamata per il mese di gennaio per scaricare festività
/*  $.ajax({
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
        var nomeFestivitaRecuperata = infoMese.holidays[i].name;
        //console.log(festivitaRecuperata);
        //poi le converto in un numero singolo
        var dataFestivita = parseInt(moment(festivitaRecuperata).format("D"));
        gennaio.festivita.push(dataFestivita);
        //console.log("festa: " + dataFestivita);
        if(gennaio.giorni.includes(dataFestivita)){
          console.log("trovato: " + dataFestivita);
          $("#wrapElenco .giorno").eq(dataFestivita - 1).css("backgroundColor","#fbeefe").append(nomeFestivitaRecuperata);;
        }
      }


    },
    error: function(richiesta, stato, errori) {
      console.log("c'è stato un errore " + errori);
    }


  });*/
});
