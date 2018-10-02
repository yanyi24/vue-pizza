<template>
<div class="row">
	<!-- 菜单 -->
	<div class="col-sm-12 col-md-8">
		<table class="table">
			<thead class="thead-default">
				<tr>
					<th>尺寸</th>
					<th>价格</th>
					<th>加入</th>
				</tr>
			</thead>
			<tbody v-for="pizza in menuItems" :key="pizza.name">
				<tr>
					<td><b>{{pizza.name}}</b></td>
				</tr>
				<tr v-for="opt in pizza.opts" :key="opt.size">
					<td>{{opt.size}}</td>
					<td>{{opt.price}}</td>
					<td><button @click="addToBasket(pizza, opt)" class="btn btn-sm btn-outline-success">+</button></td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- 购物车 -->
	<div class="col-sm-12 col-md-4">
		<div v-if="baskets.length>0">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>数量</th>
						<th>品种</th>
						<th>价格</th>
					</tr>
				</thead>
				<tbody v-for="item in baskets" :key="item.size">
					<tr>
						<td>
							<button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
							<span>{{item.quantity}}</span>
							<button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
						</td>
						<td>{{item.name}}{{item.size}}寸</td>
						<td>{{item.price * item.quantity}}</td>
					</tr>
				</tbody>
			</table>
			<p>总价：{{totalPrice + 'RMB'}}</p>
			<button class="btn btn-success btn-block btn-sm">提交订单</button>
		</div>
		<div v-else>
			{{basketsText}}
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return {
				baskets: [],
				basketsText: '购物车还没有任何商品',
				// menuItems: {}
			}
		},
		methods: {
			addToBasket(pizza, opt){
				let basket = {
					name: pizza.name,
					size: opt.size,
					price: opt.price,
					quantity: 1
				};
				if (this.baskets.length > 0) {
					let result = this.baskets.filter(basket => {
						return (basket.name === pizza.name && basket.price === opt.price);
					});
					if (result != null && result.length > 0) {
						result[0].quantity ++;
					}else{
						this.baskets.push(basket);
					}
				}else{
					this.baskets.push(basket);
				}
				
			},
			decreaseQuantity(item){
				item.quantity --;
				if (item.quantity <= 0) {
					this.removeFromBasket(item);
				}
			},
			increaseQuantity(item){
				item.quantity ++;
			},
			removeFromBasket(item){
				this.baskets.splice(this.baskets.indexOf(item), 1);
			}
		},
		computed: {
			menuItems: {
				// 获取vuex中的数据
				get(){
					// return this.$store.state.menuItems;
					return this.$store.getters.getMenuItems;
				},
				set(){

				}
			},
			totalPrice(){
				let totalCost = 0;
				for (const key in this.baskets) {
					if (this.baskets.hasOwnProperty(key)) {
						const individualItem = this.baskets[key];
						totalCost += individualItem.price * individualItem.quantity;
					}
				}
				return totalCost;
			}
		},
		created(){
			// 将请求到的数据存储在vuex
			this.$axios.get('menu.json')
			.then(res => this.$store.commit('setMenuItems', res.data))
			.catch(err => console.log(err));
		}
	}
</script>