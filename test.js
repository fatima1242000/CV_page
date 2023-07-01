
let NAME = document.getElementById('NAME');
let OBJECTIVE = document.getElementById('OBJECTIVE');
let SKILLS = document.getElementById('SKILLS');
let TOOLS = document.getElementById('TOOLS');
let EXPERIANCE = document.getElementById('EXPERIANCE');
let EDUCATION = document.getElementById('EDUCATION');
let SAVE = document.getElementById('SAVE');
let GET = document.getElementById('GET');
let UPDATE = document.getElementById('UPDATE');
let DELETE = document.getElementById('DELETE');

console.log(NAME,OBJECTIVE,SKILLS,TOOLS,EXPERIANCE,EDUCATION,SAVE,GET,UPDATE,DELETE);




let mood = 'create'
let temp;


/*


// get total
function getTotal() 
{
    console.log('done')
    
    if(NAME.value != ''){
        let result = ( OBJECTIVE.value + SKILLS.value + TOOLS + EXPERIANCE + EDUCATION);
        //(the name in the table)= result;
            }
    else{
       // (the name in the table ) = '';
        
    }

}


*/


// creat product
let datapro; //create the array that save the persons data
if (localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}


SAVE.onclick = function(){
    let newpro = { //the object the the persons
        NAME:NAME.value,
        OBJECTIVE:OBJECTIVE.value,
        SKILLS:SKILLS.value,
        TOOLS:TOOLS.value,
        EXPERIANCE:EXPERIANCE.value,
        EDUCATION:EDUCATION.value,
        

       }
       
       datapro.push(newpro);
       localStorage.setItem('product',    JSON.stringify(datapro))
    
       clearData()
       showData()
    }


    
    
    if(mood == 'create'){
        if(newpro.count > 1){
            for( let i=0; i<newpro.count;i++){
                datapro.push(newpro);
            }
        }else 
            {
            datapro.push(newpro);
             }
    }else{
        datapro[ temp ] = newpro;
        mood = 'creat';
        submit.innerHTML = 'create';
        count.style.display = 'block';
    }     
    
    
    // save logicalstorage
    localStorage.setItem('product',    JSON.stringify(datapro))
    console.log(datapro);

    clearData()
    showData()


//clear inputs 
function clearData(){
    NAME.value = '';
    OBJECTIVE.value = '';
    SKILLS.value = '';
    TOOLS.value = '';
    EXPERIANCE.value = '';
    EDUCATION.value = '';
    
    

}


// read 

function showData(){
    let table = '';
    for(let i = 0 ; i<datapro.length ; i++){
      
        table += `
    <tr>
        <td>${datapro[i].NAME}</td>
        <td>${datapro[i].OBJECTIVE}</td>
        <td>${datapro[i].SKILLS}</td>
        <td>${datapro[i].TOOLS}</td>
        <td>${datapro[i].EXPERIANCE}</td>
        <td>${datapro[i].EDUCATION}</td>
       
        <td><button onclick = "updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>
    `
         }

        

        document.getElementById('tbody').innerHTML = table;


        
    }
    
    showData()
  
   
    
//delete

function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData()
}



//update
function updateData(i){
    NAME.value = datapro[i].NAME;
    OBJECTIVE.value = datapro[i].OBJECTIVE;
    SKILLS.value = datapro[i].SKILLS;
    TOOLS.value = datapro[i].TOOLS;
    EXPERIANCE.value = datapro[i].EXPERIANCE;
    EDUCATION.value = datapro[i].EDUCATION;
    
    submit.innerHTML = 'update';
    mood = 'update';
    temp = i;   

    scroll({

        top:0,
        behavior:'smooth',}) 

    }


    
    DOWNLOAD.onclick = function(){
    let newpro = { //the object the the persons
        NAME:NAME.value,
        OBJECTIVE:OBJECTIVE.value,
        SKILLS:SKILLS.value,
        TOOLS:TOOLS.value,
        EXPERIANCE:EXPERIANCE.value,
        EDUCATION:EDUCATION.value,
        

       }
       
       datapro.push(newpro);
       localStorage.setItem('product',    JSON.stringify(datapro))
    
       clearData()
       showData()
    }
    

    function wordData(){
        
        for(let i = 0 ; i<datapro.length ; i++){
          
            word += `
       
            ${datapro[i].NAME}
            ${datapro[i].OBJECTIVE}
            ${datapro[i].SKILLS}
            ${datapro[i].TOOLS}
            ${datapro[i].EXPERIANCE}
            ${datapro[i].EDUCATION}
           
        
        `
             }
    
            
    
            document.getElementById('tbody').innerHTML = table;
    
    
            
        }