$( document ).ready(function() {
    setInterval('reloj()', 1000);

    $('#empezar').click(function(){
        var nclient = getClient();
        $("#table-body tr").remove();
        if(nclient!=false){
            var Hllegada = 0;
            var HfinServicioAnt = 0;
            var HinicioServicio = 0;
            for (var i = 1; i <=nclient ; i++) {
                var Tllegada = ran();
                var Tservicio = ran();
                Hllegada += Tllegada;

                if (HfinServicio>=Hllegada) {
                    HinicioServicio = HfinServicio;
                }else{
                    HinicioServicio = Hllegada;
                }
                var HfinServicio = HinicioServicio+Tservicio;
                var TEspera = HfinServicio - Hllegada;
                var TInactivo = HinicioServicio - HfinServicioAnt;

                $("#table-body").append('<tr>\
                        <th>'+i+'</th>\
                        <th>'+Tllegada+'</th>\
                        <th>'+Hllegada+'</th>\
                        <th>'+HinicioServicio+'</th>\
                        <th>'+Tservicio+'</th>\
                        <th>'+HfinServicio+'</th>\
                        <th>'+TEspera+'</th>\
                        <th>'+TInactivo+'</th>\
                    </tr>');

                HfinServicioAnt = HfinServicio;
                // console.log('hola--'+i);
            }
        }
    });


});

function getClient() {
    var nclient = $("#Nclient").val();
    if (nclient<=1) {
        $('#Nclient').popover('show')
        return false
    }else{
        $("#Nclient").val('');
        return nclient;
    }
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
