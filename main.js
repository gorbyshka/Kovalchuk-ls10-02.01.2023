const num = prompt('Введите число');
const degree = prompt('Введите степень');

function getExponentiation(num, degree) {
    return (degree == 1) ? num : (num * getExponentiation(num, degree - 1));
}

alert(getExponentiation(num, degree));