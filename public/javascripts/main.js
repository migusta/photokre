$(document).ready(function(){
	//массив избранных фото
	a_img=["1.jpg","2.jpg","3.jpg"];
	if ($('.slider').length!=0){
		setNewSliderBg(0);  
	}
});

//функция плавного изменения фонового изображения
function setNewSliderBg(bg_index){
		$(".slider").css({"background-image": "url(../images/"+a_img[bg_index]+")",opacity: 0}).animate({'opacity':'1'},2000);
		bg_index+=1;
		if (bg_index==a_img.length) {
			bg_index=0;
		}	
		setTimeout('setNewSliderBg('+bg_index+')',7000);  
}
function showSmallMenu(){
	//$(".menu").show().animate({"width":"100%",marginLeft: 0},300);
    var slideArgs = [{right: '0'},{ right: '30' }];
    $(".menu").animate(slideArgs[0], 1000);
    $(".close-menu").animate(slideArgs[1], 1000);

}
function hideSmallMenu(){
	//$(".menu").animate({"width":"0px"},300).hide();
	var slideArgs = [{right: '-100%'},{ right: '-70' }];
    $(".menu").animate(slideArgs[0], 1000);
    $(".close-menu").animate(slideArgs[1], 1000);
}