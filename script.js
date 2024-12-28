import * as d3 from "https://esm.sh/d3";

const numToWord = (n) => {
  switch (n) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const url =
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const dataset = data.monthlyVariance;
      const baseTemp = data.baseTemperature;
      const w = 800;
      const h = 500;
      const padding = 60;

      const xScale = d3
        .scaleLinear()
        .domain([
          d3.min(dataset, (d) => d.year),
          d3.max(dataset, (d) => d.year),
        ])
        .range([padding, w - padding]);

      const yScale = d3
        .scaleBand()
        .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
        .range([h - padding, padding])
        .padding(0.1);

      const svg = d3
        .select("div")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
      svg
        .append("text")
        .attr("x", w / 2)
        .attr("y", padding / 2)
        .attr("font-size", "30px")
        .attr("text-anchor", "middle")
        .attr("id", "title")
        .text("Monthly Global Land-Surface Temperature");
      svg
        .append("text")
        .attr("x", w / 2)
        .attr("y", padding / 2 + 27)
        .attr("font-size", "21px")
        .attr("text-anchor", "middle")
        .text(`base temperature: ${baseTemp}°C`);
      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("data-month", (d) => numToWord(d.month))
        .attr("data-year", (d) => d.year)
        .attr("data-temp", (d) => baseTemp + d.variance)
        .attr("fill", (d) => {
          const temp = baseTemp + d.variance;
          if (temp < 3.9) return "rgb(69, 117, 181)";
          else if (temp < 5.0) return "rgb(117, 174, 209)";
          else if (temp < 6.1) return "rgb(169, 216, 232)";
          else if (temp < 7.2) return "rgb(223, 242, 247)";
          else if (temp < 8.3) return "rgb(255, 255, 191)";
          else if (temp < 9.5) return "rgb(255, 226, 145)";
          else if (temp < 10.6) return "rgb(252, 174, 96)";
          else if (temp < 11.7) return "rgb(245, 108, 66)";
          else return "rgb(214, 47, 39)";
        })
        .attr(
          "width",
          (w - 2 * padding) /
            (d3.max(dataset, (d) => d.year) - d3.min(dataset, (d) => d.year))
        )
        .attr("height", yScale.bandwidth())
        .attr("x", (d) => xScale(d.year))
        .attr("y", (d) => yScale(d.month))
        .append("title")
        .text(
          (d) =>
            `${d.year} - ${numToWord(d.month)}\n${baseTemp + d.variance}°C\n${
              d.variance
            }°C`
        );
      const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
      const yAxis = d3.axisLeft(yScale).tickFormat(numToWord);

      svg
        .append("g")
        .attr("transform", `translate(0, ${h - padding})`)
        .call(xAxis);

      svg.append("g").attr("transform", `translate(${padding}, 0)`).call(yAxis);
    });
});
