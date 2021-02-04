//Init Github
const github = new Github;

//Search Input
const searchUser = document.getElementById('searchUser');


//Search input Add Event Listener
searchUser.addEventListener("keyup",(e) => {
// get Input text
const userText = e.target.value;

if(userText !==''){
    // Make http call
    github.getUser(userText).then( data =>
        {
            if(data.profile.message ==='Not Found')
            {
                //Show Alert

            }
            else {
                //Show profile

            }
        console.log(data);
    }).catch(err => {
        console.log("reject" , err);
    });

}
else {
    //Clear Profile
}
});