var Module=function(){var opts=arguments[0]||{};this.steps=opts.steps||5,this.stack=[]};Module.prototype.add=function(foo){this.stack.push(foo),this.stack.length>this.steps&&this.stack.shift();var bar=0,that=this;if(this.stack.forEach(function(e,i){bar+=e}),this.stack.length<this.steps)return bar/this.stack.length;for(var bar=0,total=0,i=this.steps-1;0<i;i--)bar+=this.stack[i]*i,total+=i;return bar/total},module.exports=Module;