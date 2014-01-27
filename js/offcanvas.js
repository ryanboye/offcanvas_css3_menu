(function(window, document, undefined)
{

	function foo(){
		// Define the ID of your main body content, this is what
		// you want to put on your container or body.

		var push_content_id = "pushcontent";
		var off_canvas_id = "offcanvas";
		var menu_button_id = "offcanvas_toggle";

		var menu = document.getElementById(off_canvas_id);
		var content = document.getElementById(push_content_id);
		var toggle = document.getElementById(menu_button_id);
		
		// Helper functions
		function nav(){
		var nav_open = false;

		var addClass = function(element, classname){
			if (!hasClass(element, classname)) {
				element.className += ' ' + classname;
			}
		};

		var hasClass = function(element, classname){
	    return (' ' + element.className + ' ').indexOf(' ' + classname + ' ') !== -1;
	  };

		var removeClass = function(element, classname){
			element.className = element.className.replace(' ' + classname, '');
		};

		var open_menu = function(){
			if (nav_open) {
	      return;
	   }
			addClass(document.body, "transition");
			if(!nav_open){
				nav_open = true;
			}
		};
		
		var close_menu = function(){
			removeClass(document.body, "transition");
			if (nav_open){
				nav_open = false;
			}
		};

		var toggle_menu = function(){
			nav_open ? close_menu() : open_menu();
		};

		toggle.addEventListener('click', function(){
			event.preventDefault();
			toggle_menu();
		}, false);
		}
		nav();
	}
	window.addEventListener('DOMContentLoaded', foo);

})(window, window.document);