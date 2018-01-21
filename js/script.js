$(function () {
    $(".chek").val('');
	$(".modal_window").css("height",$(document).height());
	$(".zakaz").on("click",function (){
		$(".modal_window").fadeToggle(500);
	});
	$(".close").on("click",function (){
		$(".modal_window").fadeToggle(500);
	});
});