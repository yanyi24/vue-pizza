<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img src="../assets/logo.jpeg" alt="" class="mx-auto d-block">
					<form @submit.prevent="onSubmit" enctype="multipart/form-data">
						<div class="form-group">
							<label for="name">用户名</label>
							<input type="text" id="name" v-model="name" class="form-control">
						</div>
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" id="email" v-model="email" class="form-control">
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" id="password" v-model="password" class="form-control">
						</div>
						<div class="form-group">
							<label for="password2">确认密码</label>
							<input type="password" id="password2" v-model="password2" class="form-control">
						</div>
						<div class="form-group">
							<label for="avatar">头像：</label>
							<input type="file" id="avatar" class="form-control" @change="uploadAvatar">
						</div>
						<button class="btn btn-block btn-primary" type="submit">注册</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
			name: "",
      email: "",
      password: "",
			password2: "",
			avatar: null
    };
  },
  methods: {
		uploadAvatar(e) {
			console.log(e.target.files);
			
			const files = !!e.target.files ? e.target.files : [];
			if(!files.length || !window.FileReader){
				console.log('您的浏览器不支持HTML5！');
				return false;
			}
			let fd = new FormData;
			fd.append('avatar', files[0], files[0].name);
			this.avatar = fd;
			
		},
    onSubmit() {
      if(this.password === this.password2 ){
      	const formatData = {
					name: this.name,
      		email: this.email,
      		password: this.password,
					password2: this.password2,
					avatar: this.avatar
      	}
      	// axios.post('/users.json', formatData)
      	// .then(res => {
      	// 	console.log(res);

      	// 	if (res.status === 200 && res.statusText === 'OK' ) {
      	// 		this.$router.push('/login');
      	// 	}else{
      	// 		alert('注册失败！');
      	// 	}
				// });
				axios.post('http://localhost:5000/api/users/register', formatData)
      		.then(res => {
					console.log(res);
					console.log(formatData);
					return;

      		if (res.status === 200 && res.statusText === 'OK' ) {
      			this.$router.push('/login');
      		}else{
      			alert('注册失败！');
      		}
      	});
      }else{
      	alert('两次输入哦密码不一致，请重新输入');
      	this.password = '';
      	this.password2 = '';
      }
    }
  }
};
</script>