import '../css/statistics.css';
import { useEffect } from "react";

function GoogleBarChart() {

    useEffect(() => {
        // 1. Load script
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.type = "text/javascript";
        script.onload = () => {
            // 2. After script loads, load google charts
            window.google.charts.load("current", { packages: ["corechart"] });
            window.google.charts.setOnLoadCallback(drawChart);
        };

        document.head.appendChild(script);

        // 3. Draw chart function
        function drawChart() {
            const data = window.google.visualization.arrayToDataTable([
                ["Country", "Mhl"],
                ["Home3", 55],
                ["School", 49],
                ["Personal", 44]
            ]);

            const options = {
                title: "accessing self performance",
            };

            const chart = new window.google.visualization.BarChart(
                document.getElementById("myChart")
            );

            chart.draw(data, options);
        }
    }, []);

    return (
        <div className='stats'>
            <div id="myChart" className='myChart'></div>
        </div>
    );
}

export default GoogleBarChart;
