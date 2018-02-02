//加载完页面才执行
window.onload = function() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');
	var music = document.getElementById('music');
	//获取audio是是一个数组，因为页面上只有一个audio,所以通过下标0即可获取
	var audio = document.getElementsByTagName('audio')[0];

	//监听音乐播放状态,当音乐播放完毕，自动停止光盘旋转效果
	audio.addEventListener('ended',function(){
		music.style.animationPlayState="paused";
		music.style.webkitAnimationPlayState="paused";
	});
	music.addEventListener('touchstart',function(e){
		if(audio.paused)
		{
			audio.play();
			//让动画继续
			music.style.animationPlayState="running";
			music.style.webkitAnimationPlayState="running";
		}
		else{
			audio.pause();
			//让动画暂停
			music.style.animationPlayState="paused";
			music.style.webkitAnimationPlayState="paused";
		}
	},false);

	page1.addEventListener('touchstart',function(){
		page1.style.display = 'none';
		page2.style.display = 'block';
		page3.style.display = 'block';
		page3.style.top		= '100%'; 

		setTimeout(function(){
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn');
		},5500)
	},false);
}
