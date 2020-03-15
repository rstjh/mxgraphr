HTMLWidgets.widget({

  name: 'mxgraphr',

  type: 'output',

  factory: function(el, width, height) {

    // Variables to keep track of the state of the widget
    var graph = null;
    var parent = null;

    return {

      renderValue: function(x) {

        if (graph === null) {
          graph = new mxGraph(document.getElementById(el.id));
          parent = graph.getDefaultParent();

          // Adds cells to the model in a single step
				  graph.getModel().beginUpdate();
				  try
				  {
					  var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'rounded;strokeColor=red;fillColor=green');
					  var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
					  var v3 = graph.insertVertex(parent, null, 'Another Added' 100, 85, 80, 30, 'rounded;strokeColor=red;fillColor=blue');
					  var e1 = graph.insertEdge(parent, null, '', v1, v2);
				  }
				  finally
				  {
					  // Updates the display
					  graph.getModel().endUpdate();
				  }
        }
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      },

      // Give access to grid if anyone needs it on the outside
      getGraph: function() {
        return graph;
      }

    };
  }
});
