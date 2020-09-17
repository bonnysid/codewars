class Node {
    constructor(v, s) {
      this.dup = 1;
      this.val = v;
      this.sum = s;
      this.right = null;
      this.left = null;
    }
}
  
function insert(num, node, res, i, preSum = 0){
    if(node === null){
      node = new Node(num, 0); 
      res[i] = preSum;
    }
    else if(node.val == num){
      node.dup++;
      res[i] = preSum + node.sum;
    }
    else if(node.val > num){
      node.sum++;
      node.left = insert(num, node.left, res, i, preSum);
    }
    else {
      node.right = insert(num, node.right, res, i, preSum + node.dup + node.sum);
    }
    
    return node;
}
  
export default function smaller(arr) {
     const res = [];
     let root = null;

     for(let i = arr.length - 1; i >= 0; i--){
       root = insert(arr[i], root, res, i);
     }
  
    return res;
}