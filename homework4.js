// the triangle stars
const astx=function(n){
	if (n<=0)
		return "";

		return"*"+astx(n-1);
	}
const spacePrint= function(space){
	if (space<0) return "";
	return " "+ spacePrint(space-1);
}

const triangleStars = function(n,space){
	if (n===0) {
		return "";
	}

	
console.log(spacePrint(space)+astx(2*n-1));
triangleStars(n-1,space+1);
}

const print_stars = function(n){
	triangleStars(n,1);
};

print_stars(5);



//checkerboard

const L1 = function(n){
  if(n<=0)
  return"";
  return "* " + L1(n-1);
};
const L2 = function(m){
  if(m<=0) 
  return"";
  return " *" + L2(m-1)
};
const lines = function(star,rec){
  if(rec<=0)
  return'';
  console.log(L1(star));
  console.log(L2(star));
  return lines(star,rec-1);
  
};
const checkerboard = function(p){
  if(p % 2 === 0)
  return lines(p,p/2);
  else 
  return lines(p,(p-1)/2);
};
 console.log(checkerboard(5));

//pow

const pow=function(base,n){
	if (n===0)
	 return 1;
	else if(base<0 || n<0) return false;

	return base * pow(base,n-1)
}
console.log(pow(-3,2));


//reverse function

 const reverse=function(str){
 	const f= function(string,i){
 		if (i===0) {
 			return "";
 		}
 		return string[i-1] + f(string,i-1);
 	}
 	return f(str, str.length);
 }
console.log(reverse("abc"));