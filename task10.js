var A= [20,53,78,4,91,12] ;
			//var temp= [] ;
			for (var i = 0; i < A.length; i++) {
				for (var k = 0; k < A.length-1; k++) {
					if(A[k] > A[k+1]){
						var temp = A[k] ;
						A[k] = A[k+1];
						A[k+1] =temp ;
					}
				}
			}

			for (var i = 0; i < A.length; i++) {
				document.write(A[i]+", ") ;
			}