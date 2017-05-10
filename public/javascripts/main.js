$(document).ready(function(){
	//массив избранных фото
	a_img=["1.jpg","2.jpg","3.jpg"];

	setNewSliderBg(0);  
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