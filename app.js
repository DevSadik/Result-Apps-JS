// Get Elements 

const student_form = document.querySelector('#student_result');
const card_border = document.querySelector('.card');
const student_single_data = document.querySelector('.result-sheet');
const empty_form = document.getElementById('valid');
const student_result_data = document.getElementById('table_data');




student_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name= "name"]');
    let roll = this.querySelector('input[name= "roll"]');
    let image = this.querySelector('input[name= "image"]');
    let stdnt_class = this.querySelector('select[name= "select_cls"]');
    let gender = this.querySelector('input[name= "gender"]:checked');
    let ban = this.querySelector('input[name= "bn"]');
    let eng = this.querySelector('input[name= "en"]');
    let math = this.querySelector('input[name= "math"]');
    let sci = this.querySelector('input[name= "sci"]');
    let ssci = this.querySelector('input[name= "ssci"]');
    let reli = this.querySelector('input[name= "reli"]');



    if( name.value == '' || roll.value == '' || image.value == '' || stdnt_class.value == ''){
        empty_form.innerHTML = ` All feilds are required !`
        card_border.classList.add('active')
    }else{
        card_border.classList.remove('active')

        let dataStore = [];

        if( dataGet('student_data')){
            dataStore = dataGet('student_data')
        }

        dataStore.push({
            name : name.value,
            roll : roll.value,
            image : image.value,
            className : stdnt_class.value,
            gender : gender.value,
            bn : ban.value,
            en : eng.value,
            math : math.value,
            sci : sci.value,
            ssci : ssci.value,
            reli : reli.value
        });

        dataSend('student_data' , dataStore)

         name = this.querySelector('input[name= "name"]').value= '';
         roll = this.querySelector('input[name= "roll"]').value= '';
        image = this.querySelector('input[name= "image"]').value= '';
         stdnt_class = this.querySelector('select[name= "select_cls"]').value= '';
         ban = this.querySelector('input[name= "bn"]').value= '';
         eng = this.querySelector('input[name= "en"]').value= '';
         math = this.querySelector('input[name= "math"]').value= '';
         sci = this.querySelector('input[name= "sci"]').value= '';
         ssci = this.querySelector('input[name= "ssci"]').value= '';
         reli = this.querySelector('input[name= "reli"]').value= '';


    }
    
    AllStudentData() ;
});

AllStudentData() ;
function AllStudentData() {
    let dataStore = dataGet('student_data');
    
    let data = '';
    let result = new Result();

    dataStore.map((student , index) =>{
        data +=`
            <tr>
                <td>${index + 1}</td>
                <td><img style=" width: 50px;  height: 50px; object-fit: cover;" src="${student.image}"></td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.gender}</td>
                <td>${student.className}</td>
                <td>${result.cgpaCal( result.gpaCal(student.bn),result.gpaCal(student.en),result.gpaCal(student.math),result.gpaCal(student.sci),result.gpaCal(student.sci),result.gpaCal(student.reli) )}</td>
                
                <td>
                    <button onclick="StudentDataView(${index})" data-bs-toggle="modal" data-bs-target="#single-student-data" class="btn btn-info btn-sm">View</button>
                    <button onclick="StudentDataClear(${index})" class="btn btn-danger btn-sm">Delete</button>
                </td>
        </tr>
        `
    });

    student_result_data.innerHTML = data;
};

// clear student data

function StudentDataClear( id ){
      
    let dataStore = dataGet('student_data');
    dataStore.splice(id, 1);

     dataSend('student_data' , dataStore);
     AllStudentData() ;
    
}

// view student data

function StudentDataView(id) {

    let result = new Result();

    let dataStore = dataGet('student_data');

    student_single_data.innerHTML =`
            <div class="card">
            <div class="card-header">
                <div class="student-details">
                <h2>Name    : ${dataStore[id].name}</h2><hr>
                <h3>Roll    : ${dataStore[id].roll}</h3>
                <h3>Class   : ${dataStore[id].className}</h3>
                <h3>Gender  : ${dataStore[id].gender}</h3>
                

                </div>
                <div class="student-image shadow">
                    <img src="${dataStore[id].image}">
                </div>

            </div>
            <div class="card-body">
                <div class="student-marks">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Sub Name</th>
                                <th>Marks</th>
                                <th>Grade</th>
                                <th>GPA</th>
                                
                            </tr>
                        </thead>
                        <tbody id="">
                            <tr>
                                <td>1</td>
                                <td>Bangla</td>
                                <td>${dataStore[id].bn}</td>
                                <td>${result.numberCal(dataStore[id].bn)}</td>
                                <td>${result.gpaCal(dataStore[id].bn)}</td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>English</td>
                                <td>${dataStore[id].en}</td>
                                <td>${result.numberCal(dataStore[id].en)}</td>
                                <td>${result.gpaCal(dataStore[id].en)}</td>
                               
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Math</td>
                                <td>${dataStore[id].math}</td>
                                <td>${result.numberCal(dataStore[id].math)}</td>
                                <td>${result.gpaCal(dataStore[id].math)}</td>
                                
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Science</td>
                                <td>${dataStore[id].sci}</td>
                                <td>${result.numberCal(dataStore[id].sci)}+</td>
                                <td>${result.gpaCal(dataStore[id].sci)}+</td>
                                
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Social Science</td>
                                <td>${dataStore[id].ssci}</td>
                                <td>${result.numberCal(dataStore[id].ssci)}</td>
                                <td>${result.gpaCal(dataStore[id].ssci)}</td>
                                
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Religion</td>
                                <td>${dataStore[id].reli}</td>
                                <td>${result.numberCal(dataStore[id].reli)}</td>
                                <td>${result.gpaCal(dataStore[id].reli)}</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
    console.log(result.cgpaCal(dataStore[id].bn,dataStore[id].en,dataStore[id].math,dataStore[id].sci,dataStore[id].ssci,dataStore[id].reli));
}