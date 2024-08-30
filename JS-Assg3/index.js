document.write("Decision Making");

//Q1.Find Grades

function findGrades(marks){
    switch(true){

        case (marks<=10):
                 console.log("Grade - E");
                 break;
        
        case (marks>=11 && marks<=20):
                console.log("Grade - D");
                break;
                
        case (marks>=21 && marks<=30):
                console.log("Grade - C");
                 break;

        case (marks>=31 && marks<=40):
                console.log("Grade - B");
                break;

        case (marks>=41 && marks<=50):
                console.log("Grade - A");
                break;

        default:
            console.log("Invalid Input");
            break;
    }
}

findGrades(22);


// Q2. Get Value

function getValue(char){

    switch(true)
    {

    case(char==="P" || char==="p"):
                console.log("PrepBytes");
                break;

    case(char==="Z" || char==="z"):
                console.log("Zenith");
                break;

    case(char==="E" || char==="e"):
                console.log("Expert Coder");
                break;

    case(char==="D" || char==="d"):
                console.log("Data Structure");
                break;

    default:
                    console.log("Invalid Input");
                    break;
    }
}

getValue("p");

//Q3. Find the maximum out of three numbers.

function Max_out_of_three(num1,num2,num3){
    let max;

    if(num1>num2){
        if(num1>num3){
            max=num1;
            
        }else{
            max=num3;
         
        }
    } else if(num2>num3){
        max=num2;
       
    } else{
        max=num3;
        
    }
    return max;
    

}

let maximum= Max_out_of_three(1200,1000,100);
console.log(maximum);

// Q4. Second Smallest

function findSndSmallest(x,y,z){
   let s_small;
   if(x>y){
    if(y>z){
        s_small=y;
        
    }else{
        s_small=z;
     
    }
} else if(y>z){
    s_small=z;
   
} else{
    s_small=y;
    
}
return s_small;

}

let sec_smallest= findSndSmallest(1200,100,2000);
console.log(sec_smallest);

//Q5. Check whether the triangle is Acute or Obtuse

function Triangle_Check(a,b,c){
    let sum=a+b+c;
    
    if (sum == 180 && a > 0 && b > 0 && c > 0) {
        if (a < 90 && b < 90 && b< 90) {
            console.log("Acute-angled Triangle");
        }
        else if (a == 90 || b == 90 || b == 90) {
            console.log("Right-angled Triangle");
        }
        else {
            console.log("Obtuse-angled Triangle");
        }
    }
    else {
        console.log("Triangle not possible");
    }

}

Triangle_Check(120,30,30);