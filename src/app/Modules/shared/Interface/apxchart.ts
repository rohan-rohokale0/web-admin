export const ChartConfig = {
    series: [
              {
                  name: "Below threshold",
                  data: [20, 30, 5, 4]
              },
              {
                  name: "Above threshold",
                  data: [20, 20, 10, 5]
              }
          ],
          chart: {
              type: "bar",
              stacked: true,
              height: 500,
              width: 500,
              toolbar: {
                  show: false
              },
          },
          plotOptions: {
              bar: {
                  horizontal: true,
                  columnWidth: "25%",
                  barHeight: "35%",
                  dataLabels: {
                      position: "top"
                  }
              }
          },
          xaxis: {
              type: "category",
              categories: ["Category 1", "Category 2", "Category 3", "Category 4"]
          },
  }