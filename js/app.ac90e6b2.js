(function(t){function e(e){for(var n,a,o=e[0],l=e[1],h=e[2],c=0,u=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&u.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,h||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/pathfinding-visualizer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1d85":function(t,e,i){},2249:function(t,e,i){"use strict";var n=i("e42f"),s=i.n(n);s.a},"27ad":function(t,e,i){},"2b94":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"line"}}),i("head-box",{attrs:{alg:t.algorithm},scopedSlots:t._u([{key:"select",fn:function(){return[i("select",{directives:[{name:"model",rawName:"v-model",value:t.algorithm,expression:"algorithm"}],staticClass:"select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.algorithm=e.target.multiple?i:i[0]}}},[i("option",{staticStyle:{color:"#4fc08d"},attrs:{hidden:""}},[t._v(t._s(t.algorithm))]),i("option",[t._v("Breadth First Search")]),i("option",[t._v("Depth First Search")]),i("option",[t._v("Dijkstra Algorithm")]),i("option",[t._v("Bellman-Ford Algorithm")])]),i("br"),i("br")]},proxy:!0}])}),i("br"),i("br"),i("div",{attrs:{id:"temp"}},[i("box-grid",{ref:"grid",attrs:{alg:t.algorithm}}),i("content-box",{scopedSlots:t._u([{key:"button",fn:function(){return[i("div",{attrs:{id:"b"}},[i("button",{staticClass:"button",attrs:{pathArr:t.path},on:{click:function(e){t.$refs.grid.createGraph(),t.draw(),t.hold=!0,t.b="viz"}}},[t._v("Visualize")]),i("div",{attrs:{id:"distance"}},[i("span",[t._v(t._s(t.dist))]),i("label",{attrs:{for:""}},[i("small",[t._v("Distance")])])]),i("button",{staticClass:"button",on:{click:function(e){t.$refs.grid.createGraph(),t.drawi(),t.hold=!0,t.b="ins"}}},[t._v("Instant Path")])])]},proxy:!0},{key:"description",fn:function(){return["Depth First Search"==t.algorithm?i("p",[t._v("This may or may not give the shortest path")]):"SELECT AN ALGORITHM"==t.algorithm?i("p",[t._v("SELECT an algorithm and press VISUALIZE")]):i("p",[t._v("This gives the shortest path possible")])]},proxy:!0},{key:"controls",fn:function(){return[i("div",{attrs:{id:"b"}},[i("button",{staticClass:"button",on:{click:function(e){return t.$refs.grid.clearCanvas()}}},[t._v("Clear Canvas")]),i("button",{staticClass:"button",on:{click:function(e){return t.$refs.grid.clearPath()}}},[t._v("Clear Path")])])]},proxy:!0}])})],1),i("br"),i("br"),i("foot")],1)},r=[],a=(i("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"area"}},[i("tbody",t._l(t.row,(function(e){return i("tr",{key:e,attrs:{id:"row-"+e}},t._l(t.column,(function(n){return i("td",{key:n,staticClass:"unvisited",attrs:{id:e+"-"+n,"nodes[i][j]":t.id},on:{mouseover:function(i){return t.putWall(e+"-"+n)},click:[function(e){if(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return null;t.hold=!t.hold},function(e){return e.ctrlKey?t.update():null}]}})})),0)})),0)])}),o=[];i("99af"),i("cb29"),i("d81d"),i("fb6a");function l(){var t=[],e=0;this.getLength=function(){return t.length-e},this.isEmpty=function(){return 0==t.length},this.enqueue=function(e){t.push(e)},this.dequeue=function(){if(0!=t.length){var i=t[e];return 2*++e>=t.length&&(t=t.slice(e),e=0),i}},this.peek=function(){return 0<t.length?t[e]:void 0},this.show=function(){return t}}var h=l,d={components:{},props:{alg:{type:String,required:!0}},data:function(){return{row:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],column:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],hold:!1,nodes:new Array(22).fill(null).map((function(){return new Array(38).fill(null)})),path:new Array(22).fill(null).map((function(){return new Array(38).fill(null)})),si:11,sj:8,di:11,dj:29,count:0,pathArr:null,distance:0,draw:!0,visitedNodes:[],q:new h,edges:[],i:-1}},mounted:function(){var t=document.getElementById(String(this.si)+String("-")+String(this.sj)),e=document.getElementById(String(this.di)+String("-")+String(this.dj));t.className="sd",e.className="sd"},methods:{putWall:function(t){if(!0===this.hold&&1==this.draw){var e=document.getElementById(t);e.setAttribute("class","wall")}},insertEdges:function(){for(var t=0;t<=21;t++)for(var e=0;e<=37;e++){var i=this.nodes[t][e];"Bellman-Ford Algorithm"==this.alg&&(i.distance=1/0),t-1>=0&&0==this.nodes[t-1][e].hasWall&&(i.edges[0]=this.nodes[t-1][e],0==i.hasWall&&"Bellman-Ford Algorithm"==this.alg&&(this.edges=this.edges.concat({nodef:this.nodes[t][e],nodet:this.nodes[t-1][e]}))),t+1<=21&&0==this.nodes[t+1][e].hasWall&&(i.edges[1]=this.nodes[t+1][e],0==i.hasWall&&"Bellman-Ford Algorithm"==this.alg&&(this.edges=this.edges.concat({nodef:this.nodes[t][e],nodet:this.nodes[t+1][e]}))),e-1>=0&&0==this.nodes[t][e-1].hasWall&&(i.edges[2]=this.nodes[t][e-1],0==i.hasWall&&"Bellman-Ford Algorithm"==this.alg&&(this.edges=this.edges.concat({nodef:this.nodes[t][e],nodet:this.nodes[t][e-1]}))),e+1<=37&&0==this.nodes[t][e+1].hasWall&&(i.edges[3]=this.nodes[t][e+1],0==i.hasWall&&"Bellman-Ford Algorithm"==this.alg&&(this.edges=this.edges.concat({nodef:this.nodes[t][e],nodet:this.nodes[t][e+1]})))}},clearCanvas:function(){q.$emit("stop",{p:null,d:"∞"}),this.q=new h,this.visitedNodes=[],this.i=0,q.$emit("inst",!1);for(var t=0;t<=21;t++)for(var e=0;e<=37;e++)"visited"==document.getElementById(String(t)+String("-")+String(e)).className?document.getElementById(String(t)+String("-")+String(e)).className="unvisited":"wall"==document.getElementById(String(t)+String("-")+String(e)).className?document.getElementById(String(t)+String("-")+String(e)).className="unvisited":"path"==document.getElementById(String(t)+String("-")+String(e)).className&&(document.getElementById(String(t)+String("-")+String(e)).className="unvisited")},clearPath:function(){q.$emit("stop",{p:null,d:"∞"}),this.q=new h,this.visitedNodes=[],this.i=0;for(var t=0;t<=21;t++)for(var e=0;e<=37;e++)"visited"==document.getElementById(String(t)+String("-")+String(e)).className?document.getElementById(String(t)+String("-")+String(e)).className="unvisited":"path"==document.getElementById(String(t)+String("-")+String(e)).className&&(document.getElementById(String(t)+String("-")+String(e)).className="unvisited")},createGraph:function(){for(var t=0;t<=21;t++)for(var e=0;e<=37;e++){var i=document.getElementById(String(t)+String("-")+String(e)).id;this.nodes[t][e]={name:i,pi:t,pj:e,edges:[null,null,null,null],distance:0,hasWall:!1,visited:!1},"wall"==document.getElementById(i).className&&(this.nodes[t][e].hasWall=!0)}this.insertEdges()},BFSsearch:function(t){if(this.q.isEmpty())this.q.enqueue(this.nodes[this.si][this.sj]),this.path[this.si][this.sj]=[this.nodes[this.si][this.sj]];else if(0==this.q.isEmpty()){var e=this.q.dequeue();"sd"==document.getElementById(e.name).className?document.getElementById(e.name).className="sd":document.getElementById(e.name).className=1==t?"visited":"unvisited";for(var i=0;i<4;i++){var n=e.edges[i];null!=n&&0==n.distance&&(n.distance=e.distance+1,this.path[e.pi][e.pj]&&(this.path[n.pi][n.pj]=[n],this.path[n.pi][n.pj]=this.path[n.pi][n.pj].concat(this.path[e.pi][e.pj])),this.q.enqueue(n),n.pi==this.di&&n.pj==this.dj&&(this.pathArr=this.path[this.di][this.dj],this.distance=n.distance,q.$emit("stop",{p:this.pathArr,d:this.distance})))}}},checkEqual:function(t,e){for(var i=0;i<4;i++)if(t[i]!=e[i])return!1;return!0},DFShelper:function(t,e,i,n){if(this.nodes[t][e]){if(0!=this.nodes[t][e].visited)return;if(this.nodes[t][e].visited=!0,"sd"==document.getElementById(this.nodes[t][e].name).className?document.getElementById(this.nodes[t][e].name).className="sd":this.visitedNodes=this.visitedNodes.concat(this.nodes[t][e].name),0!=this.checkEqual(this.nodes[t][e].edges,[null,null,null,null]))return;for(var s=0;s<4;s++){var r=this.nodes[t][e].edges[s];if(null!=r){if(r.pi==i&&r.pj==n)return[r];var a=this.DFShelper(r.pi,r.pj,i,n);if(null!=a)return a.concat(r)}}}},DFS:function(){var t=this.DFShelper(this.si,this.sj,this.di,this.dj);if(null!=t)return[t,this.visitedNodes]},bellmanFord:function(){if(-1==this.i&&(this.nodes[this.si][this.sj].distance=0,this.i++),this.i>=0){if(this.i<835){for(var t=0;t<this.edges.length;t++)0==this.i&&("sd"!=document.getElementById(this.edges[t].nodef.name).className&&(this.visitedNodes=this.visitedNodes.concat([this.edges[t].nodef.name])),"sd"!=document.getElementById(this.edges[t].nodet.name).className&&(this.visitedNodes=this.visitedNodes.concat([this.edges[t].nodet.name]))),this.edges[t].nodef.distance+1<this.edges[t].nodet.distance&&(this.edges[t].nodet.distance=this.edges[t].nodef.distance+1,this.path[this.edges[t].nodet.pi][this.edges[t].nodet.pj]=[this.edges[t].nodet],this.path[this.edges[t].nodet.pi][this.edges[t].nodet.pj]=this.path[this.edges[t].nodet.pi][this.edges[t].nodet.pj].concat(this.path[this.edges[t].nodef.pi][this.edges[t].nodef.pj]));0==this.i&&q.$emit("visited",this.visitedNodes)}else q.$emit("stop",{p:this.path[this.di][this.dj],d:this.nodes[this.di][this.dj].distance});this.i++}}}},c=d,u=(i("d812"),i("2877")),g=Object(u["a"])(c,a,o,!1,null,null,null),p=g.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"content"}},[i("br"),t._t("button"),i("br"),t._t("description"),i("br"),t._t("controls"),i("br"),i("br"),i("hr",{attrs:{id:"col"}}),i("br"),i("br"),t._t("instant"),t._m(0),i("br"),i("p",[t._v("Press INSTANT PATH for a quick path")]),i("p",{attrs:{id:"inf"}},[t._v("Click the mouse button and move the pointer to draw walls. Click the mouse button again to stop drawing.")])],2)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"info"}},[i("span",{attrs:{id:"wall"}},[t._v("Wall")]),i("span",{attrs:{id:"nv"}},[t._v("Not visited")]),i("span",{attrs:{id:"v"}},[t._v("Visited")]),i("span",{attrs:{id:"path"}},[t._v("Path")])])}],v={components:{}},b=v,y=(i("a912"),Object(u["a"])(b,m,f,!1,null,"4743ce69",null)),_=y.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"h"}},[i("div",{attrs:{id:"header"}},[t._m(0),t._m(1),i("span",{attrs:{id:"sel"}},[t._t("select")],2)]),t._m(2),"Bellman-Ford Algorithm"==t.alg?i("p",{attrs:{id:"note"}},[t._v("This algorithm is slow, but more versatile")]):t._e(),"Breadth First Search"==t.alg?i("p",{attrs:{id:"note"}},[t._v("This algorithm is very fast, but can only be applied to unweighted graph")]):t._e(),"Depth First Search"==t.alg?i("p",{attrs:{id:"note"}},[t._v("This algorithm is slower, only good if the graph is mostly occupied")]):t._e(),"SELECT AN ALGORITHM"==t.alg?i("p",{attrs:{id:"note"}},[t._v("This graph is unweighted and travelling can be done only in UP🠝 DOWN🠟 LEFT🠜 RIGHT🠞")]):t._e()])},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{href:"https://github.com/Tinku10/pathfinding-visualizer/tree/alt-design",target:"_blank"}},[i("button",[i("b",[t._v("GITHUB")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("div",{staticClass:"img"}),i("div",[i("h2",{attrs:{id:"heading"}},[t._v("PATHFINDING"),i("br"),t._v("VISUALIZER")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",[i("section",[i("h4",[t._v("Select an algorithm")]),i("p",{staticClass:"content"},[t._v(" Try different algorithms from the dropdown to see its working. ")])]),i("section",[i("h4",[t._v("Put obstacles")]),i("p",{staticClass:"content"},[t._v(" Obstacles can be inserted in the path to see how the algorithm resolves around these obstacles. It is purely optional. ")])]),i("section",[i("h4",[t._v("Visualize")]),i("p",{staticClass:"content"},[t._v(" Intutive interface and options to quickly visualize the path-finding. Try the Instant Path feature to get a quick path. ")])])])}],E={components:{},props:{alg:{type:String,required:!0}}},w=E,B=(i("2249"),Object(u["a"])(w,S,N,!1,null,"194f1fba",null)),I=B.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"foot"}},[i("a",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{href:"https://github.com/Tinku10",target:"_blank"}},[i("div",{attrs:{id:"logo"}})]),i("div",[t._v("❮ ❯ with ❤ by tinku")])])}],A={components:{}},k=A,$=(i("738e"),Object(u["a"])(k,j,F,!1,null,"9060a92c",null)),T=$.exports,x={components:{"box-grid":p,"content-box":_,"head-box":I,foot:T},data:function(){return{path:null,dist:"∞",hold:!1,count:200,algorithm:"SELECT AN ALGORITHM",noPath:!0,visitedNodes:null,i:-1,b:null}},created:function(){var t=this;q.$on("stop",(function(e){t.path=e.p,t.dist=e.d,t.count=0,t.hold=!1,t.noPath=!0,t.visitedNodes=null,t.i=-1})),q.$on("visited",(function(e){t.visitedNodes=e})),this.interval=setInterval((function(){return t.draw()}),15),this.interval=setInterval((function(){return t.drawPath()}),20)},methods:{drawPath:function(){"Depth First Search"==this.algorithm&&null!=this.path&&this.i==this.visitedNodes.length?(this.dist=this.path.length,this.count<this.path.length&&("sd"!=document.getElementById(this.path[this.count].name).className&&(document.getElementById(this.path[this.count].name).className="path"),this.count++)):"Breadth First Search"==this.algorithm?this.count<this.path.length-1&&("sd"!=document.getElementById(this.path[this.count].name).className&&(document.getElementById(this.path[this.count].name).className="path"),this.count++):"Bellman-Ford Algorithm"==this.algorithm&&null!=this.path&&(this.dist=this.path.length-1,this.count<this.path.length&&("sd"!=document.getElementById(this.path[this.count].name).className&&(document.getElementById(this.path[this.count].name).className="path"),this.count++))},drawi:function(){if("Breadth First Search"==this.algorithm)while(null==this.path)this.$refs.grid.BFSsearch(!1);else if("Bellman-Ford Algorithm"==this.algorithm)while(null==this.path)this.$refs.grid.bellmanFord()},draw:function(){if("Breadth First Search"==this.algorithm&&"viz"==this.b)null==this.path&&this.$refs.grid.BFSsearch(!0);else if("Depth First Search"==this.algorithm){var t=null;-1==this.i?(t=this.$refs.grid.DFS(),this.path=t[0],this.visitedNodes=t[1],this.i++):"viz"==this.b?this.i<this.visitedNodes.length&&(document.getElementById(this.visitedNodes[this.i]).className="visited",this.i++):this.i=this.visitedNodes.length}else if("Bellman-Ford Algorithm"==this.algorithm&&1==this.hold&&"viz"==this.b&&(this.$refs.grid.bellmanFord(),"viz"==this.b&&null!=this.visitedNodes))for(var e=0;e<10;e++)document.getElementById(this.visitedNodes[this.i+1]).className="visited",this.i++}}},P=x,C=(i("9028"),Object(u["a"])(P,s,r,!1,null,"45c11021",null)),O=C.exports;i.d(e,"bus",(function(){return q})),n["a"].config.productionTip=!1;var q=new n["a"];new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"738e":function(t,e,i){"use strict";var n=i("1d85"),s=i.n(n);s.a},9028:function(t,e,i){"use strict";var n=i("2b94"),s=i.n(n);s.a},a912:function(t,e,i){"use strict";var n=i("27ad"),s=i.n(n);s.a},b790:function(t,e,i){},d812:function(t,e,i){"use strict";var n=i("b790"),s=i.n(n);s.a},e42f:function(t,e,i){}});
//# sourceMappingURL=app.ac90e6b2.js.map