$(document).ready(function () {
  $("#result").html("");
  $.ajax({
    url:
      "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP68257,SF43718/datos/oportuno?token=6a4bff1a5af2ab8487d44498f9e9226c4aa60eeec3fc10e686ed5c88a95f4a7c",
    jsonp: "callback",
    dataType: "jsonp", //Se utiliza JSONP para realizar la consulta cross-site
    success: function (response) {
      //Handler de la respuesta
      var series = response.bmx.series;

      //Se carga una tabla con los registros obtenidos
      for (var i in series) {
        var serie = series[i];
        var reg = `<tr>
                        <td>${serie.titulo}</td>
                        <td>${serie.datos[0].fecha}</td>
                        <td>${serie.datos[0].dato}</td>
                    </tr>`;
        $("#result").append(reg);
      }
    },
  });
});

$("#submit-query").click((e) => {
  e.preventDefault();
  let endDate = $("#end-date").val();
  let startDate = $("#start-date").val();
  let selectValue = $("#inputState").val();
  $("#result2").html("").fadeIn();
  $("#description").html("");
  $("#promedio").html("");
  $("#maximo").html("");
  $("#minimo").html("");
  // alert(endDate, startDate)
  if (endDate === "" || startDate === "" || selectValue === "") {
    alert("debes poner los ranfgos de fechas");
  } else {
    $.ajax({
      url: `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${selectValue}/datos/${startDate}/${endDate}?token=6a4bff1a5af2ab8487d44498f9e9226c4aa60eeec3fc10e686ed5c88a95f4a7c`,
      jsonp: "callback",
      dataType: "jsonp", //Se utiliza JSONP para realizar la consulta cross-site
      success: function (response) {
        //Handler de la respuesta
        var series = response.bmx.series;
        //Se carga una tabla con los registros obtenidos
        for (var i in series) {
          var serie = series[i];
          var size = series[0].datos.length;
          var suma = 0;
          var min = series[0].datos[0];
          var max = 0;
          $("#description").append(serie.titulo);
          serie.datos.forEach((element) => {
            suma = parseFloat(element.dato) + suma;
            if (element.dato > max) {
              max = element.dato;
            }
            if (min > element.dato) {
              min = element.dato;
            }
            var reg = `<tr>
                           <td>${element.fecha}</td
                           .>
                           <td>${element.dato}</td>
                      </tr>`;
            $("#result2").append(reg);
          });
          var promedio = suma / size;
          $("#promedio").append(`Promedio: ${promedio}`);
          $("#maximo").append(`Maximo: ${max}`);
          $("#minimo").append(`Minimo:${min}`);
          console.log(max, "<-----max", min, "<-----min");
        }
      },
    });
  }
});

//https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP68257/datos/${startDate}/${endDate}?token=6a4bff1a5af2ab8487d44498f9e9226c4aa60eeec3fc10e686ed5c88a95f4a7c
