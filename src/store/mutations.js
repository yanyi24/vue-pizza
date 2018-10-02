// 改变属性的状态
export const setMenuItems = (state, data) => {
	state.menuItems = data;
};
export const removeMenuItems = (state, data) => {
	state.menuItems.forEach((item, i) => {
		if (item == data) {
			state.menuItems.splice(i, 1);
		}
	});
};
export const pushToMenuItems = (state, data) => {
	state.menuItems.push(data);
};

//	更改用户的状态信息
export const userStatus = (state, user) => {
	if (user != null) {
		state.currentUser = user;
		state.isLogin = true;
	}else{
		state.currentUser = null;
		state.isLogin = false;
	}
};