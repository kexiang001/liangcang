
//登录&注册
//参数：status ；username ；password
//连接服务器
function server(json,pz){
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			// 取出服务器返回的数据
			var str = xhr.responseText;
			
			// 将数据字符串转换成JSON对象
			var obj = JSON.parse(str)
			pz(obj);
		}
	}
	
	xhr.open("POST", "http://csit.top/api_user.php", true);
	
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	var obj = json;
	
	var str = getParams(obj)
	
	xhr.send(str)
}
function getParams(obj)
{
	var str = ""

	// 快速遍历，可以遍历对象中的所有属性
	for (var k in obj) {
		// 拼接属性名
		str += k
		// 在中间拼接 = 号
		str += "="
		// 拼接属性值
		str += obj[k]
		// 在后面拼接 & 号
		str += "&"
	}
	
	// 删掉最后一个
	str = str.substring(0, str.length-1)
	
	// 输出循环拼接之后的值
	// console.log(str)
	return str
}