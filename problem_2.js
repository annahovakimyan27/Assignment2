let a = 3
let b = 14
let c = 11

// To find all possible solutions

if (a == 0) {
   const x = - (c / b);
   console.log(" X = " + x );

} else {
    
    const D = b**2 - (4*a*c);
    if (D < 0) {
        console.log("Unsolvable");
    }
    if (D == 0) {        
       const x = - (b/2*a );
       console.log(" X = " + x);
    }
    if (D > 0){
        const x1 = (-b + D**(1/2))/2*a;
        const x2 = (-b - D**(1/2))/2*a;
        console.log(" X1 = " + x1 );
        console.log(" X2 = " + x2 );
    }
    
}