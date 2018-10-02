<template>
<div class="row">
  <div id="home" class="col-sm-12 text-center">
    <div class="background">
      <h1>Welcome to Pizza-APP</h1>
      <h2>这里有很多美味可口的pizza</h2>
      <button @click="goToMenu" class="btn btn-success">Let's order!</button>
    </div>

  </div>

</div>
</template>
<script>
	export default{
		methods: {
			goToMenu:function () {
				// this.$router.go(-1);
				// this.$router.replace('/menu');
				this.$router.push('/menu')
			}
		}
	}

</script>
<style>
  #home{
    background: url(../assets/pizza.png);
    height: 85vh;
    padding: 30px;
  }
  h1,h2{
    margin: 4% auto;
  }
  .background{
    background: rgba(255,255,255,.1);
    padding: 40px 0;
  }
</style>
