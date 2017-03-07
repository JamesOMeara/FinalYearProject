
module.exports = function(app) {
 
  app.directive('forceGraphDirective', [ "d3Service", function (d3Service) {
    return {
      controller: 'navController' ,
      restrict: 'EA',
      replace: true,
      scope: {

      },
      templateUrl: './app/client/src/directives/templates/forceGraphTemplate.ejs',
      link: function(scope, element, attrs) {


        var groups= {
            Highlevel: "blue",
            t1: "red",
            t2: 'red'
        };

        var sizes = {
            large: 15,
            medium: 10,
            small: 5
        }

        d3Service.d3().then(function(d3) {

            var elements = {
                'singlePage': {
                    name: 'Single Page Web App',
                    group: 'red',
                    size: sizes.large,
                    desc: "A simple single Webpage with no redirects etc.."
                },
                'angular': {
                    name: 'Angular',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Strong clientSide framework for responsive apps"
                },
                'node': {
                    name: 'Node',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Server side javascript framework"
                },
                 'javascript': {
                    name: 'Javascript',
                    group: 'orange',
                    size: sizes.medium,
                    desc: "Programming language"
                },
                 'client': {
                    name: 'Client',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                 'server': {
                    name: 'Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                 'componments': {
                    name: 'Componments',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'directive': {
                    name: 'Directive',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'service': {
                    name: 'Service',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'filter': {
                    name: 'Filter',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'factory': {
                    name: 'Factory',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'processes': {
                    name: 'Processes',
                    group: 'red',
                    size: sizes.large,
                    desc: ""
                },
                'development': {
                    name: 'Development',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'testing': {
                    name: 'Testing',
                    group: 'red',
                    size: sizes.medium,
                    desc: ""
                },
                'building': {
                    name: 'Building',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'deployment': {
                    name: 'Deployment',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'ci': {
                    name: 'Continous Integration',
                    group: 'red',
                    size: sizes.medium,
                    desc: ""
                },
                'tools': {
                    name: 'Tools',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'buildserver': {
                    name: 'Build Server',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'jenkins': {
                    name: 'Jenkins',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'clientTesting': {
                    name: 'Client Side',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'serverTesting': {
                    name: 'Server Side',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'karma': {
                    name: 'Karma',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'testRunner': {
                    name: 'Test Runner',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'taskRunner': {
                    name: 'Task Runner',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },
                'grunt': {
                    name: 'Grunt',
                    group: 'grey',
                    size: sizes.medium,
                    desc: ""
                },

               
               
            }
            var links = [
                {source: elements.singlePage        ,target: elements.angular   },
                {source: elements.singlePage        ,target: elements.node   },
                {source: elements.singlePage        ,target: elements.javascript   },
                {source: elements.angular           ,target: elements.client   },
                {source: elements.node              ,target: elements.server   },
                {source: elements.angular           ,target: elements.componments   },
                {source: elements.componments       ,target: elements.directive   },
                {source: elements.componments       ,target: elements.service   },
                {source: elements.componments       ,target: elements.filter   },
                {source: elements.componments       ,target: elements.factory   },

                {source: elements.processes       ,target: elements.development   },
                {source: elements.processes       ,target: elements.testing   },
                {source: elements.processes       ,target: elements.building   },
                {source: elements.processes       ,target: elements.deployment   },
                {source: elements.processes       ,target: elements.tools   },
                {source: elements.ci       ,target: elements.building   },
                {source: elements.ci       ,target: elements.deployment   },

                {source: elements.jenkins       ,target: elements.buildserver   },
                {source: elements.ci       ,target: elements.jenkins   },
                
                {source: elements.testing       ,target: elements.serverTesting   },
                {source: elements.testing       ,target: elements.clientTesting   }, 
                {source: elements.ci       ,target: elements.grunt   },
                {source: elements.ci       ,target: elements.karma   },
                {source: elements.clientTesting       ,target: elements.karma   },
                {source: elements.grunt       ,target: elements.taskRunner   },
                {source: elements.karma       ,target: elements.testRunner   },
                
              
          
            ];

            var nodes = elements
            console.log(nodes)
            console.log(links)
            
            // Compute the distinct nodes from the links.
            // links.forEach(function(link) {
            //     link.source = nodes[link.source.name] || (nodes[link.source.name] = {name: link.source.name, size: link.source.size, color: link.source.group});
            // });
            // links.forEach(function(link) {
            //     link.target = nodes[link.target.name] || (nodes[link.target.name] = {name: link.target.name, size: link.target.size, color: link.target.group});
            // });

            console.log(nodes)
            console.log(links)

            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
                height = 1000;

            var force = d3.layout.force()
                .nodes(d3.values(nodes))
                .links(links)
                .size([width, height/1.5])
                .linkDistance(40)
                .charge(-1000)
                .on("tick", tick)
                .start();


            var svg = d3.select("#graph").append("svg")
                .attr("width", '100%')
                .attr("height", height);


            var link = svg.selectAll(".link")
                .data(force.links())
                .enter().append("line")
                .attr("class", "link");


            var node = svg.selectAll(".node")
                .data(force.nodes())
                .enter().append("g")
                .attr("class", "node")
                .on("mouseover", mouseover)
                .on("mouseout", mouseout)
                .call(force.drag);



            node.append("circle")
                .style('fill', function(d) { return d.group; })
                .attr('r', function(d) { return d.size; });


            node.append("text")
                .attr("x", 12)
                .attr("dy", ".35em")
                .text(function(d) { return d.name; });

            function addDesc(elem) {
                d3.select(elem).append("text").transition()
                    .attr("class", "descText")
                    .attr("x", 12)
                    .attr("dy", "2em")
                    .style("fill", 'black')
                    .text(function(d) { return d.desc; });
                
                bbox = elem.getBBox();
                console.log(bbox)
                
            }


            function tick() {
                link
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                node
                    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
            }

            function mouseover() {
                d3.select(this).append("rect")
                    .attr("class", "transbox")
                d3.select(this).select("circle").transition()
                    .duration(750)
                    .attr("r", 16)
                    .style('fill', 'green')
                d3.select(this).select("text").transition()
                    .duration(750)
                    .style("font", '32px sans-serif')
                    .style("fill", 'green')
                descbox = d3.select(this).append("text").transition()
                    .attr("class", "descText")
                    .attr("x", 12)
                    .attr("dy", "2em")
                    .style("fill", 'black')
                    .text(function(d) { return d.desc; });

                var bbox = descbox.node().getBBox();
                console.log(bbox)

                d3.selectAll(".transbox")
                    .style("fill", 'lightblue')
                    .attr("x", 12)
                    .attr("y", 12)
                    // .attr("width", bbox.width)
                    // .attr("height", bbox.height)
            }

            function mouseout() {
                d3.select(this).select("circle").transition()
                    .duration(750)
                    .attr("r", function(d) { return d.size; })
                    .style('fill', function(d) { return d.group; })
                d3.select(this).select("text").transition()
                    .duration(750)
                    .style("font", '16px sans-serif')
                    .style("fill", 'black')
                d3.selectAll(".descText").remove()
                d3.selectAll(".transbox").remove()
                
                    
            }




        });
      }
    };
  }]);


  

};