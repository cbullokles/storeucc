'use strict';

module.exports = function(Purchase) {
  Purchase.observe('before save', function(ctx, next) {
    const myPurchase = ctx.instance;
    console.log(myPurchase);
    Purchase.app.models.product.findById(myPurchase.productId,
        function(error, prod) {
          console.log(prod);
          if (prod.stock >= myPurchase.quantity) {
            prod.stock = prod.stock - myPurchase.quantity;
            prod.save(function(error, response) {
              ctx.instance.unitPrice = prod.price;
            });
          } else {
            ctx.instance.status = 'NO_STOCK';
          }
          next();
        });
  });
};
