<template>
	<form>
		<h3 class="text-muted my-5">添加新的披萨</h3>
		<div class="row form-group">
			<label for="" class="col-sm-1">品种</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.name">
			</div>
		</div>
		<div class="row form-group">
			<label for="" class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea row="5" class="form-control" v-model="newPizza.desc"></textarea>
			</div>
		</div>
		<p><b>选项1</b></p>
		<div class="row form-group">
			<label for="" class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size1">
			</div>
		</div>
		<div class="row form-group">
			<label for="" class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price1">
			</div>
		</div>
		<p><b>选项2</b></p>
		<div class="row form-group">
			<label for="" class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size2">
			</div>
		</div>
		<div class="row form-group">
			<label for="" class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price2">
			</div>
		</div>
		<div class="row form-group">
			<button @click="addMenuItem" class="btn btn-block btn-primary" type="button">添加</button>
		</div>
	</form>
</template>
<script>
	export default{
		data(){
			return {
				newPizza: {},
				menuArr: []
			}
		},
		methods: {
			addMenuItem(){
				let data = {
					name: this.newPizza.name,
					desc: this.newPizza.desc,
					opts: [
						{
							size: this.newPizza.size1,
							price: this.newPizza.price1
						},
						{
							size: this.newPizza.size2,
							price: this.newPizza.price2
						}
					]
				};
				this.$axios.post('menu.json', data)
				.then(res => {
					this.$store.commit('pushToMenuItems', data);
					this.newPizza = {};
				})
				.catch(err => console.log(err));
			}
		}
		
	}
</script>
