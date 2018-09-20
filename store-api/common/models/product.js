'use strict';

module.exports = function(Product) {
  Product.observe('before save', function(ctx, next) {
    console.log(ctx.instance);
    next();
  });
  Product.observe('after save', function(ctx, next) {
    console.log(ctx.instance);
    next();
  });
};
