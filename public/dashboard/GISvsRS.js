async function ChartIt(filepath1, filepath2, id) {
  const xlabel = [];
  const tempLabel1 = [];
  const turbLabel1 = [];
  const pHLabel1 = [];
  const DOLabel1 = [];
  const TDSLabel1 = [];
  const WQILabel1 = [];

  const tempLabel2 = [];
  const turbLabel2 = [];
  const pHLabel2 = [];
  const DOLabel2 = [];
  const TDSLabel2 = [];
  const WQILabel2 = [];
  let response1 = await fetch(filepath1);
  const data1 = await response1.text();
  const table1 = data1.split("\n").slice(1);

  async function getData1() {
    table1.forEach((row) => {
      const columns = row.split(",");
      const date = columns[0];
      xlabel.push(date);
      const temp = columns[1];
      tempLabel1.push(temp);
      const turb = columns[2];
      turbLabel1.push(turb);
      const pH = columns[3];
      pHLabel1.push(pH);
      const DO = columns[4];
      DOLabel1.push(DO);
      const TDS = columns[5];
      TDSLabel1.push(TDS);
      const WQI = columns[6];
      WQILabel1.push(WQI);
    });
  }

  let response2 = await fetch(filepath2);
  const data2 = await response2.text();
  const table2 = data2.split("\n").slice(1);

  async function getData2() {
    table2.forEach((row) => {
      const columns = row.split(",");
      const temp = columns[1];
      tempLabel2.push(temp);
      const turb = columns[2];
      turbLabel2.push(turb);
      const pH = columns[3];
      pHLabel2.push(pH);
      const DO = columns[4];
      DOLabel2.push(DO);
      const TDS = columns[5];
      TDSLabel2.push(TDS);
      const WQI = columns[6];
      WQILabel2.push(WQI);
    });
  }

  getData1();
  getData2();

  async function DrawChart() {
    const ctx = document.getElementById(id).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "GIS",
            data: WQILabel1,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1,
          },
          {
            label: "RS",
            data: WQILabel2,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1,
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 1,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Canadian Water Quality Index",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
        },
      },
    });
  }
  DrawChart();
}
ChartIt(
  "dashboard/GIS_Datasets/GIS_2016.csv",
  "dashboard/RS_Datasets/RS_2016.csv",
  "2016"
);
ChartIt(
  "dashboard/GIS_Datasets/GIS_2017.csv",
  "dashboard/RS_Datasets/RS_2017.csv",
  "2017"
);
ChartIt(
  "dashboard/GIS_Datasets/GIS_2018.csv",
  "dashboard/RS_Datasets/RS_2018.csv",
  "2018"
);
ChartIt(
  "dashboard/GIS_Datasets/GIS_2019.csv",
  "dashboard/RS_Datasets/RS_2019.csv",
  "2019"
);
ChartIt(
  "dashboard/GIS_Datasets/GIS_2020.csv",
  "dashboard/RS_Datasets/RS_2020.csv",
  "2020"
);
