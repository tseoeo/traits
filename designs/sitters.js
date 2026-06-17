// sitters.js — placeholder sitter records for the Lozeva prototypes.
// 1,412 deterministic, unique, invented names (BG + EN forms), 2016–2026.
// Replace with the real archive index when available.

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MALE_FIRST = [
  ["Иван", "Ivan"], ["Георги", "Georgi"], ["Димитър", "Dimitar"], ["Николай", "Nikolay"],
  ["Петър", "Petar"], ["Стефан", "Stefan"], ["Боян", "Boyan"], ["Калоян", "Kaloyan"],
  ["Христо", "Hristo"], ["Атанас", "Atanas"], ["Васил", "Vasil"], ["Емил", "Emil"],
  ["Любомир", "Lyubomir"], ["Тодор", "Todor"], ["Кирил", "Kiril"], ["Александър", "Alexandar"],
  ["Милен", "Milen"], ["Огнян", "Ognyan"], ["Светослав", "Svetoslav"], ["Явор", "Yavor"],
  ["Борис", "Boris"], ["Виктор", "Viktor"], ["Деян", "Deyan"], ["Здравко", "Zdravko"],
  ["Илия", "Iliya"], ["Красимир", "Krasimir"], ["Мартин", "Martin"], ["Никола", "Nikola"],
  ["Орлин", "Orlin"], ["Пламен", "Plamen"], ["Росен", "Rosen"], ["Стоян", "Stoyan"]
];
const FEMALE_FIRST = [
  ["Мария", "Maria"], ["Елена", "Elena"], ["Анна", "Anna"], ["Теодора", "Teodora"],
  ["Виктория", "Viktoria"], ["Калина", "Kalina"], ["Десислава", "Desislava"], ["Ирина", "Irina"],
  ["Надежда", "Nadezhda"], ["Силвия", "Silvia"], ["Йоана", "Yoana"], ["Магдалена", "Magdalena"],
  ["Росица", "Rositsa"], ["Албена", "Albena"], ["Зорница", "Zornitsa"], ["Вера", "Vera"],
  ["Богдана", "Bogdana"], ["Екатерина", "Ekaterina"], ["Лилия", "Lilia"], ["Невена", "Nevena"],
  ["Антония", "Antonia"], ["Биляна", "Bilyana"], ["Гергана", "Gergana"], ["Даниела", "Daniela"],
  ["Ева", "Eva"], ["Жана", "Zhana"], ["Ивелина", "Ivelina"], ["Кристина", "Kristina"],
  ["Лора", "Lora"], ["Мирела", "Mirela"], ["Павлина", "Pavlina"], ["Радостина", "Radostina"]
];
const SURNAME = [
  ["Петров", "Petrov"], ["Иванов", "Ivanov"], ["Димитров", "Dimitrov"], ["Стоянов", "Stoyanov"],
  ["Колев", "Kolev"], ["Христов", "Hristov"], ["Маринов", "Marinov"], ["Тодоров", "Todorov"],
  ["Ангелов", "Angelov"], ["Василев", "Vasilev"], ["Попов", "Popov"], ["Николов", "Nikolov"],
  ["Атанасов", "Atanasov"], ["Георгиев", "Georgiev"], ["Михайлов", "Mihaylov"], ["Бонев", "Bonev"],
  ["Драганов", "Draganov"], ["Кирилов", "Kirilov"], ["Станчев", "Stanchev"], ["Йотов", "Yotov"],
  ["Вълчев", "Valchev"], ["Каменов", "Kamenov"], ["Лазаров", "Lazarov"], ["Симеонов", "Simeonov"],
  ["Балев", "Balev"], ["Генов", "Genov"], ["Дончев", "Donchev"], ["Желев", "Zhelev"],
  ["Захариев", "Zahariev"], ["Калчев", "Kalchev"], ["Манолов", "Manolov"], ["Найденов", "Naydenov"],
  ["Обретенов", "Obretenov"], ["Павлов", "Pavlov"], ["Рашков", "Rashkov"], ["Савов", "Savov"],
  ["Терзиев", "Terziev"], ["Узунов", "Uzunov"], ["Филипов", "Filipov"], ["Цанев", "Tsanev"]
];
const INTL = [
  ["Вернер Хольм", "Werner Holm"], ["Жулиет Морел", "Juliette Morel"],
  ["Андрей Палади", "Andrei Paladi"], ["Орхан Демир", "Orhan Demir"],
  ["Мирей Кастел", "Mireille Castel"], ["Ласло Барта", "László Barta"],
  ["Грета Линдквист", "Greta Lindqvist"], ["Томас Ройтер", "Thomas Reuter"],
  ["Елиф Сойлу", "Elif Soylu"], ["Марко Виситин", "Marco Visintin"],
  ["Агнешка Зелинска", "Agnieszka Zielińska"], ["Йонас Бек", "Jonas Beck"],
  ["Ана Думитреску", "Ana Dumitrescu"], ["Пьотр Олшевски", "Piotr Olszewski"],
  ["Хана Кралова", "Hana Králová"], ["Дауд Насер", "Daoud Nasser"],
  ["Ингрид Сольберг", "Ingrid Solberg"], ["Клаус Майер", "Klaus Meier"],
  ["Леа Фонтен", "Léa Fontaine"], ["Милан Хорват", "Milan Horvat"],
  ["Нурия Серано", "Nuria Serrano"], ["Око Танака", "Oko Tanaka"],
  ["Паоло Брандо", "Paolo Brando"], ["Рут Ангер", "Ruth Anger"],
  ["Сорин Влад", "Sorin Vlad"], ["Тереза Новак", "Tereza Novak"],
  ["Уве Линдер", "Uwe Linder"], ["Фьодор Гранин", "Fyodor Granin"],
  ["Хелга Бьорн", "Helga Björn"], ["Чарлс Уитби", "Charles Whitby"],
  ["Ширин Фарах", "Shirin Farah"], ["Ясмин Халил", "Yasmin Khalil"]
];
const CLIENTS = [
  ["за „Капитал“", "for Kapital"],
  ["за Президентството", "for the Presidency"],
  ["за „Дневник“", "for Dnevnik"],
  ["за Народния театър", "for the National Theatre"],
  ["за Гьоте-институт", "for the Goethe-Institut"],
  ["за списание „Едно“", "for Edno magazine"],
  ["за БНТ", "for BNT"],
  ["за „Банкеръ“", "for Banker"],
  ["за Софийската опера", "for the Sofia Opera"]
];

