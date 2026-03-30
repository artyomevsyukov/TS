interface Hours<T extends string | number> {
  total: T;
  inMenu: T;
}

// Для простых игроков (примитивы)
interface SimplePlayerData<GameType, HoursType extends string | number, ServerType = string> {
  game: GameType;
  hours: HoursType;
  server: ServerType;
}

// Для сложных игроков (с объектом hours)
interface AdvancedPlayerData<GameType, HoursType extends string | number, ServerType = string> {
  game: GameType;
  hours: Hours<HoursType>;
  server: ServerType;
}

// Использование
const player1: SimplePlayerData<string, number> = {
  game: 'CS:GO',
  hours: 300,
  server: 'basic',
};

const player3: AdvancedPlayerData<string, number> = {
  game: 'Chess',
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: 'chess',
};
