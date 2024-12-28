# D3 Heat Map

This project visualizes global monthly temperature variations over time using a heat map. The project uses **D3.js** to create an interactive, color-coded heat map.

## Features

- **Interactive Heat Map**: Each rectangle represents a month's temperature variance for a specific year.
- **Dynamic Color Coding**: Temperature ranges are color-coded to provide a clear visual representation of trends.
- **Axes**: Scalable X-axis for years and Y-axis for months, providing intuitive navigation of the data.
- **Tooltips**: Hovering over a rectangle reveals detailed information about the year, month, base temperature, and variance.

## Technologies Used

- **D3.js**: For rendering the heat map and managing interactive data visualization.
- **JavaScript (ES6)**: For data processing and DOM interaction.
- **HTML5**: For structuring the page and integrating the visualization.

## Getting Started

### Prerequisites

- **Web Browser**: Any modern browser (e.g., Chrome, Firefox, Edge, Safari).
- **Text Editor/IDE**: Optional, for editing the project files.

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/abelgideon/D3-Heat-Map.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd D3-Heat-Map
   ```
3. Open the `index.html` file in your browser to view the heat map.
4. Alternatively, you can access the live site [here](https://abelgideon.github.io/D3-Heat-Map/).

## Usage

1. Hover over a rectangle to view detailed information about the year, month, base temperature, and variance.
2. The X-axis represents the year, while the Y-axis represents the month.
3. The color of each rectangle indicates the temperature variance, with a gradient from cool to warm tones.

## Customizing the Heat Map

You can modify the following parameters in `script.js` to customize the heat map:

- **Width and Height**: Adjust the `w` and `h` variables to resize the chart.
- **Padding**: Change the `padding` value to alter the spacing around the chart.
- **Color Scale**: Customize the `fill` function to adjust the color thresholds and gradients.

## Project Highlights

### Interactive Tooltips

- Tooltips display the year, month, base temperature, and variance when hovering over a rectangle.

### Scalable Axes

- The X-axis is dynamically scaled to fit the range of years in the dataset.
- The Y-axis represents months and is labeled with their respective names for better readability.

### Dynamic Color Coding

- Temperature ranges are mapped to a gradient of colors, making it easy to spot patterns and anomalies in the data.

### Data Handling

- Data is fetched from a remote JSON file hosted on GitHub, ensuring accurate and up-to-date visualization.

## File Structure

- `index.html`: The main HTML file that includes the script and renders the chart.
- `script.js`: Contains the JavaScript code for creating the heat map and adding interactivity.
- `styles.css`: (Optional) Add custom styles to enhance the chart's appearance.

## Contributing

Contributions are welcome! Fork the repository and submit a Pull Request with your improvements.