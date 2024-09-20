const sampleData = {
  name: "John Doe",
  age: 30,
  isMember: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    postalCode: "12345",
  },
  purchases: [
    {
      item: "Laptop",
      price: 999.99,
    },
    {
      item: "Headphones",
      price: 199.99,
    },
  ],
  categories: [
    { category_name: "Men", category_products: [Array] },
    { category_name: "Women", category_products: [Array] },
    { category_name: "Kids", category_products: [Array] },
  ],
};

console.log(sampleData.categories[0].category_name);

//     // 2. READ - Retrieve all products from a specific category
//const getAllProducts = await collection.findOne({});
//console.log(getAllProducts.categories[2].category_products);

//     // 3. UPDATE - Update the price of a specific product
//     const updateProductPrice = async (categoryName, productId, newPrice) => {
//       const filter = {
//         "categories.category_name": categoryName,
//         "categories.category_products.id": productId,
//       };
//       const update = {
//         $set: {
//           "categories.$[cat].category_products.$[prod].price": newPrice,
//         },
//       };
//       const options = {
//         arrayFilters: [
//           { "cat.category_name": categoryName },
//           { "prod.id": productId },
//         ],
//       };
//       const result = await collection.updateOne(filter, update, options);
//       console.log("Product Price Updated:", result.modifiedCount);
//     };

//     // Update the price of product with id '5k' in 'Kids' category
//     await updateProductPrice("Kids", "5k", "1499");

//     // 4. DELETE - Delete a product from a specific category
//     const deleteProduct = async (categoryName, productId) => {
//       const filter = { "categories.category_name": categoryName };
//       const update = {
//         $pull: {
//           "categories.$.category_products": { id: productId },
//         },
//       };
//       const result = await collection.updateOne(filter, update);
//       console.log("Product Deleted:", result.modifiedCount);
//     };

//     // Delete the product with id '5k' from 'Kids' category
//     await deleteProduct("Kids", "5k");
