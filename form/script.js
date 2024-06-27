let form = document.getElementById('form');

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way (page reload)

    let Name = document.getElementById('name').value;
    let age = document.getElementById('email').value;
    let grade = document.querySelector('input[type="radio"][name="grade"]:checked').value;
    let school = document.querySelector('input[type="radio"][name="school"]:checked').value;
    let feeling = document.querySelector('input[type="radio"][name="feeling"]:checked').value;
    let YesNOQuestion7 = document.querySelector('input[type="radio"][name="boolean"]:checked').value;
    let Question8 = document.querySelector('input[type="text"][name=Q8]').value;
    let Question10 = document.querySelector('input[type="radio"][name=Q10]:checked').value;
    let Question11 = document.querySelector('input[type="text"][name=Q11]').value;
    let Question12 = document.querySelector('input[type="radio"][name=Q12]:checked').value;
    let Question13 = document.querySelector('input[type="text"][name="Q13"]').value;
    let Question16 = document.querySelector('input[type="radio"][name="learning-process"]:checked').value;
    let Question17 = document.querySelector('input[type="radio"][name="feedback"]:checked').value;
    let Question19 = document.querySelector('input[type="text"][name="Q19"]').value;
    let Question20 = document.querySelector('input[type="text"][name="Q20"]').value;
    let Question21 = document.querySelector('input[type="text"][name="Q21"]').value;
    let Question22 = document.querySelector('input[type="text"][name="Q22"]').value;

    //all checkbox with textbox
    // Get all checked checkboxes with name "skill-interested"
    let selectedSkillsValue = [];
            let selectedSkills = document.querySelectorAll('input[type="checkbox"][name="skill-interested"]');
            for (var i=0;i<selectedSkills.length;i++){
                if(selectedSkills[i].checked === true){
                    selectedSkillsValue.push(selectedSkills[i].value);
                }
            }
    // get all checked checkbox with name "prefer-to-learn" 
    let  prefer_To_learn = [];
            let preferLearn = document.querySelectorAll('input[type="checkbox"][name="prefer-to-learn"]');
            for (var i=0;i<preferLearn.length;i++){
                 if(preferLearn[i].checked === true){
                      prefer_To_learn.push(preferLearn[i].value);
                }
            }

    // get all checked checkbox with name "learning"
    let  learn = [];
    let Learning = document.querySelectorAll('input[type="checkbox"][name="learning"]');
    for (var i=0;i<Learning.length;i++){
         if(Learning[i].checked === true){
              learn.push(Learning[i].value);
        }
    }
    // radio with text
    let  learning_environment = document.querySelector('input[type="radio"][name="learning-environment"]:checked').value;

    // Log values to the console
    console.log('Name: ', Name);
    console.log('Age: ', age);
    console.log('Grade: ', grade);
    console.log('School: ', school);
    console.log('feel: ',feeling);
    console.log('Question7: ',YesNOQuestion7);
    console.log('Question8:',Question8);
    console.log('Skill Interested: ', selectedSkillsValue);
    console.log('Question10: ',Question10);
    console.log('Question11: ',Question11);
    console.log('Question12: ',Question12);
    console.log('Question13: ',Question13);
    console.log('Prefer_To_Learn: ',prefer_To_learn)
    console.log('learning-environment: ', learning_environment);
    console.log('Question16: ',Question16);
    console.log('Question17: ',Question17);
    console.log('Question18: ',learn);
    console.log('Question19: ',Question19);
    console.log('Question20: ',Question20);
    console.log('Question21: ',Question21);
    console.log('Question22: ',Question22);
});
// Separate event listener for the change event of the checkbox



     //all checkbox with textbox
    // Get all checked checkboxes with name "skill-interested"
    let textOther = document.getElementById('skill-interested1');
    let Other = document.getElementById('skill-interested');
    function clickOther(){
    if(Other.checked === true){
          textOther.removeAttribute("disabled");
       }else{
          textOther.setAttribute("disabled", "");
          textOther.value='';
        };
        };
    textOther.addEventListener("input",function(){
        if(Other.checked){
            Other.value = this.value;
        }
    })



    //Get all checked checkboxes with name "prefer-to-learn"
    let preferLearntext = document.querySelector('input[type="text"][name="Q14"]');
    let preferLearncheckbox = document.getElementById('otherQ14');
    function preferlearn(){
    if(preferLearncheckbox.checked === true){
          preferLearntext.removeAttribute("disabled");
       }else{
          preferLearntext.setAttribute("disabled", "");
          preferLearntext.value='';
        };
        };
    preferLearntext.addEventListener("input",function(){
        if(preferLearncheckbox.checked){
            preferLearncheckbox.value = this.value;
        }
    })
    // get all checked checkbox with name "learning"
    let learntextbox = document.querySelector('input[type="text"][name="Q18"]');
    let Learncheckbox = document.getElementById('learning1');
    function study(){
    if(Learncheckbox.checked === true){
          learntextbox.removeAttribute("disabled");
       }else{
          learntextbox.setAttribute("disabled", "");
          learntextbox.value='';
        };
        };
    learntextbox.addEventListener("input",function(){
        if(Learncheckbox.checked){
            Learncheckbox.value = this.value;
        }
    })

    //radio with text
    let text_enviroment_learning = document.querySelector('input[type="text"][name="Q15"]');
    let enviroment_radio = document.getElementById('otherQ15');
    function learning_environment(){
    if(enviroment_radio.checked === true){
          text_enviroment_learning.removeAttribute("disabled");
       }else{
          text_enviroment_learning.setAttribute("disabled", "");
          text_enviroment_learning.value='';
        };
        };
    text_enviroment_learning.addEventListener("input",function(){
        if(enviroment_radio.checked){
            enviroment_radio.value = this.value;
        }
    })

