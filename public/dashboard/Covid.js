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

async function ChartIt(id1, id2, id3, id4, id5, id6) {
  let response1 = await fetch("dashboard/Covid_Datasets/Covid19.csv");
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

  let response2 = await fetch("dashboard/Covid_Datasets/Covid20.csv");
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

  async function DrawChart1() {
    const ctx = document.getElementById(id1).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2019",
            data: WQILabel1,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.5,
          },
          {
            label: "2020",
            data: WQILabel2,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.5,
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
  DrawChart1();

  async function DrawChart2() {
    const ctx = document.getElementById(id2).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2019",
            data: tempLabel1,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.5,
          },
          {
            label: "2020",
            data: tempLabel2,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.5,
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
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2019",
            data: turbLabel1,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.5,
          },
          {
            label: "2020",
            data: turbLabel2,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.5,
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
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2019",
            data: pHLabel1,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.5,
          },
          {
            label: "2020",
            data: pHLabel2,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.5,
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
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2019",
            data: DOLabel1,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.5,
          },
          {
            label: "2020",
            data: DOLabel2,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.5,
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
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2019",
            data: TDSLabel1,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1.5,
          },
          {
            label: "2020",
            data: TDSLabel2,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1.5,
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
  "WQI-chart",
  "Temperature-chart",
  "Tubidity-chart",
  "pH-chart",
  "DO-chart",
  "DS-chart"
);
