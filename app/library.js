module.exports = {
	aritGeo: function(array_numbers){		
		if (array_numbers.length == 0) { //test if array length is 0
          return '0';
		}else{ //else proceed
			var arr_diff = array_numbers[1] - array_numbers[0];
			var arr_ratio = array_numbers[1] / array_numbers[0];
			var num_count_passes_ap = 1;
			var num_count_passes_gp = 1;
			for (var i=0; i<array_numbers.length; i++){ //check for AP
				if ((array_numbers[i+1]- array_numbers[i]) == arr_diff){ //expression is Arithemetic
					//Arithemetic, set status to 1
					num_count_passes_ap += 1;
				}
				if ((array_numbers[i+1] / array_numbers[i]) == arr_ratio){ //expression is geometric
						num_count_passes_gp += 1;
				}
			}
			
			
			if(num_count_passes_ap == array_numbers.length){
			return 'Arithmetic';				
			}else if(num_count_passes_gp == array_numbers.length){
			return 'Geometric';				
			}else{
				return '-1';
			}
		}
	}
	
}