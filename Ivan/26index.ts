// структура данных склада с одеждой

type Status = 'empty' | number;

interface ClothesWarehouse {
  jackets: Status;
  hats: Status;
  socks: Status;
  pants: Status;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
  scissors: Status;
  paper: 'empty' | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
  dishwashers: Status;
  cookers: Status;
  mixers: Status;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  deficit: false,
  date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: TotalWarehouse): string {
  // const onlyEmpty = Object.fromEntries(
  //   Object.entries(data).filter(([key, value]) => value === 'empty')
  // );
  // if (Object.keys(onlyEmpty).length > 0) {
  //   return `We need this items: ${Object.keys(onlyEmpty).join(', ')}`;
  // }
  const onlyEmpty = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value === 'empty')
  );

  if (Object.keys(onlyEmpty).length > 0) {
    return `We need this items: ${Object.keys(onlyEmpty).join(', ')}`;
  }
  // или
  return 'Everything fine';
}

console.log(printReport(totalData));
