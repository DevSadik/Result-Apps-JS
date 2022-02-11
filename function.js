

/**
 * Data Send to LS 
 * @param {*} key 
 * @param {*} arr 
 */
 function dataSend(key , arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true;

}

/**
 * Data Get form LS 
 * @param {*} key 
 * @returns 
 */
function dataGet(key){

    let data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [] ;
      

}




function Result(){

    
    /**
     * 
     * @param {*} marks 
     * @returns 
     */
        let  grade;
    
        this.numberCal = function(marks){
            if( marks >= 0 && marks <=33){
                grade = "F";
            }else if( marks >= 33 && marks <40){
                grade = "D";
            }else if( marks >= 40 && marks <50){
                grade = "C";
            }else if( marks >= 50 && marks <60){
                grade = "B";
            }else if( marks >= 60 && marks <70){
                grade = "A-";
            }else if( marks >= 70 && marks <80){
                grade = "A";
            }else if( marks >= 80 && marks <=100){
                grade = "A+";
            }
    
            return grade
        }
    
        let gpa;
    /**
     * 
     * @param {*} marks 
     * @returns 
     */
    
        this.gpaCal = function (marks){
            if( marks >= 0 && marks <=33 ){
                gpa = 0;
            }else if( marks >= 33 && marks <40 ){
                gpa = 1;
            }else if( marks >= 40 && marks <50) {
                gpa = 2;
            }else if( marks >= 50 && marks <60 ){
                gpa = 3;
            }else if( marks >= 60 && marks <70 ){
                gpa = 3.5;
            }else if( marks >= 70 && marks <80 ){
                gpa = 4;
            }else if( marks >= 80 && marks <=100){
                gpa = 5;
            }
    
            return gpa
        }
    /**
     * 
     * @param {*} bn 
     * @param {*} en 
     * @param {*} math 
     * @param {*} s 
     * @param {*} ss 
     * @param {*} rel 
     * @returns 
     */
        this. cgpaCal = function( bn , en , math , s , ss , rel){
    
            let totalcgpa = (bn + en + math + s + ss + rel);
    
            let cgpa = (totalcgpa/6).toFixed(2);
    
            if( bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){
                return `You are failed`;
            }else{
                return `${cgpa}`;
            }
        }

        this.gradeCal = function (cgpa) {
            if( cgpa <= 1 && cgpa >=2 ){
                totalGrade = "D" ;
            }else if( cgpa <= 2 && cgpa >=3 ){
                otalGrade = "C" ;
            }else if( cgpa <= 3 && cgpa >=3.50 ){
                otalGrade = "B" ;
            }else if( cgpa <= 3.50 && cgpa >=4 ){
                otalGrade = "A-" ;
            }else if( cgpa <= 4.01 && cgpa >=4.99){
                otalGrade = "A" ;
            }else if( cgpa==5.00 ){
                otalGrade = "A+" ;
            }

            return totalGpa
        }
    
    }
    
    