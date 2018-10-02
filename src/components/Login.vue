<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img src="../assets/logo.jpeg" alt="" class="mx-auto d-block">
					<form @submit.prevent="onSubmit">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" id="email" v-model="email" class="form-control">
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" id="password" v-model="password" class="form-control">
						</div>
						<button class="btn btn-block btn-primary" type="submit">登陆</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
	export default{
		data(){
			return {
				email: '',
				password: ''
			}
		},
		beforeRouteEnter (to, from, next) {
			next(vm => vm.$store.dispatch('setUser', null))
		},
		methods: {
			onSubmit(){
				const data = {
					email: this.email,
					password: this.password
				}
				axios.post('http://localhost:5000/api/users/login',data)
					.then(res => {
						// console.log(res.data);
						if (res.data.success) {
							// 存储token
						} 
					})
				// axios.get('/users.json').then(res => {
				// 	if (res.status === 200) {
				// 		let users = [];
				// 		for (const key in res.data) {
				// 			if (res.data.hasOwnProperty(key)) {
				// 				const data = res.data[key];
				// 				users.push(data);
				// 			}
				// 		}
						
				// 		let result = users.filter(user => {
				// 			return user.email === this.email && user.password === this.password;
				// 		});
				// 		if (result != null && result.length > 0) {
				// 			console.log('登陆成功！');
				// 			this.$store.dispatch('setUser', result[0].email)
				// 			this.$router.push('/home');
				// 		}else{
				// 			alert('登陆失败！');
				// 			this.$store.dispatch('setUser', null)
				// 		}
				// 	}
				// });
			}
		}
	}
</script>