// const cP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// const cID = /^[K]([\d]{4})$/;

function cSpace(x) {
	if (x !="")
	{
		return 1;
	} return 0;
}

//bấm vào lưu dữ liệu


function enterDATA(){
var username = $("#username").val();
var password = $("#password").val();
var cl= $("#class").val();
var id = $("#student").val();

// let Rg = ((a, b) => a.test(b));

	if((cSpace(cl)*cSpace(id)*cSpace(username)*cSpace(password))==0)
	{
		swal({
			title: "Dữ liệu bị rỗng, mời nhập lại.",
			icon: "error",
			button: "Đã hiểu",
		});	
		
	}
	else{
		// if(Rg(cP, password) && Rg(cID, id))
		// {
			let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
			user.push({
				id: id,
				name: username,
				pass: password,
				class: cl
			});
			let data = JSON.stringify(user);
			localStorage.setItem("user", data);	
			swal({
				title: "Đã lưu trữ dữ liệu thành công.",
				icon: "success",
				button: "Đã hiểu",
			});	
		// }
		// else
		// {
		// 	alert("Không đúng định dạng")
		// }

	}
};
btn.addEventListener("click", enterDATA);

function renderUSER()
{
	let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
	let list =`<tr>
				<th>ID</th>
				<th>Tài khoản</th>
				<th>Mật khẩu</th>
				<th>Lớp</th>
				<th>Thao tác</th> 
			</tr>`;

	for(let i = 0; i < user.length; i++)
	{
		list += `<tr>
			<td>${user[i].id}</td>
			<td>${user[i].name}</td>
			<td>${user[i].pass}</td>
			<td>${user[i].class}</td>
			<td>
			<button onclick="editUSER(${i})">Sửa</button>
			<button onclick="delUSER(${i})">Xóa</button>
			</td>
		</tr>`;			
	}
	$('#table-content').html(list);
};

function editUSER(index){
	let list = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
	$('#student').val(list[index].id);
	$('#username').val(list[index].name);
	$('#password').val(list[index].pass);
	$('#class').val(list[index].class);
	$('#getID').val(index);
	$('#edit').css('display', 'block');
	$('#btn').css('display', 'none');

}

function changeUSER(){
	let list = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
	var index = $("#getID").val();
	var username = $("#username").val();
	var password = $("#password").val();
	var cl= $("#class").val();
	var id = $("#student").val();
	list[index] = {
		name: username,
		pass: password,
		id: id,
		class: cl
	}
	localStorage.setItem('user', JSON.stringify(list))
}

function delUSER(index){
	let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
	user.splice(index, 1);
	localStorage.setItem("user", JSON.stringify(user));
	renderUSER();
}
