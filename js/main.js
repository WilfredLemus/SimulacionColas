var n, crTime, TllegadaAnt, HinicioServicio, Hllegada, HfinServicioAnt, HfinServicioAnt, HfinServicio;

$( document ).ready(function() {
    setInterval('reloj()', 1000);

    $('#empezar').click(function(){
        $('#P').text('');
        $('#PO').text('');
        $('#LS').text('');
        $('#WS').text('');
        $('#LQ').text('');
        $('#WQ').text('');
        $('#PN').text('');

        crTime = getDate( );
        $('.bar').width('0');
        var Ntiempo = parseInt($("#Ntiempo").val());
        // var Ntiempo = 5;
        crTime.setSeconds(crTime.getSeconds() + Ntiempo);
        n = 1;
        TllegadaAnt = HinicioServicio = Hllegada = HfinServicioAnt = HfinServicioAnt = HfinServicio = 0;
        $("#table-body tr").remove();
        process();
        progress(Ntiempo);
        // setInterval('process()', 5000);
        // setTimeout(process, 5000);
        // sleep(5000);
        // window.setTimeout(process(), 5000);

    });
});

function progress(tm){
    $('#barpro').show();
    var ch = 450/(tm+1);

    var pro = setInterval(function () {
        var $bar = $('.bar');
        if ($bar.width() >= 450) {
            clearInterval(pro);
            // $('.progress').removeClass('active');
        } else {
            $bar.width($bar.width() + ch);
        }
    }, 1000);
}

// var crHrs = crTime.getHours ( );
// var crMns = crTime.getMinutes ( );
// var crScs = crTime.getSeconds ( );
// var FinSegundos = crScs+15;
// crTime.setSeconds(15);

function process(){
    var newTime = new Date ( );
    // var newcrScs = newTime.getSeconds ( );
    var Tllegada = ran();
    var Tservicio = ran();
    Hllegada += Tllegada;
 
    if (HfinServicio>=Hllegada) {
        HinicioServicio = HfinServicio;
    }else{
        HinicioServicio = Hllegada;
    }

    HfinServicio = HinicioServicio+Tservicio;
    var TCola = HinicioServicio - Hllegada;
    var TEspera = HfinServicio - Hllegada;
    var TInactivo = HinicioServicio - HfinServicioAnt;

    $("#table-body").append('<tr class="dato">\
            <th>'+n+'</th>\
            <th>'+Tllegada+'</th>\
            <th>'+Hllegada+'</th>\
            <th>'+HinicioServicio+'</th>\
            <th>'+Tservicio+'</th>\
            <th>'+HfinServicio+'</th>\
            <th>'+TEspera+'</th>\
            <th>'+TCola+'</th>\
            <th>'+TInactivo+'</th>\
        </tr>');
    n++;
    HfinServicioAnt = HfinServicio;
    if (newTime<=crTime) {
        setTimeout(process, rando(5000));
    }else{
        form();
        $('#barpro').hide();
    }

 }


function form(){
    var ProLlegada = ProServicio = ProEspera = ProCajInac = 0;
    $('#table-body tr').each(function(){
        ProLlegada += parseInt($(this).find('th').eq(1).text())
        ProServicio += parseInt($(this).find('th').eq(4).text())
        ProEspera += parseInt($(this).find('th').eq(6).text())
        // ProCajInac += parseInt($(this).find('th').eq(8).text())
    })
    var ct = n-1;
    ProLlegada = ProLlegada/ct;
    // ProServicio = ProServicio/ct;
    Servicio = ProEspera/ct;
    $('#P').text((ProLlegada/Servicio).toFixed(2));
    $('#PO').text((1-(ProLlegada/Servicio)).toFixed(2));
    $('#LS').text((ProLlegada/(Servicio-ProLlegada)).toFixed(2));
    $('#WS').text((1/(Servicio-ProLlegada)).toFixed(2));
    $('#LQ').text(((ProLlegada*ProLlegada)/Servicio*(Servicio-ProLlegada)).toFixed(2));
    $('#WQ').text(((ProLlegada)/Servicio*(Servicio-ProLlegada)).toFixed(2));
    $('#PN').text(((1-(ProLlegada/Servicio))*Math.pow((ProLlegada/Servicio), 3)).toFixed(2));
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
