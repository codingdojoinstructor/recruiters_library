$(document).ready(function(){
	$('.belt').click(function(){
		var shown_belts = new Array;
		if($(this).children().prop("checked")){
			$(this).siblings().children().prop("checked", true);
		}
		else{
			$(this).siblings().children().prop("checked", false);
		}; //This bit controls the behavior of sub-checkboxes
		$('.belt').each(function(){
			if($(this).children().prop("checked")){
				var a_belt = $(this).parent().attr("class") + "-student";
				shown_belts.push(a_belt);
			}
		}); //This puts the class names of the selected belts into an array
		$("#student_select").find("li").each(function(){
			var current_student = $(this);
			var visible = true;
			for(var i=0; i<shown_belts.length; i++){ //go through all the selected belts
				if(!current_student.hasClass(shown_belts[i])){
					visible = false; //make current student not visible if they don't have a matching belt
				}
			}
			visible ? current_student.show() : current_student.hide(); //show or hide the current student
		});
		// console.log(shown_belts);
	});// END OF BELT CLICK EVENT
	$('#short_list button').click(function(){
		$(this).parent().hide();
	});
	$('#student_select li').click(function(){
		//var student_id = $(this).attr("id");
		//redirect to page according to student_id
	});
	$('#short_list li').click(function(){
		//var student_id = $(this).attr("id");
		//redirect to page according to student_id
	});
});