function setInputListener(inputId, targetId) {
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(targetId)
    if (inputId == 'comp_name'||inputId == 'resp2') {
        // inputElement.addEventListener('input', (event) => {
        //     outputElement.textContent = event.target.value;
        
        // });

        inputElement.addEventListener('keypress', (event)=>{
            if (event.key == "Enter") {
                console.log("HEllo")
                var li = document.createElement('li')
                li.textContent = inputElement.value
                outputElement.append(li)
            }
        })
    }
    else if(inputId == 'comp_name'){
        
    }
    else{
        inputElement.addEventListener('input', (event) => {
            outputElement.textContent = event.target.value;
        });
    }
}
function setImageListener(inputId, targetId) {
    const inputelement = document.getElementById(inputId)
    const outputelement = document.getElementById(targetId)
    const btn =document.getElementById('btn_sub')
    btn.addEventListener('click',(event) =>{
        outputelement.createElement("img");
        outputelement.setAttribute("alt","value")
    })
}
setInputListener('inp_name','name')
setInputListener('inp_add','add')
setInputListener('inp_article','article')
setInputListener('inp_prof_article','prof_article')
setInputListener('comp_name','input_company')
setInputListener('comp_name1','input_company1')
setInputListener('resp2','input_company2')
setInputListener('edu_desc1','edu_desc')
setInputListener('inp_school1','school1')
setInputListener('inp_fin1','fin1')
setInputListener('inp_fin2','fin2')
setInputListener('inp_fin3','fin3')
setInputListener('inp_school2','school2')
setInputListener('inp_school3','school3')
setImageListener('img1','img_section')