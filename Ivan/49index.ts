// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface Hours<T extends string | number> {
  total: T;
  inMenu: T;
}

interface PlayerData<GameType, HoursType, ServerType = string> {
  game: GameType;
  hours: HoursType;
  server: ServerType;
}

const player1: PlayerData<string, number, string> = {
  game: 'CS:GO',
  hours: 300,
  server: 'basic',
};

const player2: PlayerData<number, string, string> = {
  game: 2048,
  hours: '300 h.',
  server: 'arcade',
};

// const player3: PlayerData<string, { total: number; inMenu: number }, string> = {
//   game: 'Chess',
//   hours: {
//     total: 500,
//     inMenu: 50,
//   },
//   server: 'chess',
// };
const player3: PlayerData<string, Hours<number>, string> = {
  game: 'Chess',
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: 'chess',
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

interface IData<T = unknown> {
  name: 'rect' | 'triangle' | 'line' | 'circle';
  data?: T;
}

function calculateAmountOfFigures<T extends IData>(figure: T[]): AmountOfFigures {
  const result = figure.reduce(
    (acc, item) => {
      switch (item.name) {
        case 'rect':
          acc.squares++;
          break;
        case 'circle':
          acc.circles++;
          break;
        case 'triangle':
          acc.triangles++;
          break;

        default:
          acc.others++;
          break;
      }
      return acc;
    },
    {
      squares: 0,
      circles: 0,
      triangles: 0,
      others: 0,
    }
  );

  return result;
}

const data: IData[] = [
  {
    name: 'rect',
    data: { a: 5, b: 10 },
  },
  {
    name: 'rect',
    data: { a: 6, b: 11 },
  },
  {
    name: 'triangle',
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: 'line',
    data: { l: 15 },
  },
  {
    name: 'circle',
    data: { r: 10 },
  },
  {
    name: 'circle',
    data: { r: 5 },
  },
  {
    name: 'rect',
    data: { a: 15, b: 7 },
  },
  {
    name: 'triangle',
  },
];

console.log(calculateAmountOfFigures(data));
