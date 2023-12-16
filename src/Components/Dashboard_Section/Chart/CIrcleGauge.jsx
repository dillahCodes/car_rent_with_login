import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types"; // ES6

const StrokedGauge = (props) => {
  const { initialValue, valueColor, chartBgColor, chartMainBgColor } = props;
  const data = {
    series: [initialValue],
    options: {
      chart: {
        height: 190,
        type: "radialBar",
        toolbar: {
          show: false, // tombol untuk mmendowload data ke jpg,csv dan lainnya
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -130,
          endAngle: 130,
          hollow: {
            margin: 0,
            size: "70%",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: false,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.1,
            },
          },
          track: {
            background: `${chartBgColor}`,
            strokeWidth: "100%",
            margin: 0,
            dropShadow: {
              color: "rgba(0, 0, 0, 0.5)",
              enabled: false,
              top: 0,
              left: 0,
              blur: 10,
              opacity: 0.1,
            },
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: false,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val) + "%";
              },
              offsetY: 10,
              color: `${valueColor}`,
              fontSize: "24px",
              fontWeight: 700,
              show: true,
            },
          },
          states: {
            hover: [false],
            select: [false],
          },
        },
      },

      // disable hover
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },

      fill: {
        colors: [`${chartMainBgColor}`],
      },
      stroke: {
        lineCap: "round", // untuk mengatur tumpul nya
      },
      labels: [""], // label
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="radialBar"
        height={data.options.chart.height}
      />
    </div>
  );
};

StrokedGauge.propTypes = {
  initialValue: PropTypes.number,
  valueColor: PropTypes.string,
  chartBgColor: PropTypes.string,
  chartMainBgColor: PropTypes.string,
};

export default StrokedGauge;
