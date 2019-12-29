let digit1=prompt('Введите любое число');
digit1=parseInt(digit1);
let digit2=prompt('Введите второе число, равное или не равное первому');
digit2=parseInt(digit2);
alert('Проверим, равны ли введенные Вами числа:\n' + (digit1===digit2));