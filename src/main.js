import Vue from 'vue';

import App from './App.vue';

//引入mint-ui并使用
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css'
Vue.use(Mint);

import '../statics/mui/css/mui.css'

//3.0将vue-router集成到这个项目里面
import vueRouter from 'vue-router';
//3.0.1将vuerouter对象绑定到Vue对象上
Vue.use(vueRouter);
//3.0.3导入路由规则对应的主键对象
import login from './components/account/login.vue';
import register from './components/account/register.vue';

//3.0.2定义路由规则
var router = new vueRouter({
	routes:[
		{path:'/login',component:login},
		{path:'/register',component:register},
	]
	});

new Vue({
	el:'#app',
	//使用路由对象实例
	router,
	//render:function(create){create(App)} //es5写法
	render:create=>create(App)
});