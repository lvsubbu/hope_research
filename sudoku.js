
/* Input two dimenational  */
var data = [ [1, 2, 3, 4, 5, 6, 7, 8, 9], [x,x,x,x,x,x,x,x,x], [y,y,y,y,y,y,y,y,y] ...]

funtion sudoku(row) {

	/* check 1 : check min, max and sum */
	let min = row => Math.min(...row);
	let max = row => Math.max(...row);
	
	if (min != 1 && max != 9) {
		return false;
	}

	/* check 2 : check any dublicates/unique value */
	if (Set(row).size != 9) {
		return false;
	}

	/* check 3 : check the sum is not 45 */
	let sum = row.reduce((a, b) => a + b, 0);
	if (sum != 45) {
		return false;
	}
	
	return true; // success
}


solution = (data) => {

	/* for all 9 rows */
	for (i=0; i < 9; i++) {
		if (sudoku(data[i])) {
			reutrn false;
		}
	)
	
	/* for all 9 coulums */
	for (i=0; i < 9; i++) {

		let temp_row[];
		for (j=0; j < 9; j++) {
			temp_row.push(data[i][j]);
		}
		
		if (sudoku(temp_row)) {
			reutrn false;
		}
	}
		
	/* for each 3*3 sqaure (row wise) */
	for (k=0; k < 9; k = k + 3) {
		
		for (m=0; m < 9; m = m + 3) {

			for (i=0; i < 3; i++) {

				let temp_row[];
				for (j=0; j < 3; j++) {
					temp_row.push(data[i+k][j+m]);
				}
			
				if (sudoku(temp_row)) {
					reutrn false;
				}
			}
		}
	}
	
	return true
}

if (solution) 
	console.log ("Sudkou is VALID");
else 
	console.log ("Sudoku is INVALID);
