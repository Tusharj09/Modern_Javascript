const data = [
    {
        name : 'Jone Doe',
        age:32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name : 'Jen Smith',
        age: 26,
        gender: 'femmale',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name : 'William Johnson',
        age:28,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    }
];


const profiles = profileIterator(data);
nextProfile();

//Next event
document.getElementById('next').addEventListener('click',nextProfile);




function nextProfile(){
    const currentprofile = profiles.next().value;

  if(currentprofile !=undefined)
  {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list=group">
    <li class="list-group-item"> Name : ${currentprofile.name}</li>
    <li class="list-group-item"> Age : ${currentprofile.age}</li>
    <li class="list-group-item"> Location : ${currentprofile.location}</li>
    <li class="list-group-item"> Preference : ${currentprofile.gender} looking for ${currentprofile.lookingfor}  </li>
    </ul>
    `;


    document.getElementById('imageDisplay').innerHTML = `<img src = "${currentprofile.image}">`;
  }
  else
  {
      window.location.reload();
  }
}


//Profile Iterator
function profileIterator (profiles) {
    let nextIndex = 0;

    return {
        next : function() {
            return nextIndex < profiles.length?
            {value : profiles[nextIndex++], done: false } : 
            {done: true }        
        }
    }
}