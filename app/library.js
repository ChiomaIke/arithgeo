module.exports = {
	aritGeo:function(arr){
		/*var ap, gp;
		for (i = 0; i < (arr.length - 2); i++) 
		 if (!(ap = arr[i + 1] - arr[i] == arr[i + 2] - arr[i + 1]))
		break;

		if (ap) return " Arithmetic";
		for (i = 0; i < (arr.length - 2); i++) 
		 if (!(gp = arr[i + 1]/ arr[i] == arr[i + 2]/ arr[i + 1]))  
		 break;
		 if (gp) return " Geometric";

		 if (arr.length == 0) return 0;

		 return -1;*/
		 
		var ap;
		var gp;
		
		for(i=0; i < (arr.length - 2); i++)
		{
			if ((arr[i+1] - arr[i]) != (arr[i+2] - arr[i+1]))
			{
				ap = false;
				break;
			}
			ap = true;
		}
		
		for(i=0; i < (arr.length - 2); i++)
		{
			if ((arr[i+1] / arr[i]) != (arr[i+2] / arr[i+1]))
			{
				gp = false;
				break;
			}
			gp=true;
		}
		
		if (arr.length == 0)
		{
			return 0;
		}
		if (gp == true)
		{
			return 'Geometric';
		}
		if (ap == true)		
		{
			return 'Arithmetic';
		}
		
		return -1;
		
	},
	
}