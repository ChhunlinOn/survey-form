let form = document.getElementById('form');

        form.addEventListener("submit",function(event){
             event.preventDefault();

             let Name = document.getElementById('name').value;
             let age = document.getElementById('Age').value;
             let grade = document.querySelector('input[type="radio"][name="grade"]:checked').value;
             let school = document.querySelector('input[type="radio"][name="grade"]:checked').value;
             
             console.log('Name: ' ,Name);
             console.log('Age: ', age);
             console.log('grade: ', grade);
             console.log('school: ', school);

        })

