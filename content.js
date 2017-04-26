// For Twitter
if($(".ProfileHeaderCard-name").length > 0){
	if($(".ProfileHeaderCard-name").find(".ProfileHeaderCard-badges").length == 0){
		$(".ProfileHeaderCard-name").append("<span class='ProfileHeaderCard-badges'><a href='/help/verified' class='js-tooltip' target='_blank' data-placement='right' rel='noopener' data-original-title='Verified account'><span class='Icon Icon--verified'><span class='u-hiddenVisually'>Verified account</span></span></a></span>");
	}
}

if($(".DashboardProfileCard-name").length > 0){
	if($(".ProfileHeaderCard-name").find(".ProfileHeaderCard-badges").length == 0){
		$(".DashboardProfileCard-name").append("<span class='ProfileHeaderCard-badges'><a href='/help/verified' class='js-tooltip' target='_blank' data-placement='right' rel='noopener' data-original-title='Verified account'><span class='Icon Icon--verified'><span class='u-hiddenVisually'>Verified account</span></span></a></span>");
	}
}

var MyName = $(".ProfileHeaderCard-nameLink").html();

function apply_verify_patch(){
	$.each($(document).find(".fullname"),function(i,value){
		if($(this).html() == MyName){
			$(this).parents(".FullNameGroup").find(".UserBadges").remove();
			$(this).parents(".FullNameGroup").append("<span class='UserBadges'><span class='Icon Icon--verified'><span class='u-hiddenVisually'>Verified account</span></span></span>");
		}
	});
}
apply_verify_patch();
$( window ).scroll(function() {
  apply_verify_patch();
});


// For Facebook!
if($("._4qyw").length > 0){
	$("._4qyw").append("<span class='_2l9f'><i class='_5db5 img sp_jxD0bUhJBA- sx_c94093' alt='' data-hover='tooltip' data-tooltip-content='' id='js_10'></i></span>");
}
