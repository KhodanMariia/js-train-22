// Одиночка (Singleton) — це патерн програмування, який забезпечує,
// що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.

// Клас OrderTracker відповідає за відстеження замовлень
class OrderTracker {
  // Приватне статичне instance поле для збереження єдиного екземпляра класу початкове значення null
  static #instance = null;

  // Приватне статичне orders поле для збереження списку замовлень початкове значення []
  static #orders = [];

  /**
   * Статичний метод create використовується для створення єдиного екземпляра класу
   */
  static create() {
    // Перевіряємо, чи є вже створений екземпляр класу
    if (!OrderTracker.#instance) {
      // Якщо немає, створюємо новий екземпляр
      OrderTracker.#instance = new OrderTracker();
    } else {
      // Інакше повертаємо єдиний екземпляр класу
      return OrderTracker.#instance;
    }
  }
  /**
   * Статичний метод add використовується для додавання замовлення до списку
   */
  static add(item) {
    //Отримує item та додає його до масиву замовлень
    OrderTracker.#orders.push(item);
  }
  /**
   * Статичний метод get використовується для отримання списку замовлень
   */
  static get() {
    return OrderTracker.#orders;
  }
}
console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо єдиний екземпляр класу OrderTracker
const tracker = OrderTracker.create();

// Додаємо замовлення до списку
OrderTracker.add("Телефон");
OrderTracker.add("Ноутбук");

// Отримуємо список замовлень
const orders = OrderTracker.get();

// Виводимо список замовлень в консоль
console.log(orders);
