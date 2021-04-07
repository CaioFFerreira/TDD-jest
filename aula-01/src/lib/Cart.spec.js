import Cart from "./Cart.js";

describe("Cart", () => {
  let cart;
  let product = {
    title: "Adidas",
    price: 35388,
  };

  let product2 = {
    title: "Adidas - woman",
    price: 41872,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe("getTotal", () => {
    it("Should return 0 whan getTotal() is executed in a newly created", () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it("Should multiply quantity and price and receive the total  amount", () => {
      const item = {
        product,
        quantity: 2, // 70776
      };
      cart.add(item);
      expect(cart.getTotal()).toEqual(70776);
    });

    it("Should ensure no more than on product exists at a time", () => {
      cart.add({
        product,
        quantity: 2, // 70776
      });
      cart.add({
        product,
        quantity: 1, // 35388
      });
      expect(cart.getTotal()).toEqual(35388);
    });

    it("Should update total when a product gets included and then removed", () => {
      cart.add({
        product,
        quantity: 2, // 70776
      });

      cart.add({
        product: product2,
        quantity: 1, // 70776
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(41872);
    });

    
  });

  describe("checkout", () => {
    it("should return an object with the total and the list of items", () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 2,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });
    it("should reset the cart whan checkout() is called", () => {
      cart.add({
        product,
        quantity: 3,
      });
      cart.checkout();

      expect(cart.getTotal()).toEqual(0);
    })

    it("should return an object with the total and the list of items when summay is called", () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 2,
      });

      expect(cart.sumary()).toMatchSnapshot();
      expect(cart.getTotal()).toBeGreaterThan(0);
    });
  });
});
