let wordsArr = [];
let header = document.querySelector("header");
let cardText = document.querySelector(".card__text");
let buttonNext = document.querySelector(".next");

let themes = ["miesiące", "pogoda i klimat"];
let words = {
  miesiące: [
    "Декабрь",
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  pogoda: [
    "Осадки",
    "Дождь",
    "Снег",
    "Мокрый снег",
    "Солнце",
    "Луна",
    "Облака",
    "Ветер",
    "Мороз",
    "Жара",
    "Влажность",
    "Иней",
    "Гололедица",
    "Метель",
    "Тепло",
    "Холодно",
    "Ветрено",
    "Мокро",
    "Солнечно",
    "Похмурно",
    "Морозно",
    "Жарко",
  ],
  odzież: [
    "Рубашка",
    "Свитер",
    "Футболка",
    "Брюки",
    "Юбка",
    "Платье",
    "Пиджак",
    "Костюм женский",
    "Костюм мужской",
    "Ремень",
    "Носки",
    "Колготки",
    "Майка",
    "Бюстгальтер",
    "Кофта",
    "Куртка",
    "Пальто",
    "Мех",
    "Шапка",
    "Джинсы",
    "Безрукавка",
    "Ночная рубашка",
    "Пижама",
    "Ботинки",
    "Обувь",
    "Шорты",
    "Купальник",
    "Плавки",
    "Халат",
  ],
  emocje: [
    "Хороший",
    "Гадкий",
    "Высокий",
    "Средний",
    "Низкий",
    "Большой",
    "Малый",
    "Худой",
    "Толстый",
    "Умный",
    "Агрессивный",
    "Активный",
    "Эмоциональный",
    "Уставший",
    "Творческий",
    "Внимательный",
    "Спокойный",
    "Радостный",
    "Честный",
    "Открытый",
    "Щедрый",
    "Ревнивый",
    "Жестокий",
    "Ленивый",
    "Сильный",
    "Слабый",
    "Упрямый",
  ],
  owoce: [
    "лимон",
    "арбуз",
    "банан",
    "персик",
    "черешня",
    "орех",
    "яблоко",
    "слива",
    "абрикос",
    "грейпфрут",
    "виноград",
    "вишня",
    "киви",
    "кокос",
    "клубника",
    "крыжовник",
    "инжир",
    "гранат",
    "черника",
    "ежевика",
    "хурма",
    "мандарин",
    "малина",
    "клюква",
  ],
  warzywa: [
    "картофель",
    "горох",
    "перец чили",
    "капуста",
    "огурец",
    "помидор",
    "кабачок",
    "редис",
    "морковь",
    "сельдерей",
    "чеснок",
    "баклажан",
    "зеленый лук",
    "грибы",
    "кукуруза",
    "брокколи",
    "лук",
    "перец",
    "фасоль",
    "петрушка",
    "щавель",
    "тыква",
    "салат",
    "пекинская капуста",
    "репа",
    "укроп",
    "спаржа",
    "свекла",
  ]
};

for (let key in words) {
  if (words.hasOwnProperty(key)) {
    let button = document.createElement("div");
    button.className = "tag";
    button.innerText = `${key}`;
    header.append(button);
  }
}


var currentArray = [];

var btns = document.querySelectorAll(".tag");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    for (let key in words) {
      if (words.hasOwnProperty(key)) {
        if (key === e.target.innerText) {
          currentArray = words[key];
          showWord(currentArray);
        }
      }
    }
  });
});

buttonNext.addEventListener("click", function (e) {
  showWord(currentArray);
});

function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}

function showWord(array){
    let maxLength = array.length;
    let randomNumber = getRandomInt(maxLength);
    cardText.innerText = `${array[randomNumber]}`;
}