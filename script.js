// Загружаем сохраненные номера и устанавливаем начальный текст при запуске страницы
window.onload = function () {
  generateLicensePlate(); // Вызываем функцию генерации при загрузке страницы
};

var currentGeneratedRegion; // Переменная для хранения текущего сгенерированного региона

function generateLicensePlate() {
  var plateTypeSelect = document.getElementById('plate-type');
  var plateType = plateTypeSelect.value;

  var regionCode, numbers, series, licensePlate;

  if (plateType === 'latvian') {
    var letters =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));
    numbers = Math.floor(1000 + Math.random() * 9000);
    licensePlate = letters + '-' + numbers;

    var latvianLicensePlateText = document.getElementById('latvian-license-plate-text');
    latvianLicensePlateText.textContent = licensePlate;

    // Очищаем текст для украинского номера
    var ukrainianLicensePlateText = document.getElementById('ukrainian-license-plate-text');
    ukrainianLicensePlateText.textContent = '';
    // Скрываем флаг Украины
    document.getElementById('ua-flag').style.display = 'none';
    // Показываем флаг Евросоюза
    document.getElementById('eu-flag').style.display = 'block';
    hideModalButton();
  } else if (plateType === 'ukrainian') {
    var regionCodes = [
      'АА', 'КА', 'АВ', 'КВ', 'АЕ', 'КЕ', 'АІ', 'КІ', 'АМ', 'КМ', 'АН', 'КН', 'АО', 'КО', 'АК', 'КК', 'АР',
      'КР', 'АС', 'КС', 'АТ', 'КТ', 'АХ', 'КХ', 'ВА', 'НА', 'ВВ', 'НВ', 'ВС', 'НС', 'ВЕ', 'НЕ', 'ВІ', 'НІ', 'ВН',
      'НН', 'ВК', 'НК', 'ВМ', 'НМ', 'ВО', 'НО', 'ВТ', 'НТ', 'ВХ', 'НХ', 'СА', 'ІА', 'СВ', 'ІВ', 'СЕ', 'ІЕ', 'СН',
      'ІН'
    ]; // Ваши коды регионов
    var seriesCodes = [
      'АА', 'КА', 'АВ', 'КВ', 'АЕ', 'КЕ', 'АІ', 'КІ', 'АМ', 'КМ', 'АН', 'КН', 'АО', 'КО', 'АК', 'КК', 'АР', 'КР',
      'АС', 'КС', 'АТ', 'КТ', 'АХ', 'КХ', 'ВА', 'НА', 'ВВ', 'НВ', 'ВС', 'НС', 'ВЕ', 'НЕ', 'ВІ', 'НІ', 'ВН', 'НН',
      'ВК', 'НК', 'ВМ', 'НМ', 'ВО', 'НО', 'ВТ', 'НТ', 'ВХ', 'НХ', 'СА', 'ІА', 'СВ', 'ІВ', 'СЕ', 'ІЕ', 'СН', 'ІН'
    ]; // Ваши серии

    regionCode = regionCodes[Math.floor(Math.random() * regionCodes.length)];
    series = seriesCodes[Math.floor(Math.random() * seriesCodes.length)];
    numbers = Math.floor(1000 + Math.random() * 9000);
    licensePlate = regionCode + numbers + series;
	licensePlate = regionCode + ' ' + numbers + ' ' + series; // Добавлены пробелы

    var ukrainianLicensePlateText = document.getElementById('ukrainian-license-plate-text');
    ukrainianLicensePlateText.textContent = licensePlate;

    // Очищаем текст для латвийского номера
    var latvianLicensePlateText = document.getElementById('latvian-license-plate-text');
    latvianLicensePlateText.textContent = '';
    // Скрываем флаг Евросоюза
    document.getElementById('eu-flag').style.display = 'none';
    // Показываем флаг Украины
    document.getElementById('ua-flag').style.display = 'block';
    showModalButton();

    currentGeneratedRegion = regionCode; // Сохраняем сгенерированный регион
  }
}

function saveLicensePlate() {
  // Ваш код сохранения номера, если необходимо
}

function changePlateType() {
  generateLicensePlate();
}

// Получаем кнопку "Открыть модальное окно"
var modalButton = document.querySelector('.modal-button');

function showModalButton() {
  modalButton.style.display = 'block'; // Показываем кнопку

  // Добавляем класс к параграфам в зависимости от текущего сгенерированного региона
  var paragraphs = document.querySelectorAll('.modal-content p');
  paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes(currentGeneratedRegion)) {
      paragraph.classList.add('highlighted'); // Добавляем класс "highlighted"
    } else {
      paragraph.classList.remove('highlighted'); // Убираем класс "highlighted" у остальных
    }
  });
}

function hideModalButton() {
  modalButton.style.display = 'none'; // Скрываем кнопку
}

var plateTypeSelect = document.getElementById('plate-type');
var plateType = plateTypeSelect.value;

var modalButton = document.querySelector('.modal-button');

function openModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Закрываем модальное окно при клике вне его содержимого
window.onclick = function (event) {
  var modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
