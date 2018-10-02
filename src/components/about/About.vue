<template>
	<div>
		<div class="row md-5">
			<div class="col-4">
				<ul class="list-group md-5">
					<router-link :to="{name: 'historyLink'}" tag="li" class="nav-link">
						<a class="list-group-item list-group-item-action">历史订单</a>
					</router-link>
					<router-link :to="{name: 'contactLink'}" tag="li" class="nav-link">
						<a class="list-group-item list-group-item-action">联系我们</a>
					</router-link>
					<router-link :to="{name: 'orderingGuideLink'}" tag="li" class="nav-link">
						<a class="list-group-item list-group-item-action">点餐文档</a>
					</router-link>
					<router-link :to="{name: 'deliveryLink'}" tag="li" class="nav-link">
						<a class="list-group-item list-group-item-action">快递信息</a>
					</router-link>
				</ul>
			</div>
			<div class="col-8">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>