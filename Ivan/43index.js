// Последовательность действий:
// 1) Происходит submit любой из формы
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function getCombinedFormData() {
    var forms = document.querySelectorAll('form');
    var combined = new FormData();
    forms.forEach(function (form) {
        var fd = new FormData(form);
        fd.forEach(function (value, key) {
            combined.set(key, value);
        });
    });
    var getStringValue = function (key) {
        var value = combined.get(key);
        return typeof value === 'string' ? value.trim() : '';
    };
    var normalizedEmail = getStringValue('email').toLowerCase();
    var formData = {
        email: normalizedEmail,
        title: getStringValue('title'),
        text: getStringValue('text'),
        checkbox: combined.get('checkbox') === 'on',
    };
    return formData;
}
function submitHandler(event) {
    event.preventDefault();
    var formData = getCombinedFormData();
    if (validateFormData(formData)) {
        checkFormData(formData);
    }
    console.log(formData);
}
document.addEventListener('submit', submitHandler);
function validateFormData(formData) {
    var email = formData.email, title = formData.title, text = formData.text, checkbox = formData.checkbox;
    // Если каждое из свойств объекта data правдиво...
    if (email && title && text && checkbox) {
        return true;
    }
    else {
        console.log('Please, complete all fields');
        return false;
    }
}
function checkFormData(formData) {
    var email = formData.email;
    var emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
    // Если email совпадает хотя бы с одним из массива
    if (email && emails.indexOf(email) !== -1) {
        console.log('This email is already exist');
    }
    else {
        console.log('Posting data...');
    }
}
