(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueKonva2 = factory());
}(this, (function () { 'use strict';

  const VueKonva2 = {
    test() {
      console.log('vue-konva2');
    }
  };

  return VueKonva2;

})));
