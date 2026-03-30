// interface PlayerData<GameType, HoursType, ServerType = string> {
//   game: GameType;
//   hours: HoursType;
//   server: ServerType;
// }

// function processingData<T, V>(data: T[], option: V): string {
//   switch (typeof data) {
//     case 'string':
//       return `${data}, speed : ${option}`;
//       break;
//     case 'number':
//       return `${data}, speed : ${option}`;
//       break;
//     default:
//       return 'Not valid';
//       break;
//   }
// }

// let res1 = processingData([1], 'fast');
// const res2 = processingData(['1'], 'slow');
// const res3 = processingData<number, string>([2], 'slow');

// function processing<T>(data: T): T {
//   return data;
// }

// interface DataSaver {
//   processing: <T>(data: T) => T;
// }
// interface DataSaver2 {
//   processing: typeof processing;
// }

// const saver: DataSaver = {
//   //   processing(data) {
//   //     return data;
//   //   },
//   //   processing: <T>(data: T) => {
//   //     return data;
//   //   },
//   //   processing: (data) => {
//   //     return data;
//   //   },
//   processing: processing,
// };

// interface Hours<T extends string | number> {
//   total: T;
//   inMenu: T;
// }

// // Для простых игроков (примитивы)
// interface SimplePlayerData<GameType, HoursType extends string | number, ServerType = string> {
//   game: GameType;
//   hours: HoursType;
//   server: ServerType;
// }

// // Для сложных игроков (с объектом hours)
// interface AdvancedPlayerData<GameType, HoursType extends string | number, ServerType = string> {
//   game: GameType;
//   hours: Hours<HoursType>;
//   server: ServerType;
// }

// // Использование
// const player1: SimplePlayerData<string, number> = {
//   game: 'CS:GO',
//   hours: 300,
//   server: 'basic',
// };

// const player3: AdvancedPlayerData<string, number> = {
//   game: 'Chess',
//   hours: {
//     total: 500,
//     inMenu: 50,
//   },
//   server: 'chess',
// };

interface ParentOfUsers {
  mother: string;
  father: string;
}

interface IUser<UserData extends ParentOfUsers> {
  login: string;
  age: number;
  parents: UserData;
}

const user: IUser<{ mother: string; father: string; mar: boolean }> = {
  login: '345345',
  age: 34,
  parents: { mother: '234234', father: 'fwerfwerw', mar: false },
};
