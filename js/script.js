/*                          --1--
        1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
    бал і кількість пропущених занять
        2) написати метод який буде виводити цю інформацію
        3) написати три варіанти студентів
        4) прикріпити знначення за допомогою call apply bind
*/
/*
const student = {
    name: "Ivan",
    age: 16,
    meanGrade: 7.8,
    skipOfTheLessons: 4,
    showinfo: function () {
        console.log(
            " Student " + this.name + " Age: " + this.age + " Mean grade: " + this.meanGrade + " Skipping lessons: " + this.skipOfTheLessons
        );
    },
};

student2 = {
    name: "Ilya",
    age: 15,
    meanGrade: 6.4,
    skipOfTheLessons: 6
};

student3 = {
    name: "Danil",
    age: 17,
    meanGrade: 9.9,
    skipOfTheLessons: 1
};

student.showinfo.bind(student)();
student.showinfo.call(student2);
student.showinfo.apply(student3);
*/

/*                          --2--
Написати дві кнопки і закріпити на них функції
при натисканні на кнопку html - має видати коротке визначення що це таке
при натисканні на кнопку css - має видати коротке визначення що це таке
*/

/*
 const cart = {
   showItems() {
     console.log(this.items);
 },
};

const woman = {
  items: ["стандартизована мова розмітки документів для перегляду вебсторінок у браузері."],
};

const man = {
  items: ["це спеціальна мова (мова стилів), за допомогою якої описують вигляду документів"],
};

document
  .querySelector("#wom")
  .addEventListener("click", cart.showItems.bind(woman));

document
   .querySelector("#man")
   .addEventListener("click", cart.showItems.bind(man));
*/




/*                        --3--
Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
функція має повертати назву товару і вартість
перевірити на варіантах:
1) banana 30, 4,5
2) cherry 58, 1,3
3) orange 89. 3,4
*/
/*
const store = {
    name: "Банан",
    value: 30,
    amount: 4.5,
    showinfo: function () {
        console.log(
            "Товар: " + this.name + " Кiлькiсть: " + this.value + " Вартiсть: " + this.amount
        );
    },
};

cherry = {
    name: "Вишня",
    value: 58,
    amount: 1.3,
};

orange = {
    name: "Апельсин",
    value: 89,
    amount: 3.4
};

store.showinfo.call(store);
*/