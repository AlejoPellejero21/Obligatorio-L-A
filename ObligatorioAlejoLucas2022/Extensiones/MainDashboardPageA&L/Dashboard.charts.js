window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
  var xValues = ["Canceladas", "Aprobadas", "Ingoradas", "Pendientes"];
  var yValues = [55, 15, 44, 24];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018"
      }
    }
  });
}
