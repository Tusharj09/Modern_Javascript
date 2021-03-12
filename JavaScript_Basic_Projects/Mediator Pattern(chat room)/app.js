const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send : function(message , to) {
        this.chatroom.send(message,this,to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);

    }
}

const Chatroom = function() {
    let users = {};//list of users

    return {
        register : function (user){
            users[user.name] = user;
            user.chatroom = this;

        },
        send: function(message,from,to) {
           if(to) {
               //Single user msg
               to.receive(message,from);

           } else {
            //Mass msg
            for(key in users) {
                if(users[key] !==  from)
                {
                    users[key].receive(message,from);
                }

            }

           }

        }

    }
}



const tushar = new User('Tushar');
const jeff = new User('Jeff');
const sara = new User('sara');

const chatroom = new Chatroom();
chatroom.register(tushar);
chatroom.register(jeff);
chatroom.register( sara);

tushar.send('Hello Jeff',jeff);
sara.send('hello Tushar, You are best Dev ever',sara);
jeff.send('Hello Everyone!!!');