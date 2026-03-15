# gamemap

A web-based map application that displays information about programming projects created by elementary school students in Fukui, Japan.

## Demo
https://code4fukui.github.io/gamemap/

## Features
- Displays a map of Fukui prefecture with markers for each student project
- Markers show the project name and school information on hover
- Uses open-source Leaflet.js library for mapping functionality
- Integrates data from a CSV file containing project details

## Requirements
No special requirements. The application runs in a web browser.

## Usage
1. Open the project webpage at https://code4fukui.github.io/gamemap/
2. The map will display with markers for each student project
3. Hover over a marker to see the project name and school information

## Data / API
The project data is stored in a CSV file (`works-fukui2020.csv`) and a position data file (`positions.csv`). These files are fetched and processed by the JavaScript code to populate the map.

## License
This project is licensed under the MIT License.