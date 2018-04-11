import { graphql } from "react-apollo";

const fixture = {
  id: 952,
  items_qty: 2,
  items: [
    {
      name: "Black LED Shoes",
      qty: 1,
      item_id: "35814",
      sku: "SH-Black-42",
      product: {
        imageUrl:
          "https://demo.front-commerce.com/media/catalog/product/b/l/black-led-shoes.jpg"
      },
      priceInfo: {
        rowTotalInclTax: {
          includeTax: true,
          value: {
            amount: 199.99,
            currency: "EUR"
          }
        }
      }
    },

    {
      name: "Black LED Shoes",
      qty: 1,
      item_id: "35815",
      sku: "SH-Black-42",
      product: {
        imageUrl:
          "https://demo.front-commerce.com/media/catalog/product/b/l/black-led-shoes.jpg"
      },
      priceInfo: {
        rowTotalInclTax: {
          includeTax: true,
          value: {
            amount: 199.99,
            currency: "EUR"
          }
        }
      }
    }
  ],
  totals: {
    subtotalInclTax: {
      includeTax: true,
      value: {
        amount: 199.99,
        currency: "EUR"
      }
    },
    totalInclTax: {
      includeTax: true,
      value: {
        amount: 199.99,
        currency: "EUR"
      }
    },
    totalExclTax: {
      includeTax: true,
      value: {
        amount: 159.99,
        currency: "EUR"
      }
    },
    tax: {
      includeTax: true,
      value: {
        amount: 39.99,
        currency: "EUR"
      }
    }
  }
};

export default CartQuery =>
  graphql(CartQuery, {
    props: ({ data }) => ({
      cart: fixture,
      loading: false
    })
  });
