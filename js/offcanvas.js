// Configuration

// Define the ID of your main body content, this is what
// you want to put on your container or body.


(function(window, undefined){

	var push_content = 'pushcontent';
	var off_canvas = 'offcanvas';

	var menu = $(off_canvas);
	var content = $(push_content);

	// Helper functions

	var addClass = function(element, classname){
		element.className += ' ' + classname;
	}

	var removeClass = function(element, classname){
		element.className = element.className.replace(' ' + classname + ' ', ' ');
	}
})();