const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[];
	let i=0;
	while (i<arr.length) {
		let temp=[];
		let sum=arr[i];
		while(sum<=n){
				temp.push(arr[i++]);
			  sum+=arr[i];
		}
		ans.push(temp);
	}
	return ans;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
