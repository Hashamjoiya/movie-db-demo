import React, { useEffect } from 'react';

import * as d3 from 'd3';

const data = [
    { country: 'United States', value: 12394 },
    { country: 'Russia', value: 6148 },
    { country: 'Germany (FRG)', value: 1653 },
    { country: 'France', value: 2162 },
    { country: 'United Kingdom', value: 1214 },
    { country: 'China', value: 1131 },
    { country: 'Spain', value: 814 },
    { country: 'Netherlands', value: 1167 },
    { country: 'Italy', value: 660 },
    { country: 'Israel', value: 1263 }
]

export function BarChart(props: { data: any, showVotes?: boolean }) {
    let svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>

    const getMaXLabel = (data: any[]) => {
        return Math.floor((Math.max(...props.data.map((e: { votes: number }) => e.votes))) * 1.1)
    }

    useEffect(() => {
        if (!svg && props.data) {
            // set the dimensions and margins of the graph
            const margin = { top: 30, right: 30, bottom: 70, left: 60 },
                width = 390 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            // append the svg object to the body of the page
            svg = d3.select("#bar-chart-1")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");


            // X axis
            const x = d3.scaleBand()
                .range([0, width])
                .domain((props.data).map(function (d: any) { return d.title }))
                .padding(0.2);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");

            // Add Y axis
            const y = d3.scaleLinear()
                .domain([0, props.showVotes ? getMaXLabel(props.data) : 10])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));

            // Bars
            svg.selectAll("mybar")
                .data(props.data)
                .enter()
                .append("rect")
                .attr("x", (function (d: any) { return x(d.title); } as any))
                .attr("y", function (d: any) { return y(props.showVotes ? d.votes : d.rating); })
                .attr("width", x.bandwidth())
                .attr("height", function (d: any) { return height - y(props.showVotes ? d.votes : d.rating); })
                .attr("fill", "#69b3a2");
        }
    }, [])


    return (

        <div className='mx-auto' id="bar-chart-1"></div>

    );

}