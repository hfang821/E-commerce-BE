// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
  //Ask TA: DO I need OnDelete Cascade here?
});

//Ask Ta: can sequelize tell "category_id" is the 'id' of the category model?
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

//Ask Ta: Need some explanation of the through statement here.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
