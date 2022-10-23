const userString = prompt("Введите текст для обрезки");
let startSliceIndex = prompt("Введите индекс, с которого нужно начать обрезку строки");
let endSliceIndex = prompt("Введите индекс, которым нужно законичить обрезку строки");
startSliceIndex = Number(startSliceIndex.trim());
endSliceIndex = Number(endSliceIndex.trim());

const resultString = userString.trim().slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${resultString}`);