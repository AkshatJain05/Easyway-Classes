        let enterName=prompt("Enter your Name");
        let password=prompt("Enter Your Password")
        if(enterName=='Akshat Jain'&&password==123){
        document.querySelector('#name').innerText=enterName;
        }
       else if(enterName=='Ansh Singhal'&&password==123){
        document.querySelector('#name').innerText=enterName;
        }
        else if(enterName=='Aayush Tyagi'&&password==123){
        document.querySelector('#name').innerText=enterName;
        }
        else if(enterName=='Hardik Sharma'&&password==123){
        document.querySelector('#name').innerText=enterName;
        }
        else if(enterName=='Hardik Garg'&& password==123){
        document.querySelector('#name').innerText=enterName;
        }
        else if(enterName=='Arish'&& password==123){
        document.querySelector('#name').innerText=enterName;
        } 
        else{
            console.log(alert('Please enter your correct details'));
            window.location.assign('Project2.0.html')
        }
 