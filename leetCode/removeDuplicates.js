function removeDup(array) {
  const unique = array.filter(function (value, index) {
    return array.indexOf(value) === index;
  });
  return unique;
}
const arr = [1, 1, 2,];
const res = removeDup(arr);
console.log(res);
