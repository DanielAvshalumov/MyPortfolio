var data = [
  {name: "USA", value: 40},
  {name: "UK", value: 20},
  {name: "Canada", value: 30},
  {name: "Mexico", value: 10},
  {name: "Russia", value: 15}
];

const notesDiv = document.getElementById('reqs');
console.log(notesDiv);
data.map(item => {
    let element = document.createElement('h2');
    element.innerText = item.name;
    element.append(" - ",item.value)
    notesDiv.append(element);
})

drawChart();

function drawChart() {
    var text = "";

    var width = 260;
    var height = 260;
    var thickness = 40;
    var duration = 750;
    
    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    
    var svg = d3.select("#chart")
    .append('svg')
    .attr('class', 'pie')
    .attr('width', width)
    .attr('height', height);
    
    var g = svg.append('g')
    .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
    
    var arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius);
    
    var pie = d3.pie()
    .value(function(d) { return d.value; })
    .sort(null);
    
    var path = g.selectAll('path')
    .data(pie(data))
    .enter()
    .append("g")
    
      .append('path')
      .attr('d', arc)
      .attr('fill', (d,i) => color(i))
      .on("mouseover", function(d) {
          d3.select(this)     
            .style("cursor", "pointer")
            .style("fill", "black");
        })
      .on("mouseout", function(d) {
          d3.select(this)
            .style("cursor", "none")  
            .style("fill", color(this._current));
        })
      .each(function(d, i) { this._current = i; });
    
    
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(text);
}