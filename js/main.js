var n = 1;
var crTime, TllegadaAnt;
$( document ).ready(function() {
    setInterval('reloj()', 1000);

    $('#empezar').click(function(){
        crTime = getDate( );
        // setInterval('process()', 5000);
        var Ntiempo = parseInt($("#Ntiempo").val());
        crTime.setSeconds(crTime.getSeconds() + Ntiempo);
        n = 1;
        $("#table-body tr").remove();
        TllegadaAnt = 0;
        process();
        // setTimeout(process, 5000);
        // sleep(5000);
        // window.setTimeout(process(), 5000);

    });
});

// var crHrs = crTime.getHours ( );
// var crMns = crTime.getMinutes ( );
// var crScs = crTime.getSeconds ( );
// var FinSegundos = crScs+15;
// crTime.setSeconds(15);

function process(){
    var newTime = new Date ( );
    var newcrScs = newTime.getSeconds ( );
    var cnt = 5;
    var Tllegada = newTime.getSeconds()-TllegadaAnt;
    var Hllegada = getTime(newTime);
    // alert("Hola");
    // console.log("Entro"+crScs);
    // newclient();
    // $("#table-body").append('<tr>\
    //                  <th>'+n+'</th>\
    //                  <th>'+Tllegada+'</th>\
    //                  <th>'+Hllegada+'</th>\
    //                  <th>'+HinicioServicio+'</th>\
    //                  <th>'+Tservicio+'</th>\
    //                  <th>'+HfinServicio+'</th>\
    //                  <th>'+TEspera+'</th>\
    //                  <th>'+TInactivo+'</th>\
    //              </tr>');

    $("#table-body").append('<tr>\
            <th>'+n+'</th>\
            <th>'+Tllegada+'</th>\
            <th>'+Hllegada+'</th>\
            <th>PRUEBA</th>\
            <th>P</th>\
            <th>P</th>\
            <th>P</th>\
            <th>P</th>\
        </tr>');
    n++;
    TllegadaAnt = newTime.getSeconds();
    // sleep(3000);
    
    // console.log("Fin de Segundos"+crTime);
    // console.log("Segundo Actual"+newTime);
    if (newTime<=crTime) {
        setTimeout(process, rando(5000));
    }
 }

function getTime (Time){
    var crTime = Time;
    var crHrs = crTime.getHours ( );
    var crMns = crTime.getMinutes ( );
    var crScs = crTime.getSeconds ( );
    var timeOfDay = ( crHrs < 12 ) ? "AM" : "PM";
    crHrs = ( crHrs > 12 ) ? crHrs - 12 : crHrs;
    crHrs = ( crHrs == 0 ) ? 12 : crHrs;
    var crTimeString = crHrs + ":" + crMns + ":" + crScs;
    return crTimeString;
    // $("#reloj").html(crTimeString);
 }



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function newclient(){
    var Tllegada = ran();
    var Tservicio = ran();
    Hllegada = Tllegada;

    // if (HfinServicio>=Hllegada) {
    //     HinicioServicio = HfinServicio;
    // }else{
    //     HinicioServicio = Hllegada;
    // }
    // var HfinServicio = HinicioServicio+Tservicio;
    // var TEspera = HfinServicio - Hllegada;
    // var TInactivo = HinicioServicio - HfinServicioAnt;

    // $("#table-body").append('<tr>\
    //         <th>1</th>\
    //         <th>'+Tllegada+'</th>\
    //         <th>'+Hllegada+'</th>\
    //         <th>PRUEBA</th>\
    //         <th>P</th>\
    //         <th>P</th>\
    //         <th>P</th>\
    //         <th>P</th>\
    //     </tr>');
    

    // HfinServicioAnt = HfinServicio;
}

function getDate () {
    return new Date ( );
}

function reloj ( ){
    var crTime = new Date ( );
    var crHrs = crTime.getHours ( );
    var crMns = crTime.getMinutes ( );
    var crScs = crTime.getSeconds ( );
    crMns = ( crMns < 10 ? "0" : "" ) + crMns;
    crScs = ( crScs < 10 ? "0" : "" ) + crScs;
    var timeOfDay = ( crHrs < 12 ) ? "AM" : "PM";
    crHrs = ( crHrs > 12 ) ? crHrs - 12 : crHrs;
    crHrs = ( crHrs == 0 ) ? 12 : crHrs;
    var crTimeString = crHrs + ":" + crMns + ":" + crScs + " " + timeOfDay;
    $("#reloj").html(crTimeString);
 }

 function ran(){
     return Math.floor((Math.random() * 10) + 1);
 }

  function rando(tm){
     return Math.floor((Math.random() * tm) + 1);
 }
