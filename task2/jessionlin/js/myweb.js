//一级导航切换
var list=document.getElementsByClassName('ifcheck');
list[0].className+=" active";
function add(num){
	for (var i=0;i<list.length;i++) {
		var r=list[i].className;
		var lis=r.split(" ");
		r = "";
		for(var j=0;j<lis.length;j++){
			console.log(3);
			if(lis[j]=="active"){
				lis[j]="";
			}
			if(lis[j])
			r += lis[j]+" ";
		console.log(1);
		}
		list[i].className = r;
		console.log(2);
	}
	list[num].className += " active";
}
//二级导航切换
var list1=document.getElementsByClassName('ifcheck_1');
list1[0].className+=" active";
function add1(num){
	for (var i=0;i<list1.length;i++) {
		var r=list1[i].className;
		var lis=r.split(" ");
		r = "";
		for(var j=0;j<lis.length;j++){
			console.log(3);
			if(lis[j]=="active"){
				lis[j]="";
			}
			if(lis[j])
			r += lis[j]+" ";
		console.log(1);
		}
		list1[i].className = r;
		console.log(2);
	}
	list1[num].className += " active";
}
