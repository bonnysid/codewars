export default function smaller(arr) {
     return arr.map((num, i) => {
       let sum = 0;
       for (let index = i + 1; index < arr.length; index++) if (arr[index] < num) sum++;
       return sum;
     })
}