const primitiveCheck = function(param1) {
	const type = typeof param1;
	if (type !== 'object' && type !== 'function') {
		if (isNaN(param1) && type === 'number') {
			return 'NaN';
		} else {
			return 'primitive';
		}
	} else {
		return type;
	}
}

/**
* if data1 === data2
*     return true
* else 
*     return false
* attention function !== function
**/
export default function boolEqual(data1, data2) {
	if (typeof data1 !== typeof data2) {
		return false;
	}
	const type = primitiveCheck(data1);
	switch (type) {
		case 'primitive':
			return data1 === data2 ? true : false;
			break;
		case 'function':
			return false;
			break;
		case 'NaN':
			return isNaN(data2) ? true : false;
			break;
	}
	if (Array.isArray(data1)) {
		if (data1.length !== data2.length) {
			return false;
		}
		for (let i = 0; i < data1.length; i ++) {
			if (boolEqual(data1[i], data2[i]) === false) {
				return false;
			}
		}
	}
	if (data1.toString() === "[object Object]") {
		const keys = Object.keys(data1);
		const keys2 = Object.keys(data2);
		if (keys.length !== keys2.length) {
			return false;
		}
		for (let i = 0; i < keys.length ; i ++) {
			const key = keys[i];
			if (boolEqual(data1[key], data2[key]) === false) {
				return false;
			}
		}
	}
	return true
}
