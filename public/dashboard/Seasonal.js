Chart.defaults.font.family = 'quicksand,sans-serif'


async function ChartIt(
  filepath1,
  filepath2,
  filepath3,
  filepath4,
  filepath5,
  filepath6,
  id1,
  id2,
  id3,
  id4,
  id5,
  id6
) {
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

  const tempLabel3 = [];
  const turbLabel3 = [];
  const pHLabel3 = [];
  const DOLabel3 = [];
  const TDSLabel3 = [];
  const WQILabel3 = [];

  const tempLabel4 = [];
  const turbLabel4 = [];
  const pHLabel4 = [];
  const DOLabel4 = [];
  const TDSLabel4 = [];
  const WQILabel4 = [];

  const tempLabel5 = [];
  const turbLabel5 = [];
  const pHLabel5 = [];
  const DOLabel5 = [];
  const TDSLabel5 = [];
  const WQILabel5 = [];

  const tempLabel6 = [];
  const turbLabel6 = [];
  const pHLabel6 = [];
  const DOLabel6 = [];
  const TDSLabel6 = [];
  const WQILabel6 = [];

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

  let response3 = await fetch(filepath3);
  const data3 = await response3.text();
  const table3 = data3.split("\n").slice(1);

  async function getData3() {
    table3.forEach((row) => {
      const columns = row.split(",");
      const temp = columns[1];
      tempLabel3.push(temp);
      const turb = columns[2];
      turbLabel3.push(turb);
      const pH = columns[3];
      pHLabel3.push(pH);
      const DO = columns[4];
      DOLabel3.push(DO);
      const TDS = columns[5];
      TDSLabel3.push(TDS);
      const WQI = columns[6];
      WQILabel3.push(WQI);
    });
  }

  let response4 = await fetch(filepath4);
  const data4 = await response4.text();
  const table4 = data4.split("\n").slice(1);

  async function getData4() {
    table4.forEach((row) => {
      const columns = row.split(",");
      const temp = columns[1];
      tempLabel4.push(temp);
      const turb = columns[2];
      turbLabel4.push(turb);
      const pH = columns[3];
      pHLabel4.push(pH);
      const DO = columns[4];
      DOLabel4.push(DO);
      const TDS = columns[5];
      TDSLabel4.push(TDS);
      const WQI = columns[6];
      WQILabel4.push(WQI);
    });
  }

  let response5 = await fetch(filepath5);
  const data5 = await response5.text();
  const table5 = data5.split("\n").slice(1);

  async function getData5() {
    table5.forEach((row) => {
      const columns = row.split(",");
      const temp = columns[1];
      tempLabel5.push(temp);
      const turb = columns[2];
      turbLabel5.push(turb);
      const pH = columns[3];
      pHLabel5.push(pH);
      const DO = columns[4];
      DOLabel5.push(DO);
      const TDS = columns[5];
      TDSLabel5.push(TDS);
      const WQI = columns[6];
      WQILabel5.push(WQI);
    });
  }

  let response6 = await fetch(filepath6);
  const data6 = await response6.text();
  const table6 = data6.split("\n").slice(1);

  async function getData6() {
    table6.forEach((row) => {
      const columns = row.split(",");
      const temp = columns[1];
      tempLabel6.push(temp);
      const turb = columns[2];
      turbLabel6.push(turb);
      const pH = columns[3];
      pHLabel6.push(pH);
      const DO = columns[4];
      DOLabel6.push(DO);
      const TDS = columns[5];
      TDSLabel6.push(TDS);
      const WQI = columns[6];
      WQILabel6.push(WQI);
    });
  }

  getData1();
  getData2();
  getData3();
  getData4();
  getData5();
  getData6();

  async function DrawChart1() {
    const ctx = document.getElementById(id1).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2015",
            data: WQILabel1,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.0,
          },
          {
            label: "2016",
            data: WQILabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1.0,
          },
          {
            label: "2017",
            data: WQILabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1.0,
          },
          {
            label: "2018",
            data: WQILabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.0,
          },
          {
            label: "2019",
            data: WQILabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1.0,
          },
          {
            label: "2020",
            data: WQILabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1.0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
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
  DrawChart1();

  async function DrawChart2() {
    const ctx = document.getElementById(id2).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2015",
            data: tempLabel1,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.0,
          },
          {
            label: "2016",
            data: tempLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1.0,
          },
          {
            label: "2017",
            data: tempLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1.0,
          },
          {
            label: "2018",
            data: tempLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.0,
          },
          {
            label: "2019",
            data: tempLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1.0,
          },
          {
            label: "2020",
            data: tempLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1.0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Temperature(°C)",
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
  DrawChart2();
  async function DrawChart3() {
    const ctx = document.getElementById(id3).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2015",
            data: turbLabel1,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.0,
          },
          {
            label: "2016",
            data: turbLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1.0,
          },
          {
            label: "2017",
            data: turbLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1.0,
          },
          {
            label: "2018",
            data: turbLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.0,
          },
          {
            label: "2019",
            data: turbLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1.0,
          },
          {
            label: "2020",
            data: turbLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1.0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Turbidity(NTU)",
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
  DrawChart3();
  async function DrawChart4() {
    const ctx = document.getElementById(id4).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2015",
            data: pHLabel1,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.0,
          },
          {
            label: "2016",
            data: pHLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1.0,
          },
          {
            label: "2017",
            data: pHLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1.0,
          },
          {
            label: "2018",
            data: pHLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.0,
          },
          {
            label: "2019",
            data: pHLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1.0,
          },
          {
            label: "2020",
            data: pHLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1.0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "pH",
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
  DrawChart4();
  async function DrawChart5() {
    const ctx = document.getElementById(id5).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2015",
            data: DOLabel1,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.0,
          },
          {
            label: "2016",
            data: DOLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1.0,
          },
          {
            label: "2017",
            data: DOLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1.0,
          },
          {
            label: "2018",
            data: DOLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.0,
          },
          {
            label: "2019",
            data: DOLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1.0,
          },
          {
            label: "2020",
            data: DOLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1.0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Dissolved Oxygen(mg/l)",
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
  DrawChart5();
  async function DrawChart6() {
    const ctx = document.getElementById(id6).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2015",
            data: TDSLabel1,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.0,
          },
          {
            label: "2016",
            data: TDSLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1.0,
          },
          {
            label: "2017",
            data: TDSLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1.0,
          },
          {
            label: "2018",
            data: TDSLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.0,
          },
          {
            label: "2019",
            data: TDSLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1.0,
          },
          {
            label: "2020",
            data: TDSLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1.0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Total Dissloved Solids(mg/l)",
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

  DrawChart6();
}
ChartIt(
  "dashboard/Summer_Datasets/Summer_2015.csv",
  "dashboard/Summer_Datasets/Summer_2016.csv",
  "dashboard/Summer_Datasets/Summer_2017.csv",
  "dashboard/Summer_Datasets/Summer_2018.csv",
  "dashboard/Summer_Datasets/Summer_2019.csv",
  "dashboard/Summer_Datasets/Summer_2020.csv",
  "WQI_Summer",
  "temp_Summer",
  "turb_Summer",
  "ph_Summer",
  "DO_Summer",
  "DS_Summer"
);

ChartIt(
  "dashboard/Winter_Datasets/Winter_2015.csv",
  "dashboard/Winter_Datasets/Winter_2016.csv",
  "dashboard/Winter_Datasets/Winter_2017.csv",
  "dashboard/Winter_Datasets/Winter_2018.csv",
  "dashboard/Winter_Datasets/Winter_2019.csv",
  "dashboard/Winter_Datasets/Winter_2020.csv",
  "WQI_Winter",
  "temp_Winter",
  "turb_Winter",
  "ph_Winter",
  "DO_Winter",
  "DS_Winter"
);
