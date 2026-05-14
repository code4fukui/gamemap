# gamemap

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web-based map application that visualizes programming projects created by elementary school students for the 2020 Fukui preliminary of the National Elementary School Programming Competition.

## Demo

**[https://code4fukui.github.io/gamemap/](https://code4fukui.github.io/gamemap/)**

The demo shows an interactive map of Fukui Prefecture populated with colorful pin markers. Hovering over a pin reveals the project title, and clicking it shows a popup with details.

## Features

-   **Interactive Map**: Displays student projects on a map of Fukui using map tiles from the [Geospatial Information Authority of Japan (GSI)](https://maps.gsi.go.jp/).
-   **Project Details**: Hovering over a marker shows the project title. Clicking a marker opens a popup with the title(s) of projects from that location.
-   **Data-Driven**: Populates the map by fetching and joining data from two separate CSV files.
-   **Reusable Web Component**: The map is implemented as a `<map-gsi-csv>` custom HTML element, making it easy to embed elsewhere.
-   **Custom Icons**: Uses unique, colorful pin icons for map markers.

## Technology Stack

-   **Mapping Library**: [Leaflet.js](https://leafletjs.com/)
-   **Map Tiles**: [Geospatial Information Authority of Japan (GSI) Tiles](https://maps.gsi.go.jp/development/ichiran.html)
-   **Core Logic**: Vanilla JavaScript (ES Modules), implemented as a Web Component.

## Usage

The map is implemented as a `<map-gsi-csv>` web component. To use it, include the script and add the element to your HTML, configuring the data sources with attributes.

**Example from `index.html`:**

```html
<!-- Include the component's JavaScript module -->
<script type="module" src="./map-gsi-csv.js"></script>

<!-- Use the custom element in your HTML -->
<map-gsi-csv 
    src="works-fukui2020.csv" 
    title-name="作品名" 
    pos-src="positions.csv" 
    pos-name="所属">
</map-gsi-csv>
```

### Component Attributes

-   `src`: Path to the main data CSV file (e.g., project details).
-   `title-name`: The column name in the `src` file to use for the marker title/popup.
-   `pos-src`: Path to the position data CSV file (containing latitude/longitude).
-   `pos-name`: The column name used as a key to join the `src` and `pos-src` files.

## Data Sources

The application uses two CSV files to populate the map:

-   [`works-fukui2020.csv`](works-fukui2020.csv): Contains details about each student's project, including the project name (`作品名`) and their school/club affiliation (`所属`).
-   [`positions.csv`](positions.csv): Maps the school/club affiliation name (`schema:name`) to its geographic coordinates (`schema:latitude`, `schema:longitude`).

## Acknowledgements

-   **App Concept**: [福井県のプログラミング好き小学生が考えた「もっと好きになる わたしのまち」とは!?](https://fukuno.jig.jp/3049)
-   **Data**: [福井県大会 | 全国選抜小学生プログラミング大会](https://zsjk.jp/fukui/)
-   **Pin Icon Design**: [by asuka](https://fukuno.jig.jp/3049)

## License

This project is available under the [MIT License](LICENSE).