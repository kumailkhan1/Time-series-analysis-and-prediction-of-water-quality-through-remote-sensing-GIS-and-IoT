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

const tempLabel7 = [];
const turbLabel7 = [];
const pHLabel7 = [];
const DOLabel7 = [];
const TDSLabel7 = [];
const WQILabel7 = [];

const tempLabel8 = [];
const turbLabel8 = [];
const pHLabel8 = [];
const DOLabel8 = [];
const TDSLabel8 = [];
const WQILabel8 = [];

async function ChartIt(id1, id2, id3, id4, id5, id6) {
  let response1 = await fetch("dashboard/Yearly_Datasets/Yearly2013.csv");
  const data1 = await response1.text();
  const table1 = data1.split("\n").slice(1);

  async function getData1() {
    table1.forEach((row) => {
      const columns = row.split(",");
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

  let response2 = await fetch("dashboard/Yearly_Datasets/Yearly2014.csv");
  const data2 = await response2.text();
  const table2 = data2.split("\n").slice(1);

  async function getData2() {
    table2.forEach((row) => {
      const columns = row.split(",");
      const date = columns[0];
      xlabel.push(date);
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

  let response3 = await fetch("dashboard/Yearly_Datasets/Yearly2015.csv");
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

  let response4 = await fetch("dashboard/Yearly_Datasets/Yearly2016.csv");
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

  let response5 = await fetch("dashboard/Yearly_Datasets/Yearly2017.csv");
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

  let response6 = await fetch("dashboard/Yearly_Datasets/Yearly2018.csv");
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
  let response7 = await fetch("dashboard/Yearly_Datasets/Yearly2019.csv");
  const data7 = await response7.text();
  const table7 = data7.split("\n").slice(1);

  async function getData7() {
    table7.forEach((row) => {
      const columns = row.split(",");
      const temp = columns[1];
      tempLabel7.push(temp);
      const turb = columns[2];
      turbLabel7.push(turb);
      const pH = columns[3];
      pHLabel7.push(pH);
      const DO = columns[4];
      DOLabel7.push(DO);
      const TDS = columns[5];
      TDSLabel7.push(TDS);
      const WQI = columns[6];
      WQILabel7.push(WQI);
    });
  }

  let response8 = await fetch("dashboard/Yearly_Datasets/Yearly2020.csv");
  const data8 = await response8.text();
  const table8 = data8.split("\n").slice(1);

  async function getData8() {
    table8.forEach((row) => {
      const columns = row.split(",");
      const temp = columns[1];
      tempLabel8.push(temp);
      const turb = columns[2];
      turbLabel8.push(turb);
      const pH = columns[3];
      pHLabel8.push(pH);
      const DO = columns[4];
      DOLabel8.push(DO);
      const TDS = columns[5];
      TDSLabel8.push(TDS);
      const WQI = columns[6];
      WQILabel8.push(WQI);
    });
  }

  getData1();
  getData2();
  getData3();
  getData4();
  getData5();
  getData6();
  getData7();
  getData8();

  async function DrawChart1() {
    const ctx = document.getElementById(id1).getContext("2d");
    const myChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "2013",
            data: WQILabel1,
            borderColor: "black",
            backgroundColor: "black",
            borderWidth: 1,
          },
          {
            label: "2014",
            data: WQILabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1,
          },
          {
            label: "2015",
            data: WQILabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1,
          },
          {
            label: "2016",
            data: WQILabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1,
          },
          {
            label: "2017",
            data: WQILabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1,
          },
          {
            label: "2018",
            data: WQILabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1,
          },
          {
            label: "2019",
            data: WQILabel7,
            borderColor: "yellow",
            backgroundColor: "yellow",
            borderWidth: 1,
          },
          {
            label: "2020",
            data: WQILabel8,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1,
          },
        ],
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
            label: "2013",
            data: tempLabel1,
            borderColor: "black",
            backgroundColor: "black",
            borderWidth: 1,
          },
          {
            label: "2014",
            data: tempLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1,
          },
          {
            label: "2015",
            data: tempLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1,
          },
          {
            label: "2016",
            data: tempLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1,
          },
          {
            label: "2017",
            data: tempLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1,
          },
          {
            label: "2018",
            data: tempLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1,
          },
          {
            label: "2019",
            data: tempLabel7,
            borderColor: "yellow",
            backgroundColor: "yellow",
            borderWidth: 1,
          },
          {
            label: "2020",
            data: tempLabel8,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1,
          },
        ],
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
            label: "2013",
            data: turbLabel1,
            borderColor: "black",
            backgroundColor: "black",
            borderWidth: 1,
          },
          {
            label: "2014",
            data: turbLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1,
          },
          {
            label: "2015",
            data: turbLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1,
          },
          {
            label: "2016",
            data: turbLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1,
          },
          {
            label: "2017",
            data: turbLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1,
          },
          {
            label: "2018",
            data: turbLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1,
          },
          {
            label: "2019",
            data: turbLabel7,
            borderColor: "yellow",
            backgroundColor: "yellow",
            borderWidth: 1,
          },
          {
            label: "2020",
            data: turbLabel8,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1,
          },
        ],
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
            label: "2013",
            data: pHLabel1,
            borderColor: "black",
            backgroundColor: "black",
            borderWidth: 1,
          },
          {
            label: "2014",
            data: pHLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1,
          },
          {
            label: "2015",
            data: pHLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1,
          },
          {
            label: "2016",
            data: pHLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1,
          },
          {
            label: "2017",
            data: pHLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1,
          },
          {
            label: "2018",
            data: pHLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1,
          },
          {
            label: "2019",
            data: pHLabel7,
            borderColor: "yellow",
            backgroundColor: "yellow",
            borderWidth: 1,
          },
          {
            label: "2020",
            data: pHLabel8,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1,
          },
        ],
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
            label: "2013",
            data: DOLabel1,
            borderColor: "black",
            backgroundColor: "black",
            borderWidth: 1,
          },
          {
            label: "2014",
            data: DOLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1,
          },
          {
            label: "2015",
            data: DOLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1,
          },
          {
            label: "2016",
            data: DOLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1,
          },
          {
            label: "2017",
            data: DOLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1,
          },
          {
            label: "2018",
            data: DOLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1,
          },
          {
            label: "2019",
            data: DOLabel7,
            borderColor: "yellow",
            backgroundColor: "yellow",
            borderWidth: 1,
          },
          {
            label: "2020",
            data: DOLabel8,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1,
          },
        ],
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
            label: "2013",
            data: TDSLabel1,
            borderColor: "black",
            backgroundColor: "black",
            borderWidth: 1,
          },
          {
            label: "2014",
            data: TDSLabel2,
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1,
          },
          {
            label: "2015",
            data: TDSLabel3,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 1,
          },
          {
            label: "2016",
            data: TDSLabel4,
            borderColor: "purple",
            backgroundColor: "purple",
            borderWidth: 1,
          },
          {
            label: "2017",
            data: TDSLabel5,
            borderColor: "green",
            backgroundColor: "green",
            borderWidth: 1,
          },
          {
            label: "2018",
            data: TDSLabel6,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1,
          },
          {
            label: "2019",
            data: TDSLabel7,
            borderColor: "yellow",
            backgroundColor: "yellow",
            borderWidth: 1,
          },
          {
            label: "2020",
            data: TDSLabel8,
            borderColor: "#e75480",
            backgroundColor: "#e75480",
            borderWidth: 1,
          },
        ],
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
