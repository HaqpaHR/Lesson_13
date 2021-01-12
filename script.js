// 1.Дано натуральное число n. Выведите все числа от 1 до n

function allNumbers(n) {
    if(n < 0) return; // условие завершения
    if( n == 1 ) return 1; // базовый сценарий
    return allNumbers(n - 1) + ", "+ n; // рекурсия
};

console.log(allNumbers(10))

// 2. Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.


function powOfTwo(n) {
    if (n === 1)
        return "yes"
    if (n > 1 && n < 2)
        return "no"
    return powOfTwo(n / 2);
};

console.log(powOfTwo(8))
console.log(powOfTwo(6))

// 3.Дано натуральное число N. Вычислите сумму его цифр.

function recursion(n) {
    if(n < 0) return "Напишите положительное значение"; // условие завершения
    if(n === 0) return 0; // базовый сценарий
    return n + recursion(n-1); // рекурсия
}

console.log(recursion(9))
console.log(recursion(10))
console.log(recursion(-10))


// 4. Дан объект с N вложенностями. Скопируйте объект вглубину (без ссылок).

const obj = {
    a: 2,
    b: {
      c: 4,
      d: {
        e: 5,
        f: {
          g: 6,
        },
      },
    },
  };
  


function deepClone(obj) {
    let result = {};
    let keys = Object.keys(obj);
    keys.forEach(function(key) {
        if(typeof(obj[key]) == 'object') {
            result[key] = deepClone(obj[key]);
        } else {
            result[key] = obj[key]
        }
    });
    
    return  result;
}


const newObj = deepClone(obj)
  
newObj.b.c = 6;
  
console.log(obj);

console.log(newObj)


// 5.Дан объект с N вложенностями. При передаче строки вида 'a.b.c' должно вернуться значение, 
//находящееся внутри вложенности, указанной через точку.
// Либо, если значения не существует - undefined

function getValue(obj, adr) {
    let result = undefined;
    let removePoint = adr.split('.');
    let otherKey = removePoint.shift();

    if(obj.hasOwnProperty(otherKey));
        if(removePoint.length == 0) {
            result = obj[otherKey]
        } else {
            result = getValue(obj[otherKey], removePoint.join('.'))
        }
    return result
}

console.log(getValue(obj, 'b.c'));

console.log(getValue(obj, 'b.d.n'));


