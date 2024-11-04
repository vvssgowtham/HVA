const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "ecommerce";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");
  const db = client.db(dbName);
  const catalog = db.collection("catalog");

  const data = {
    categories: [
      {
        category_name: "Men",
        category_products: [
          {
            id: "1",
            title: "Mens Kurta",
            price: "1199",
            compare_at_price: "1299",
            vendor: "Manyvar",
            badge_text: "Wedding Special",
            image:
              "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384",
            second_image:
              "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267",
          },
          {
            id: "2",
            title: "RCB Tshirt",
            price: "2199",
            compare_at_price: "4299",
            vendor: "Puma",
            badge_text: null,
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/27a1d087-dc81-46a0-9b86-505f6491b5931679431326265RoyalChallengersBangalore2023MensReplicaJersey1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/e0ac3f07-f869-4d36-a8fa-47bab62c579e1679431326230RoyalChallengersBangalore2023MensReplicaJersey3.jpg",
          },
          {
            id: "3",
            title: "Green Charm",
            price: "1399",
            compare_at_price: "1499",
            vendor: "Myntra",
            badge_text: "On offer",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22372642/2023/3/16/52d27507-a870-456b-addd-e62aefa0f79a1678911375020ESSLogoRegularFitMensT-Shirt1.jpg",
            second_image: "empty",
          },
          {
            id: "4",
            title: "Mens Tshirt",
            price: "599",
            compare_at_price: "799",
            vendor: "Myntra",
            badge_text: "New season",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24055686/2023/7/26/215a939a-b567-4110-9a2b-33d0e191d5c61690363492956-Ess-Multicolor-Mens-T-shirt-971690363492544-1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24055686/2023/7/26/51b94b0f-b2f1-4f40-a976-0a9b3110114c1690363492943-Ess-Multicolor-Mens-T-shirt-971690363492544-2.jpg",
          },
        ],
      },
      {
        category_name: "Women",
        category_products: [
          {
            id: "1w",
            title: "Women Kurti",
            price: "1199",
            compare_at_price: "1299",
            vendor: "Manyvar",
            badge_text: "New season",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/cb1a5027-184f-4c8a-a96b-154987ff47f31692955360626-HERENOW-Women-Kurtis-1661692955360126-1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/3c5fdff6-e41a-4bbe-9539-11c9ea6a1c8f1692955360564-HERENOW-Women-Kurtis-1661692955360126-3.jpg",
          },
          {
            id: "2w",
            title: "Yellow casual dress",
            price: "199",
            compare_at_price: "299",
            vendor: "Myntra",
            badge_text: null,
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19276232/2022/8/8/55497e43-260c-4a3f-865b-059d9edd861a1659942435451-Women-Yellow-Cotton-Mandarin-Collar-Top-3841659942434972-1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19276232/2022/8/8/c8c6a172-cd4d-4637-9078-2e791cd7dbfe1659942435386-Women-Yellow-Cotton-Mandarin-Collar-Top-3841659942434972-4.jpg",
          },
          {
            id: "3w",
            title: "Women Black & Golden A-Line Kurti",
            price: "1399",
            compare_at_price: "1499",
            vendor: "Myntra",
            badge_text: "On offer",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12834502/2020/11/26/e50bd870-573d-4f6f-9ebc-938bda01edc31606382198225WomenBlackMultiColourPrintedKurti1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12834502/2020/11/26/32c3c29c-5be7-4978-8e03-0851b2ed33601606382198380WomenBlackMultiColourPrintedKurti3.jpg",
          },
          {
            id: "4w",
            title: "METRO-FASHION",
            price: "1599",
            compare_at_price: "1799",
            vendor: "Myntra",
            badge_text: "New season",
            image:
              "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19381372/2022/8/4/4dc24e8c-f86c-4a85-80a3-a4941c84453b1659612869086METRO-FASHIONWomenBhandhaniPrintedKurtaandPantSetPureCotton1.jpg",
            second_image:
              "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19381372/2022/8/4/4dc24e8c-f86c-4a85-80a3-a4941c84453b1659612869086METRO-FASHIONWomenBhandhaniPrintedKurtaandPantSetPureCotton1.jpg",
          },
        ],
      },
      {
        category_name: "Kids",
        category_products: [
          {
            id: "1k",
            title: "Chicco",
            price: "1199",
            compare_at_price: "1399",
            vendor: "Myntra",
            badge_text: "Wedding Special",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14075186/2021/4/12/85af90ad-db0a-47ee-b26f-4b2168cc31ae1618209422880ChiccoBoysWhite1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14075186/2021/4/12/9a744074-86f3-4c0f-810b-2877e4bdf1701618209422918ChiccoBoysWhite3.jpg",
          },
          {
            id: "2k",
            title: "Girls White & Black Printed Sustainable Tracksuit",
            price: "2199",
            compare_at_price: "4299",
            vendor: "Myntra",
            badge_text: "New season",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15597052/2021/9/25/1fe8ff1f-6c80-402e-ac72-cbdccb8f77371632552170304Chicco1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15597052/2021/9/25/fc288e63-8e9e-4f02-8e70-1a3b7452674f1632552170439Chicco2.jpg",
          },
          {
            id: "3k",
            title: "Custom t-shirt",
            price: "1399",
            compare_at_price: "1499",
            vendor: "Myntra",
            badge_text: "On offer",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16951678/2022/1/27/167ed0a2-7936-4d1a-955b-dfff4e53f1281643289347488Tshirts1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16951678/2022/1/27/13822874-aa23-4eb6-ab6a-026021ea503a1643289347112Tshirts2.jpg",
          },
          {
            id: "4k",
            title: "Kids Tshirt",
            price: "599",
            compare_at_price: "799",
            vendor: "Myntra",
            badge_text: "New season",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16809172/2023/4/19/ebeec264-7dea-4f8c-88ed-1b9ccd6c6a301681901675455-mothercare-Infant-Girls-Pink--Blue-Printed-Cotton-Top-490168-1.jpg",
            second_image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16809172/2023/4/19/ebeec264-7dea-4f8c-88ed-1b9ccd6c6a301681901675455-mothercare-Infant-Girls-Pink--Blue-Printed-Cotton-Top-490168-1.jpg",
          },
        ],
      },
    ],
  };

  await catalog.insertOne(data);

  // Insert a new product into an existing category
  async function createProduct(categoryName, newProduct) {
    await catalog.updateOne(
      { category_name: categoryName },
      { $push: { category_products: newProduct } }
    );
    console.log(`Product added to category ${categoryName}`);
  }

  // Retrieve all products from a specific category
  async function readProducts(categoryName) {
    const category = await catalog.findOne({ category_name: categoryName });
    console.log(
      `Products in ${categoryName}:`,
      category ? category.category_products : "No category found"
    );
  }

  // Update the price of a specific product
  async function updateProductPrice(categoryName, productId, newPrice) {
    await catalog.updateOne(
      { category_name: categoryName, "category_products.id": productId },
      { $set: { "category_products.$.price": newPrice } }
    );
    console.log(
      `Price updated for product ID ${productId} in category ${categoryName}`
    );
  }

  // Delete a product from a specific category
  async function deleteProduct(categoryName, productId) {
    await catalog.updateOne(
      { category_name: categoryName },
      { $pull: { category_products: { id: productId } } }
    );
    console.log(
      `Product ID ${productId} deleted from category ${categoryName}`
    );
  }

  // Example usage
  const newProduct = {
    id: "5",
    title: "New Mens Jacket",
    price: "2999",
    compare_at_price: "3499",
    vendor: "Zara",
    badge_text: "Winter Collection",
    image: "https://example.com/jacket.jpg",
    second_image: "https://example.com/jacket_alt.jpg",
  };
  await createProduct("Men", newProduct);
  await readProducts("Men");
  await updateProductPrice("Men", "1", "1299");
  await deleteProduct("Men", "2");

  await client.close();
}

main().catch(console.error);
