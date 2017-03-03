
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


        d3Service.d3().then(function(d3) {
            // set a width and height for our SVG
            var width = 1000,
                height = 500;

            // setup links
            var links = [
                { source: 'Baratheon', target:'Lannister' },
                { source: 'Baratheon', target:'Stark' },
                { source: 'Lannister', target:'Stark' },
                { source: 'Stark', target:'Bolton' },
            ];

              
            // create empty nodes array
            var nodes = {};
            
            // compute nodes from links data
            links.forEach(function(link) {
                link.source = nodes[link.source] ||
                    (nodes[link.source] = {name: link.source});
                link.target = nodes[link.target] ||
                    (nodes[link.target] = {name: link.target});        
            });


            // add a SVG to the body for our viz
            var svg=d3.select("#graph").append('svg')
                .attr('width', "100%")
                .attr('height', 600);

            // use the force
            var force = d3.layout.force()
                .size([width, height])
                .nodes(d3.values(nodes))
                .links(links)
                .on("tick", tick)
                .linkDistance(300)
                .start();

            // add links
            var link = svg.selectAll('.link')
                .data(links)
                .enter().append('line')
                .attr('class', 'link'); 

            // add nodes
            var node = svg.selectAll('.node')
                .data(force.nodes())
                .enter().append('circle')
                .attr('class', 'node')
                .attr('r', width * 0.03);
            


            // what to do 
            function tick(e) {
                
                node.attr('cx', function(d) { return d.x; })
                    .attr('cy', function(d) { return d.y; })
                    .call(force.drag);
                    
                link.attr('x1', function(d) { return d.source.x; })
                    .attr('y1', function(d) { return d.source.y; })
                    .attr('x2', function(d) { return d.target.x; })
                    .attr('y2', function(d) { return d.target.y; });
                
            }
            console.log("in here at least ")





        });
      }
    };
  }]);


  

};