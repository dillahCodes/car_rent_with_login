import ReactApexChart from "react-apexcharts";

export const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 360,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "last",
        columnWidth: "28px",
        barHeight: "90%",
        isFunnel3d: true,
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
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
        "12 AM",
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
    fill: {
      opacity: 0.5,
      colors: "#2884FF",
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + " miles";
        },
      },
    },
    legend: {
      show: true,
    },
    grid: {
      show: true,
      borderColor: "#F2F2F2",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true,
          opacity: 1,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  const series = [
    {
      name: "Day",
      data: [100, 150, 300, 200, 900, 400, 900, 500, 788, 300, 500, 700],
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type={options.chart.type}
        height={options.chart.height}
      />
    </div>
  );
};
