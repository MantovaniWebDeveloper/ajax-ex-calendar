$(document).ready(function() {
  //creo data
  var date = moment('2017-01');
  stampaGiorni(date);
  console.log("prima date" + date);
  //AL click del pulsante Prossimo
  $('#prossimo').click(function() {
    //alert("cliccato");
    //uso il metodo per aggiungere una data
    date.add(1,'M');
    $('#nomeMese').html(date.format('MMMM YYYY'));
    stampaGiorni(date);

  });
  //AL click del pulsante Prossimo
  $('#precedente').click(function() {
    //alert("cliccato");
    //uso il metodo per sottrarre una data
    date.subtract(1,'M');
    $('#nomeMese').html(date.format('MMMM YYYY'));
    stampaGiorni(date);
  });
  function stampaGiorni(date){
    $('#nomeMese').html(date.format('MMMM YYYY'));
    //trovato il metedo di moment per estrapolare quanti giorni possiede un mese

    var giorniMese = moment(date, "YYYY-MM").daysInMonth();
    console.log(giorniMese);
    //salvo tutti i giorni di gennaio in un oggetto;
    var mese = {
      giorni: [],
      nomeGiorni: [],
      festivita: []
    }
    var giorno = 0;
    var giornoMese;
    for (var i = 1; i <= giorniMese; i++) {
      giorno = i;
      mese.giorni.push(giorno);
      giornoMese = moment("2017-01-" + giorno).format("ddd");
      console.log(giornoMese)
      mese.nomeGiorni.push(giornoMese);
    }

    for (var i = 0; i < mese.giorni.length; i++) {
      var templateBase = $('#listaGiorni').html();
      var templateCompilato = Handlebars.compile(templateBase);
      var context = {
        giorni: mese.giorni[i],
        nomiGiorniMese: mese.nomeGiorni[i]
      };
      var htmlStampato = templateCompilato(context);
      $('#wrapElenco').append(htmlStampato);

    }
  }
  //Al click del pulsante seleziona
  $('#conferma').click(function() {
    //recupero il valore dalla select
    var nazione = $('#selectListaNazioni').val();
    console.log("nazione scelta " + nazione);
    chimataApi(nazione,date);
  });


  function chimataApi(nazione,date) {
    //chiamata per il mese di gennaio per scaricare festività
  /* $.ajax({
      url: "https://holidayapi.com/v1/holidays",
      method: "GET",
      data: {
        key: "4c787bc0-88cd-4e5a-b4be-5e9f59b73ab7",
        country: nazione,
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
          if (gennaio.giorni.includes(dataFestivita)) {
            console.log("trovato: " + dataFestivita);
            $("#wrapElenco .giorno").eq(dataFestivita - 1).css("backgroundColor", "#fbeefe").append(nomeFestivitaRecuperata);;
          }
        }


      },
      error: function(richiesta, stato, errori) {
        console.log("c'è stato un errore " + errori);
      }


    });*/
  }

});
