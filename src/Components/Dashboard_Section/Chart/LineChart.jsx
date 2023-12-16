import ReactApexChart from "react-apexcharts";

const SmoothLineChart = () => {
  const options = {
    chart: {
      type: "area",
      height: 350,
      width: `100%`,
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
      curve: "smooth", // Kurva yang mulus
      colors: ["#FF764C"],
      width: 2.5,
    },
    series: [
      {
        name: "car statistics",
        data: [10, 30, 35, 90, 80, 55, 45, 40, 30, 70, 56, 41],
      },
    ],
    fill: {
      colors: ["#FF764C"],
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: [
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
        "6 PM",
        "7 PM",
        "8 PM",
        "9 PM",
        "10 PM",
        "11 PM",
        "12 PM",
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
        color: "#FF764C",
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
        right: 0,
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
        width={options.chart.width}
      />
    </div>
  );
};

export default SmoothLineChart;
