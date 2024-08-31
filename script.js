function setInputListener(inputId, targetId) {
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(targetId)
    if (inputId == 'comp_name') {
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
setInputListener('inp_name','name')
setInputListener('inp_add','add')
setInputListener('inp_article','article')
setInputListener('inp_prof_article','prof_article')
setInputListener('comp_name','input_company')
// setInputListener('inp_add','add')
// setInputListener('inp_add','add')
// setInputListener('inp_add','add')