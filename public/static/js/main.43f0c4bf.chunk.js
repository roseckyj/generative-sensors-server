(this["webpackJsonpgenerative-sensors"]=this["webpackJsonpgenerative-sensors"]||[]).push([[0],{35:function(e,n,s){},43:function(e,n,s){"use strict";s.r(n);var t=s(13),o=s.n(t),r=s(25),i=s.n(r),c=s(0),a=s(3),l=s(1),u=s(2),h=s(23),d=s.n(h),v=(s(35),s(24)),p=s.n(v),f=s(26),O=s(17),b=s(30);function m(e){return void 0!==e&&null!==e}var y=["accelerometer","gyroscope","magnetometer"],j=function(){function e(){Object(c.a)(this,e)}return Object(a.a)(e,null,[{key:"exists",get:function(){return null!==this.socket}},{key:"send",value:function(){if(this.socket){console.log(this.sensors);var e={Accelerometer:m(this.sensors.Accelerometer.x)?{x:this.sensors.Accelerometer.x,y:this.sensors.Accelerometer.y,z:this.sensors.Accelerometer.z}:null,Gyroscope:m(this.sensors.Gyroscope.x)?{x:this.sensors.Gyroscope.x,y:this.sensors.Gyroscope.y,z:this.sensors.Gyroscope.z}:null,LinearAccelerationSensor:m(this.sensors.LinearAccelerationSensor.x)?{x:this.sensors.LinearAccelerationSensor.x,y:this.sensors.LinearAccelerationSensor.y,z:this.sensors.LinearAccelerationSensor.z}:null,AbsoluteOrientationSensor:m(this.sensors.AbsoluteOrientationSensor.quaternion)?{x:this.sensors.AbsoluteOrientationSensor.quaternion[0],y:this.sensors.AbsoluteOrientationSensor.quaternion[1],z:this.sensors.AbsoluteOrientationSensor.quaternion[2],w:this.sensors.AbsoluteOrientationSensor.quaternion[3]}:null,RelativeOrientationSensor:m(this.sensors.RelativeOrientationSensor.quaternion)?{x:this.sensors.RelativeOrientationSensor.quaternion[0],y:this.sensors.RelativeOrientationSensor.quaternion[1],z:this.sensors.RelativeOrientationSensor.quaternion[2],w:this.sensors.RelativeOrientationSensor.quaternion[3]}:null};this.socket.send("data",e)}}},{key:"create",value:function(){var e=this;if(!this.socket){this.socket=Object(b.a)("https://generative-sensors.herokuapp.com/"),this.socket.on("connect",(function(){console.log("[Socket] connected")})),this.socket.on("disconnect",(function(){console.log("[Socket] disconnected")})),this.socket.on("message",(function(n,s){if("id"===n)e.id=s})),this.socket.connect(),this.sensors={Accelerometer:new O.b({frequency:60}),Gyroscope:new O.c,LinearAccelerationSensor:new O.d({frequency:60}),AbsoluteOrientationSensor:new O.a({frequency:60}),RelativeOrientationSensor:new O.e({frequency:60})};try{DeviceMotionEvent.requestPermission()}catch(n){}return Promise.all(y.map(function(){var e=Object(f.a)(p.a.mark((function e(n){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.permissions.query({name:n});case 3:return s=e.sent,e.abrupt("return",s);case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}())).then((function(n){Object.values(e.sensors).forEach((function(e){return e.start()}))})).catch((function(e){return console.warn(e)})),setInterval((function(){return e.send()}),50),this.socket}}}]),e}();j.sensors=void 0,j.socket=null,j.id=void 0;var S=s(6),x=function(e){Object(l.a)(s,e);var n=Object(u.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=n.call(this,e)).state={},j.create(),t}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.forceUpdate()}),1e3)}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"wrapper",onClick:function(){d.a.isEnabled&&d.a.request()},children:[Object(S.jsxs)("div",{className:"status",children:[Object(S.jsx)("div",{className:m(j.sensors.Accelerometer.x)?"accepted":void 0,children:"Accelerometer"}),Object(S.jsx)("div",{className:m(j.sensors.Gyroscope.x)?"accepted":void 0,children:"Gyroscope"}),Object(S.jsx)("div",{className:m(j.sensors.LinearAccelerationSensor.x)?"accepted":void 0,children:"LinearAccelerationSensor"}),Object(S.jsx)("div",{className:m(j.sensors.AbsoluteOrientationSensor.quaternion)?"accepted":void 0,children:"AbsoluteOrientationSensor"}),Object(S.jsx)("div",{className:m(j.sensors.RelativeOrientationSensor.quaternion)?"accepted":void 0,children:"RelativeOrientationSensor"})]}),Object(S.jsx)("div",{className:"id",children:j.id?j.id:"Connecting..."})]})}}]),s}(o.a.Component),A=window.location;"https:"===A.protocol||A.href.includes("localhost")||A.replace("https:".concat(A.href.substring(A.protocol.length))),i.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.43f0c4bf.chunk.js.map