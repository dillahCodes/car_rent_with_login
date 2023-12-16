import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      type: "area",
      height: 300,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#A162F7"],
      width: 2.5,
    },
    series: [
      {
        name: "activities",
        data: [10, 30, 35, 90, 80, 55, 45, 40, 30, 70, 56, 41],
      },
    ],
    fill: {
      colors: ["#8668E1"],
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "km";
        },
      },
    },
    xaxis: {
      categories: [
        "01-11-2021",
        "02-11-2021",
        "03-11-2021",
        "04-11-2021",
        "05-11-2021",
        "06-11-2021",
        "07-11-2021",
        "08-11-2021",
        "09-11-2021",
        "10-11-2021",
        "11-11-2021",
        "12-11-2021",
      ],
      labels: {
        show: true,
        style: {
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      show: false,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#A162F7",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    grid: {
      show: true,
      borderColor: "#F2F2F2",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
          opacity: 1,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: -30,
        bottom: 0,
        left: 0,
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={options.series}
        type={options.chart.type}
        height={options.chart.height}
      />
    </div>
  );
};

export default LineChart;
