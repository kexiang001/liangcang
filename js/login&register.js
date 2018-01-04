
//登录&注册
//参数：status ；username ；password
//连接服务器
function server(json,pz){
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var str = xhr.responseText;
			
			var obj = JSON.parse(str);
			pz(obj);
		}
	}
	
	xhr.open("POST", "http://csit.top/api_user.php", true);
	
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	var obj = json;
	var str = getParams(obj);
	xhr.send(str);
}
function getParams(obj)
{
	var str = "";

	for (var k in obj) {
		
		str += k;
		
		str += "=";
		str += obj[k];
		str += "&";
	}
	
	str = str.substring(0, str.length-1);
	return str;
}
function ajax(obj){
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var str = xhr.responseText;
			
			var ob = JSON.parse(str);
			obj.pc(ob);
		}
	}
	if (obj.method == "GET") { 
		obj.url += "?"  
		obj.url += getParams(obj.json) 
	}
	xhr.open(obj.method, obj.url, true);
	
	if(obj.method == "GET"){
		xhr.send();
	}else{
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
		var str = getParams(obj.json);
		xhr.send(str);
	}
	
	
}