function build() {
  const rnd = mulberry32(19951412);
  const out = [];
  const seen = new Set();
  while (out.length < 1412) {
    let bg, en;
    const r = rnd();
    if (r < 0.10) {
      const p = INTL[Math.floor(rnd() * INTL.length)];
      bg = p[0]; en = p[1];
    } else {
      const female = rnd() < 0.5;
      const first = (female ? FEMALE_FIRST : MALE_FIRST)[Math.floor(rnd() * 32)];
      const sur = SURNAME[Math.floor(rnd() * SURNAME.length)];
      bg = first[0] + " " + sur[0] + (female ? "а" : "");
      en = first[1] + " " + sur[1] + (female ? "a" : "");
    }
    if (seen.has(en)) continue; // uniqueness: every sitter appears once
    seen.add(en);
    const year = 2016 + Math.floor(rnd() * 11);
    let cBg = "", cEn = "";
    if (rnd() < 0.34) {
      const c = CLIENTS[Math.floor(rnd() * CLIENTS.length)];
      cBg = c[0]; cEn = c[1];
    }
    out.push({ id: 0, bg, en, year, cBg, cEn, t0: rnd() });
  }
  out.sort((a, b) => (a.year - b.year) || a.en.localeCompare(b.en));
  out.forEach((s, i) => { s.id = i + 1; });
  return out;
}

export const SITTERS = build();
export const TOTAL = 1412;
