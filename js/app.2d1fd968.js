(function(){"use strict";var e={3775:function(e,s,t){var o=t(9963),r=t(6252);const n={class:"app"};function i(e,s,t,o,i,a){const l=(0,r.up)("navbar"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(l),(0,r.Wm)(u)])}t(7658);var a=t.p+"img/Logo.33f21eab.svg";const l=e=>((0,r.dD)("data-v-d54ae658"),e=e(),(0,r.Cn)(),e),u={class:"block-navbar"},d=l((()=>(0,r._)("img",{src:a,alt:"logo"},null,-1))),m=[d],c={class:"block-buttons"};function p(e,s,t,n,i,a){const l=(0,r.up)("my-button"),d=(0,r.up)("my-loader");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",{class:"head-logo",onClick:s[0]||(s[0]=s=>e.$router.push("/"))},m),(0,r._)("div",c,[(0,r.Wm)(l,{onClick:s[1]||(s[1]=s=>e.$router.push("/users"))},{default:(0,r.w5)((()=>[(0,r.Uk)("Users")])),_:1}),(0,r.Wm)(l,{onClick:s[2]||(s[2]=s=>e.$router.push("/login"))},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign Up")])),_:1})]),(0,r.wy)((0,r.Wm)(d,{class:"loader"},null,512),[[o.F8,a.isLoaderVisible]])])}var v={name:"NavBar",computed:{isLoaderVisible(){return this.$store.getters.isLoaderVisible}}},g=t(3744);const h=(0,g.Z)(v,[["render",p],["__scopeId","data-v-d54ae658"]]);var f=h,_={name:"App",components:{navbar:f}};const $=(0,g.Z)(_,[["render",i]]);var b=$,k=t(2201);const w=e=>((0,r.dD)("data-v-1adad215"),e=e(),(0,r.Cn)(),e),y={class:"block-test"},U={class:"text-container"},L=w((()=>(0,r._)("h2",{className:"test-title"}," Test assignment for front-end developer ",-1))),D=w((()=>(0,r._)("p",null," What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving. ",-1))),C={class:"sign"};function V(e,s,t,o,n,i){const a=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",U,[L,D,(0,r._)("div",C,[(0,r.Wm)(a,{onClick:s[0]||(s[0]=s=>e.$router.push("/login"))},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign Up")])),_:1})])])])}var q={name:"MainPage"};const z=(0,g.Z)(q,[["render",V],["__scopeId","data-v-1adad215"]]);var I=z;const P=e=>((0,r.dD)("data-v-6788eea5"),e=e(),(0,r.Cn)(),e),T={class:"usersPage-container"},x={class:"block-info"},W=P((()=>(0,r._)("h1",null,"Working with GET request",-1)));function Z(e,s,t,n,i,a){const l=(0,r.up)("my-loader"),u=(0,r.up)("users-server");return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",x,[W,(0,r.wy)((0,r.Wm)(l,{class:"loader"},null,512),[[o.F8,e.$store.state.users.isLoaderVisible]])]),(0,r.Wm)(u)])}const F={class:"block-users"},S={class:"users-container"};function M(e,s,t,n,i,a){const l=(0,r.up)("user-item"),u=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("div",F,[(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.sortedUsers,(e=>((0,r.wg)(),(0,r.j4)(l,{key:e.id,user:e},null,8,["user"])))),128))]),(0,r.wy)((0,r.Wm)(u,{onClick:a.ShowMoreUsers},{default:(0,r.w5)((()=>[(0,r.Uk)("Show more")])),_:1},8,["onClick"]),[[o.F8,a.totalUsers>a.arrayUsersLength]])])}var O=t(3577);const j={class:"user-card"},E=["src"],R={class:"user-info"};function B(e,s,t,o,n,i){return(0,r.wg)(),(0,r.iD)("div",j,[(0,r._)("img",{class:"user-photo",src:t.user.photo,alt:"photo_user"},null,8,E),(0,r._)("p",null,(0,O.zw)(t.user.name),1),(0,r._)("div",R,[(0,r._)("p",null,(0,O.zw)(t.user.phone),1),(0,r._)("p",null,(0,O.zw)(t.user.email),1),(0,r._)("p",null,(0,O.zw)(t.user.position),1)])])}var H={name:"UserItem",props:{user:{type:Object,required:!0}}};const G=(0,g.Z)(H,[["render",B],["__scopeId","data-v-34fcf23c"]]);var K=G,N={name:"UsersServer",components:{UserItem:K},computed:{sortedUsers(){return this.$store.getters.sortedUsers},arrayUsersLength(){return this.$store.state.users.users.length},totalUsers(){return this.$store.state.users.total_users}},methods:{ShowMoreUsers(){this.$store.dispatch("getMoreUsers")}},mounted(){this.$store.dispatch("getUsers")}};const Y=(0,g.Z)(N,[["render",M],["__scopeId","data-v-863d08b6"]]);var A=Y,J={name:"UsersPage",components:{UsersServer:A}};const X=(0,g.Z)(J,[["render",Z],["__scopeId","data-v-6788eea5"]]);var Q=X;const ee=e=>((0,r.dD)("data-v-0735c19e"),e=e(),(0,r.Cn)(),e),se={class:"signUp"},te=ee((()=>(0,r._)("h1",null,[(0,r.Uk)("Working with "),(0,r._)("span",null,"post"),(0,r.Uk)(" request")],-1)));function oe(e,s,t,o,n,i){const a=(0,r.up)("LoginForm");return(0,r.wg)(),(0,r.iD)("div",se,[te,(0,r.Wm)(a)])}const re=e=>((0,r.dD)("data-v-259abd20"),e=e(),(0,r.Cn)(),e),ne={class:"group-input"},ie={class:"form-element"},ae={key:0,class:"invalid-message"},le={key:1,class:"invalid-message"},ue={class:"form-element"},de={key:0,class:"invalid-message"},me={key:1,class:"invalid-message"},ce={class:"form-element"},pe={key:0,class:"invalid-message"},ve={key:1,class:"invalid-message"},ge={class:"group-radio"},he=re((()=>(0,r._)("h2",null,"Select you position :",-1))),fe={class:"radio-buttons-block"},_e=["value"],$e={class:"input-file"},be={key:0,class:"invalid-message"};function ke(e,s,t,n,i,a){const l=(0,r.up)("my-loader"),u=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("form",{class:"login-form",novalidate:"",onSubmit:s[5]||(s[5]=(0,o.iM)(((...e)=>a.checkForm&&a.checkForm(...e)),["prevent"]))},[(0,r.wy)((0,r.Wm)(l,{class:"loader"},null,512),[[o.F8,e.$store.state.login.loaderVisible]]),(0,r._)("div",ne,[(0,r._)("div",ie,[(0,r.wy)((0,r._)("input",{type:"text",name:"name",placeholder:"your name...","onUpdate:modelValue":s[0]||(s[0]=e=>i.form.name=e),class:(0,O.C_)(n.v$.form.name.$error?"is-invalid":"")},null,2),[[o.nr,i.form.name,void 0,{trim:!0}]]),n.v$.form.name.$dirty&&n.v$.form.name.required.$invalid?((0,r.wg)(),(0,r.iD)("p",ae,(0,O.zw)(n.v$.form.name.required.$message),1)):(0,r.kq)("",!0),n.v$.form.name.$dirty&&n.v$.form.name.minLength.$invalid?((0,r.wg)(),(0,r.iD)("p",le,(0,O.zw)(n.v$.form.name.minLength.$message),1)):(0,r.kq)("",!0)]),(0,r._)("div",ue,[(0,r.wy)((0,r._)("input",{type:"email",name:"email",placeholder:"email...","onUpdate:modelValue":s[1]||(s[1]=e=>i.form.email=e),class:(0,O.C_)(n.v$.form.email.$error?"is-invalid":"")},null,2),[[o.nr,i.form.email,void 0,{trim:!0}]]),n.v$.form.email.$dirty&&n.v$.form.email.required.$invalid?((0,r.wg)(),(0,r.iD)("p",de,(0,O.zw)(n.v$.form.email.required.$message),1)):(0,r.kq)("",!0),n.v$.form.email.$dirty&&n.v$.form.email.emailRegexp.$invalid?((0,r.wg)(),(0,r.iD)("p",me," Email is invalid! ")):(0,r.kq)("",!0)]),(0,r._)("div",ce,[(0,r.wy)((0,r._)("input",{type:"text",name:"phone",placeholder:"phone...","onUpdate:modelValue":s[2]||(s[2]=e=>i.form.phone=e),class:(0,O.C_)(n.v$.form.phone.$error?"is-invalid":"")},null,2),[[o.nr,i.form.phone,void 0,{trim:!0}]]),n.v$.form.phone.$dirty&&n.v$.form.phone.required.$invalid?((0,r.wg)(),(0,r.iD)("p",pe,(0,O.zw)(n.v$.form.phone.required.$message),1)):(0,r.kq)("",!0),n.v$.form.phone.$dirty&&n.v$.form.phone.phoneRegexp.$invalid?((0,r.wg)(),(0,r.iD)("p",ve," Phone is invalid! ")):(0,r.kq)("",!0)])]),(0,r._)("div",ge,[he,(0,r._)("ul",fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.positions,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r.wy)((0,r._)("input",{type:"radio",name:"pos",checked:"",value:e.id,"onUpdate:modelValue":s[3]||(s[3]=e=>i.form.position_id=e)},null,8,_e),[[o.G2,i.form.position_id]]),(0,r.Uk)(),(0,r._)("label",null,(0,O.zw)(e.name),1)])))),128))])]),(0,r._)("div",$e,[(0,r._)("input",{type:"file",name:"file",size:"35",onChange:s[4]||(s[4]=(...e)=>a.onPhotoChange&&a.onPhotoChange(...e))},null,32),n.v$.form.photo.$dirty&&n.v$.form.photo.required.$invalid?((0,r.wg)(),(0,r.iD)("p",be,(0,O.zw)(n.v$.form.photo.required.$message),1)):(0,r.kq)("",!0)]),(0,r.Wm)(u,{class:"butt"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign Up")])),_:1})],32)}var we=t(4028),ye=t(2587);const Ue=ye.BM.regex(/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/),Le=ye.BM.regex(/^[+]{0,1}380([0-9]{9})$/);var De={name:"LoginForm",setup(){return{v$:(0,we.Xw)()}},data(){return{form:{name:"",email:"",phone:"",position_id:4,photo:null},isUser:null}},computed:{positions(){return this.$store.getters.Positions},token(){return this.$store.getters.Token},User(){return this.$store.state.login.isUser}},methods:{onPhotoChange(e){this.form.photo=e.target.files[0]},checkForm(){if(this.v$.form.$touch(),!this.v$.form.$error){this.$store.dispatch("setLoader",!0);const e=new FormData;e.append("position_id",this.form.position_id),e.append("name",this.form.name),e.append("email",this.form.email),e.append("phone",this.form.phone),e.append("photo",this.form.photo),this.$store.dispatch("setUser",{formData:e})}},getUsers(){return this.$router.push("/users")}},watch:{User(e,s){console.log(e),console.log(s),this.$router.push("/users")}},mounted(){this.$store.commit("setIsUser",!1)},validations(){return{form:{name:{required:ye.C1,minLength:(0,ye.Ei)(3)},email:{required:ye.C1,emailRegexp:Ue},phone:{required:ye.C1,phoneRegexp:Le},photo:{required:ye.C1}}}}};const Ce=(0,g.Z)(De,[["render",ke],["__scopeId","data-v-259abd20"]]);var Ve=Ce,qe={name:"LoginPage",components:{LoginForm:Ve},mounted(){this.$store.dispatch("getPositions"),this.$store.dispatch("getToken")}};const ze=(0,g.Z)(qe,[["render",oe],["__scopeId","data-v-0735c19e"]]);var Ie=ze;const Pe=[{path:"/",component:I},{path:"/users",component:Q},{path:"/login",component:Ie}],Te=(0,k.p7)({history:(0,k.r5)(),routes:Pe});var xe=Te;const We={class:"butt"};function Ze(e,s,t,o,n,i){return(0,r.wg)(),(0,r.iD)("button",We,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var Fe={name:"my-button"};const Se=(0,g.Z)(Fe,[["render",Ze],["__scopeId","data-v-66f51128"]]);var Me=Se,Oe=t.p+"img/loader.e0b921d5.svg";const je=(0,r._)("img",{src:Oe,alt:"loader"},null,-1),Ee=[je];function Re(e,s,t,o,n,i){return(0,r.wg)(),(0,r.iD)("div",null,Ee)}var Be={name:"my-loader"};const He=(0,g.Z)(Be,[["render",Re]]);var Ge=He,Ke=[Me,Ge],Ne=t(3907),Ye=t(6154);const Ae={state:()=>({users:[],total_users:0,page:1,count:6,positions:[],isLoaderVisible:!1}),getters:{sortedUsers:e=>e.users.sort(((e,s)=>e.registration_timestamp<s.registration_timestamp?1:-1)),LoadUsers:e=>e.users.length},mutations:{setUsers:(e,s)=>{e.users=[...s]},setMoreUsers:(e,s)=>{e.users=[...e.users,...s]},setTotal_users:(e,s)=>{e.total_users=s},incremmentPage:e=>{e.page+=1},setIsLoaderVisible:(e,s)=>{e.isLoaderVisible=s}},actions:{getUsers:({state:e,commit:s})=>{s("setIsLoaderVisible",!0),Ye.Z.get("https://frontend-test-assignment-api.abz.agency/api/v1/users",{params:{page:e.page,count:e.count}}).then((e=>{s("setUsers",e.data.users),s("setTotal_users",e.data.total_users),s("setIsLoaderVisible",!1)}))},getMoreUsers:({state:e,commit:s})=>{s("setIsLoaderVisible",!0),s("incremmentPage"),Ye.Z.get("https://frontend-test-assignment-api.abz.agency/api/v1/users",{params:{page:e.page,count:e.count}}).then((e=>{s("setMoreUsers",e.data.users),s("setIsLoaderVisible",!1)}))}}},Je={state:()=>({positions:[],token:"",loaderVisible:!1,isUser:!1}),getters:{Positions:e=>e.positions,Token:e=>e.token,LoaderVisible:e=>e.loaderVisible},mutations:{setPositions:(e,s)=>{e.positions=s},setToken:(e,s)=>{e.token=s},setLoaderVisible:(e,s)=>{e.loaderVisible=s},setIsUser:(e,s)=>{e.isUser=s}},actions:{getPositions:({commit:e})=>{Ye.Z.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((s=>{s.data.success?e("setPositions",s.data.positions):alert("ku-ku")}))},getToken:({commit:e})=>{Ye.Z.get("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((s=>{s.data.success&&e("setToken",s.data.token)}))},setUser:({commit:e,getters:s},t)=>{e("setLoaderVisible",!0),Ye.Z.post("https://frontend-test-assignment-api.abz.agency/api/v1/users",t.formData,{headers:{"Content-Type":"multipart/form-data",token:s.Token}}).then((s=>{s.data.success&&(e("setIsUser",!0),e("setLoaderVisible",!1))}))},setLoader:({commit:e},s)=>{e("setLoaderVisible",s)}}};var Xe=(0,Ne.MT)({modules:{users:Ae,login:Je}});const Qe=(0,o.ri)(b);Ke.forEach((e=>{Qe.component(e.name,e)})),Qe.use(xe).use(Xe).mount("#app")}},s={};function t(o){var r=s[o];if(void 0!==r)return r.exports;var n=s[o]={exports:{}};return e[o](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(s,o,r,n){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],n=e[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(a=!1,n<i&&(i=n));if(a){e.splice(d--,1);var u=r();void 0!==u&&(s=u)}}return s}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,r,n]}}(),function(){t.d=function(e,s){for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/vue-test-task/"}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,o){var r,n,i=o[0],a=o[1],l=o[2],u=0;if(i.some((function(s){return 0!==e[s]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var d=l(t)}for(s&&s(o);u<i.length;u++)n=i[u],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},o=self["webpackChunktest_task_vuex"]=self["webpackChunktest_task_vuex"]||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3775)}));o=t.O(o)})();
//# sourceMappingURL=app.2d1fd968.js.map