// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const toBuyList = [
  {
   product: 'shampoo',
   amount: 3,
   acquired: true,
   price: 9,
   summ: 27,
  },
  {
   product: 'tissues',
   amount: 2,
   acquired: false,
   price: 1,
   summ: 2,
  },
  {
   product: 'milk',
   amount: 1,
   acquired: true,
   price: 3,
   summ: 3,
  },
  {
   product: 'avocado',
   amount: 3,
   acquired: true,
   price: 2,
   summ: 6,
  }
];

console.log(toBuyList);

function showAcquiredItems() {
  const acquiredItems = toBuyList.filter(item => item.acquired);

  return acquiredItems;
}
console.log(showAcquiredItems());


function markProductAsPurchased(productName) {
  for (let i = 0; i < toBuyList.length; i++) {
    if (toBuyList[i].product === productName) {
      toBuyList[i].acquired = true;
      console.log(`Product ${productName} marked as purchased.`);

      return;
    }
  }
  console.log(`You don't need to buy the ${productName}.`);
}

markProductAsPurchased('toys');
console.log(toBuyList);

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function removeProduct(productName) {
  const changedList = toBuyList.filter(item => item.product !== productName);
  console.log(changedList);
}

removeProduct('milk');


// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.


function addPurchase(productName, purchaseAmount, purchasePrice = toBuyList.price) {
  let existingProduct = toBuyList.find(item => item.product === productName);

  if (existingProduct) {
    existingProduct.amount += purchaseAmount;
    existingProduct.summ += purchaseAmount * purchasePrice;
  } else {
    const newProduct = {
    product: productName,
    amount: purchaseAmount,
    acquired: false,
    price: purchasePrice,
    summ: purchaseAmount * purchasePrice, 
    };

    toBuyList.push(newProduct);
  }

  console.log(`${productName} added to the list.`);
}

addPurchase('ice cream', 2, 3);
addPurchase('avocado', 4, 6);
console.log(toBuyList);