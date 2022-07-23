// Первая задача:

// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Пример:
// Результат функции: массив из всех студентов, которые сдали экзамен.


const filter = () => {
	const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
	const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

	let result = allStudents.filter(num => !failedStudents.includes(num));
	return result;
}

console.log(filter()); 