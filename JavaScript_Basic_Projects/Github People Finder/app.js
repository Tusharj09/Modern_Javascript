//Init Github
const github = new Github;
//Init UI
const ui = new UI;
//Search Input
const searchUser = document.getElementById('searchUser');


//Search input Add Event Listener
searchUser.addEventListener("keyup",(e) => {
// get Input text
const userText = e.target.value;
//console.log(userText);

if(userText !==''){
    // Make http call
    console.log(userText);
    github.getUser(userText)
    .then( data =>{
         console.log(data);
            
           if(data.profile.message ==='Not Found')
             {
                 //Show Alert
               ui.showAlert('User not found','alert alert-danger');
               
             }
             else {
             //Show profile
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
             }
    
     })
     .catch(err => {
         console.log("reject" , err);
     });

}
else {
    //Clear Profile
    ui.clearProfile();

}
});