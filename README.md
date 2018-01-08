# boolEqual
BoolEqual is a comparator, which will compare whether two variables is equal. It uses dfs algorithm and it's very fast.

# Install
```
npm install boolEqual
```
# Usage
```
const boolEqual = require('boolEqual');
const test1 = [
	{
		arr1: [1, 2, 6]
	},
	{
		arr2: {
			obj1: {
				key1: 'value1'
			}
		}
	}
];
const test2 = [
	{
		// change
		arr1: [1, 2, 5]
	},
	{
		arr2: {
			obj1: {
				key1: 'value1'
			}
		}
	}
];
boolEqual(test1, test2); // return false
```
# Attention
When the function appears in comparison, it always return false. 

# License
MIT