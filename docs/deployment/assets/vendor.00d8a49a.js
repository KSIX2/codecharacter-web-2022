var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;const a=e=>r=>{return"function"==typeof r?(t=e,i=r,window.customElements.define(t,i),i):((e,r)=>{const{kind:t,elements:i}=r;return{kind:t,elements:i,finisher(r){window.customElements.define(e,r)}}})(e,r);var t,i},l=(e,a)=>{return"method"===a.kind&&a.descriptor&&!("value"in a.descriptor)?(l=((e,r)=>{for(var t in r||(r={}))n.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))o.call(r,t)&&c(e,t,r[t]);return e})({},a),r(l,t({finisher(r){r.createProperty(a.key,e)}}))):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:a.key,initializer(){"function"==typeof a.initializer&&(this[a.key]=a.initializer.call(this))},finisher(r){r.createProperty(a.key,e)}};var l};function s(e){return(r,t)=>{return void 0!==t?(i=e,n=t,void r.constructor.createProperty(n,i)):l(e,r);var i,n}}export{s as e,a as n};
