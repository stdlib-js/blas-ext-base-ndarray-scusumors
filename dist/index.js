"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=q(function(l,s){
var c=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),t=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),o=require('@stdlib/blas-ext-base-scusumors/dist').ndarray;function m(i){var r=i[0],e=i[1],n=d(i[2]);return o(c(r,0),n,u(r),a(r,0),t(r),u(e),a(e,0),t(e)),e}s.exports=m
});var f=v();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
