<template>
<div class="row">
	<!-- 新添加披萨 -->
	<div class="col-sm-12 col-md-8">
		<new-pizza></new-pizza>
	</div>
	<!-- 品种展示 -->
	<div class="col-sm-12 col-md-4">
		<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>品种</th>
						<th>管理</th>
					</tr>
				</thead>
				<tbody v-for="item in menuItems" :key="item.id">
					<tr>
						<td>{{item.name}}</td>
						<td><button class="btn btn-outline-success btn-sm" @click="deleteItem(item)">&times;</button></td>
					</tr>
				</tbody>
			</table>
			
	</div>
</div>
</template>
<script>
import NewPizza from "./NewPizza.vue";
export default {
  components: {
    "new-pizza": NewPizza
  },
  data() {
    return {
      // getMenuItem: []
    };
  },
  methods: {
    deleteItem(item) {
      this.$axios
        .delete(`menu/${item.id}.json`)
        .then(res => {
          // this.$router.go(0);
          this.$store.commit('removeMenuItems', item);
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.$axios.get("menu.json").then(res => {
      const data = res.data;
      let menuArr = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const item = data[key];
          item.id = key;
          menuArr.push(item);
        }
      }
      // 更改数据状态
      this.$store.commit('setMenuItems', menuArr); 
      // console.log(this.$store.state.menuItems);
    });
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
    }
  }
};
</script>