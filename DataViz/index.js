let data = [
  {name: "Unites States", value: 40},
  {name: "Italy", value: 30},
  {name: "UK", value: 20},
  {name: "Russia", value: 15},
  {name: "Mexico", value: 10},
];

const notesDiv = document.getElementById('reqs');
console.log(notesDiv);
data.map(item => {
    let element = document.createElement('h2');
    element.innerText = item.name;
    element.append(" - ",item.value)
    notesDiv.append(element);
})

drawDonoughtChart();
drawBarChart();

function drawDonoughtChart() {
    let text = "";

    let width = 260;
    let height = 260;
    let thickness = 40;
    let duration = 750;
    
    let radius = Math.min(width, height) / 2;
    let color = d3.scaleOrdinal(d3.schemeCategory10);
    
    let svg = d3.select("#chart")
    .append('svg')
    .attr('class', 'pie')
    .attr('width', width)
    .attr('height', height);
    
    let g = svg.append('g')
    .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
    
    let arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius);
    
    let pie = d3.pie()
    .value(function(d) { return d.value; })
    .sort(null);
    
    let path = g.selectAll('path')
    .data(pie(data))
    .enter()
    .append("g")
    .append('path')
    .attr('d', arc)
    .attr('fill', (d,i) => color(i))
    .each(function(d, i) { this._current = i; });
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(text);
}

function drawBarChart() {
    let data = {
        "Stack Overflow": 30,
        "Youtube"  : 44,
        "Github"  : 64,
        "Reddit" : 17,
        "CrunchyRoll"   : 19
    };
    let margin = {top: 20, right: 20, bottom: 30, left: 40};
    let svgWidth = 720, svgHeight = 300;
    let height = svgHeight- margin.top- margin.bottom, width = svgWidth - margin.left - margin.right;
    let sourceNames = [];
    let sourceCount = [];
    
    let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);
    for(let key in data){
        if(data.hasOwnProperty(key)){
            sourceNames.push(key);
            sourceCount.push(parseInt(data[key]));
        }
    }
    x.domain(sourceNames);
    y.domain([0, d3.max(sourceCount, function(d) { return d; })]);
    
    let svg = d3.select("#bar-graph").append("svg");
    svg.attr('height', svgHeight)
        .attr('width', svgWidth);
    
    svg = svg.append("g")
             .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    svg.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(5))
        ;
            
    let bars = svg.selectAll('.bar')
        .data(sourceNames)
        .enter()
        .append("g");
    
    bars.append('rect')
        .attr('class', 'bar')
        .attr("x", function(d) { return x(d); })
        .attr("y", function(d) { return y(data[d]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(data[d]); });
        
    bars.append("text")
        .text(function(d) { 
            return data[d];
        })
        .attr("x", function(d){
            return x(d) + x.bandwidth()/2;
        })
        .attr("y", function(d){
            return y(data[d]) - 5;
        })
        .attr("font-family" , "sans-serif")
        .attr("font-size" , "14px")
        .attr("fill" , "black")
        .attr("text-anchor", "middle");
        
}