interface IFormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}


// Последовательность действий:
// 1) Происходит submit любой из формы
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function getCombinedFormData(): IFormData {
  const forms = document.querySelectorAll('form');
  const combined = new FormData();

  forms.forEach((form: HTMLFormElement) => {
    const fd = new FormData(form);
    fd.forEach((value: FormDataEntryValue, key: string) => {
      combined.set(key, value);
    });
  });

  const getStringValue = (key: string): string => {
    const value = combined.get(key);
    return typeof value === 'string' ? value.trim() : '';
  };

  const normalizedEmail = getStringValue('email').toLowerCase();

  const formData: IFormData = {
    email: normalizedEmail,
    title: getStringValue('title'),
    text: getStringValue('text'),
    checkbox: combined.get('checkbox') === 'on',
  };

  return formData;
}

function submitHandler(event: SubmitEvent): void {
  event.preventDefault();
  const formData = getCombinedFormData();
  if (validateFormData(formData)) {
    checkFormData(formData);
  }
  console.log(formData);
}

document.addEventListener('submit', submitHandler);


function validateFormData(formData: IFormData): boolean {
  const { email, title, text, checkbox } = formData;
  // Если каждое из свойств объекта data правдиво...
  if (email && title && text && checkbox) {
    return true;
  } else {
    console.log('Please, complete all fields');
    return false;
  }
}

function checkFormData(formData: IFormData): void {
  const { email } = formData;
  const emails: string[] = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];

  // Если email совпадает хотя бы с одним из массива
  if (email && emails.indexOf(email) !== -1) {
    console.log('This email is already exist');
  } else {
    console.log('Posting data...');
  }
}
