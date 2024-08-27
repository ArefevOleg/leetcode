// Напишите функцию  createHelloWorld. Она должна возвращать новую функцию,
// которая всегда возвращает  "Hello World".
// Пример:
// Ввод: args = []
//  Вывод: "Hello World"
//  Пояснение:
// const f = createHelloWorld();
// f(); // "Привет, мир"
// Функция, возвращаемая createHelloWorld, всегда должна возвращать «Hello World».

var createHelloWorld = function() {
  return function(...args) {
    return "Hello World";
  }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */