'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataPoint {
	x: number;
	y: number;
}

interface Props {
	data: DataPoint[];
	width: number;
	height: number;
}

const D3Graph: React.FC<Props> = ({ data, width, height }) => {
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const svg = d3.select(svgRef.current);
		svg.selectAll('*').remove(); // Clear previous contents

		const xScale = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.x) || 0])
			.range([0, width]);

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.y) || 0])
			.range([height, 0]);

		svg
			.selectAll('circle')
			.data(data)
			.enter()
			.append('circle')
			.attr('cx', (d) => xScale(d.x))
			.attr('cy', (d) => yScale(d.y))
			.attr('r', 5)
			.attr('fill', 'steelblue');
	}, [data, height, width]);

	return <svg width={width} height={height} ref={svgRef}></svg>;
};

export default D3Graph;
