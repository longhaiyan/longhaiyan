window.onload = function(){
	//tab选项卡，鼠标经过和移开事件
	var tableft = document.getElementById('tab-left');
	var tab = tableft.getElementsByTagName('li');

	for(i=0;i<tab.length;i++){
		//鼠标经过
		tab[i].onmouseover = function(){
			this.style.backgroundColor = "grey";
		}
		// 鼠标移开
		tab[i].onmouseout = function(){
			this.style.backgroundColor = "#0F2038";
		}
	}

	var page = document.getElementById('yes');
	var tru = page.getElementsByTagName('div');
	for(j=0;j<tru.length;j++){
		if(tru[j].className == "tab-triangle"){
			tru[j].className = "triangle";
		}
	}




	// 回到顶部效果
	var top = document.getElementById('top-btn');
	//获取可视区的高度
	var clientHeight = document.documentElement.clientHeight;
	var time = null;
	var stop = true;
	
	//回到顶部点击是触发
	top.onclick = function(){
		time = setInterval(function(){
			//获取滑动条的高度
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var speed = scrollTop / 5 ;
			//改变滑动条高度
			document.body.scrollTop = document.documentElement.scrollTop = scrollTop - speed ;

			//如果到达顶部，停止事件
			if (scrollTop == 0) {
				clearInterval(time);
			};

			stop = false ;
		},30);
	}

	//滚动条滚动时停止回到顶部
	window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if (scrollTop > 0) {
			top.style.display = 'block';
		}else{
			top.style.display = 'none';
		};

		if (stop) {
			clearInterval(time);
		};
		stop = true;
	}
}