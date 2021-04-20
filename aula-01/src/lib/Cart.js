import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';

const Money = Dinero;

export default class Cart {
 items = []

  add(item) {
    const itemTofind = { product: item.product};
    if(find(this.items, itemTofind)) {
      remove(this.items, itemTofind);
    }
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product })
  }


  getTotal() {
   return this.items.reduce( (acc, item) => {
     return acc + item.quantity * item.product.price;
    },0)
  }
  sumary() {
    const total = this.getTotal()
    const items = this.items

    return {
      total,
      items,
    }
  }

  checkout() {
    const { total, items } = this.sumary()

    this.items = []

    return {
      total,
      items,
    }
  }

}