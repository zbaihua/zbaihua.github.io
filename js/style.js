function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var index=0,timer=null,pics=byId("banner").getElementsByTagName("div");
var dots=byId("dots").getElementsByTagName("span");
var len=pics.length;
function slideImg(){
	var main=byId("main");
	main.onmouseover=function(){
		if(timer){
			clearInterval(timer);
		}

	}
	main.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			console.log(index);
			changeImage()
		},2000);

	}
	main.onmouseout();
	for(var d=0;d<len;d++){
		
			dots[d].id=d;
			dots[d].onclick=function(){
				index=this.id;
				changeImage();
			}

		
	}
	var perv=byId("prev");
	prev.onclick=function(){
		index++;
		if (index>=len) {
			index=0;
		}
		changeImage();
	}
	var next=byId("next");
	next.onclick=function(){
		index--;
		if (index<0) {
			index=2;
		}
		changeImage();
	}
	var menu=byId("menu-content");
	var menuItems=menu.getElementsByClassName("menu-item");
	var subMenu=byId("sub-menu");
	var innerBox=subMenu.getElementsByClassName("inner-box");
	for(var m=0;m<menuItems.length;m++){
		menuItems[m].setAttribute("data-index",m);
		menuItems[m].onmouseover=function(){
			var idx=this.getAttribute("data-index");
			for(var j=0;j<innerBox.length;j++){
				innerBox[j].style.display="none";
				menuItems[j].style.background="none";
			}
			subMenu.className="sub-menu";
			innerBox[idx].style.display="block";
			menuItems[idx].style.background="rgba(0,0,0,.1)";

		}
		menu.onmouseout=function(){
			subMenu.className="menu-content hide";


		}
		subMenu.onmouseover=function(){
			this.className="sub-menu";
		}
		subMenu.onmouseout=function(){
			this.className="sub-menu hide";
		}
		

	}
	function changeImage(){
		for(var i=0;i<len;i++){
			pics[i].style.display="none";
			dots[i].className="";
		}
		pics[index].style.display="block"
		dots[index].className="active";
	}
	

}
slideImg();