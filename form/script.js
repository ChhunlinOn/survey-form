let form = document.getElementById('form');

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way (page reload)

    let Name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
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
    console.log('Age: ', email);
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




    //post api
    let dataValue = [];

  for (let i = 1; i <= 21; i++) {
    dataValue.push({
      email: email,
      fullname: Name,
      question_id: i + 0,
      answer: [""],
      created_by: "group7",
    });
  }
  console.log(dataValue);
  dataValue[0].answer = [Name]
  dataValue[1].answer = [email]
  dataValue[2].answer = [grade]
  dataValue[3].answer = [school]
  dataValue[4].answer = [feeling]
  dataValue[5].answer = [YesNOQuestion7]
  dataValue[6].answer = [Question8]
  dataValue[7].answer = [selectedSkillsValue]
  dataValue[8].answer = [Question10]
  dataValue[9].answer = [Question11]
  dataValue[10].answer = [Question12]
  dataValue[11].answer = [Question13]
  dataValue[12].answer = [prefer_To_learn]
  dataValue[13].answer = [learning_environment]
  dataValue[14].answer = [Question16]
  dataValue[15].answer = [Question17]
  dataValue[16].answer = [learn]
  dataValue[17].answer = [Question19]
  dataValue[18].answer = [Question20]
  dataValue[19].answer = [Question21]
  dataValue[20].answer = [Question22]

  function postApi() {
    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/submit", {
      method: "POST",
      body: JSON.stringify({ answers: dataValue }),
      headers: {
        "Content-Type": "application/json",
        "x-secret-key":
          "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      },
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Error: Invalid data");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  postApi();
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



