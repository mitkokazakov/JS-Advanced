// initialize the application

const DB = firebase.firestore();

const headFoot = {
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs',
    loginForm: './templates/login/loginForm.hbs',
    registerForm: './templates/register/registerForm.hbs',
    team: './templates/catalog/team.hbs',
    teamMember: './templates/catalog/teamMember.hbs',
    teamControls: './templates/catalog/teamControls.hbs',
    createForm: './templates/create/createForm.hbs'
};
var app = Sammy('#main', function() {
    // include a plugin
    this.use('Handlebars', 'hbs');


    // define a 'route'
    this.get('#/', function() {

        const currentUser = this.app.userData;

        this.loadPartials(headFoot).then(function() {
            this.partial('./templates/home/home.hbs');
        })
    });

    this.get('#/home', function(ctx) {

        const id = localStorage.getItem('id');
        const username = localStorage.getItem('username');

        if (id !== null) {
            //const curr = JSON.parse(userInfo);
            ctx.loggedIn = true;
            ctx.username = username;
        }

        //const currentUser = this.app.userData;
        //context.loggedIn = true;
        //context.username = 'Mitko';

        this.loadPartials(headFoot).then(function() {
            this.partial('./templates/home/home.hbs')
        })
    });

    this.get('#/about', function(ctx) {

        this.loadPartials(headFoot).then(function() {
            this.partial('./templates/about/about.hbs')
        })
    });

    this.get('#/catalog', function(ctx) {


        ctx.hasNoTeam = false;
        ctx.teams = [];

        //     ctx.teams = [{
        //         _id: 123,
        //         name: 'Mitko',
        //         comment: 'No'
        //     },
        //     {
        //         _id: 665,
        //         name: 'Varna',
        //         comment: 'Some text'
        //     }
        // ]




        DB.collection("teams").get().then(t => {

            t.forEach(element => {

                console.log(element.data());
                // let obj = {
                //     _id: element.id,
                //     name: element.data().name,
                //     comment: element.data().comment
                // }
                this.teams.push(element.data())

            });


        })





        ctx.loadPartials(headFoot).then(function() {
            this.partial('./templates/catalog/teamCatalog.hbs');

        })
    });

    this.get('#/catalog/:id', function(ctx) {


        ctx.name = 'Plovdiv';
        ctx.comment = 'Oh God';

        ctx.members = [{
                username: 'Kaval'
            },
            {
                username: 'Tragediq'
            }
        ]

        ctx.isAuthor = true;
        ctx.teamId = ctx.params.id;
        ctx.isOnTeam = false;

        console.log(ctx.params);

        this.loadPartials(headFoot).then(function() {
            this.partial('./templates/catalog/details.hbs');

        })
    });

    this.get('#/login', function(ctx) {

        this.loadPartials(headFoot).then(function() {
            this.partial('./templates/login/loginPage.hbs');
        })
    });

    this.get('#/register', function(ctx) {

        this.loadPartials(headFoot).then(function() {
            this.partial('./templates/register/registerPage.hbs');
        })
    });

    this.get('#/logout', function(ctx) {

        firebase.auth().signOut().then(response => {
            localStorage.clear();
            ctx.redirect('#/home');
        })

    })

    this.get('#/create', function(ctx) {

        this.loadPartials(headFoot).then(function() {
            this.partial('./templates/create/createPage.hbs');
        })
    })

    this.post('#/register', function(ctx) {


        const username = ctx.params.username;
        const pass = ctx.params.password;
        const passRepeat = ctx.params.repeatPassword;

        // if (username === '') {
        //     alert('Username cannot be empty');
        //     return;
        // }
        // if (pass.length < 5) {
        //     alert('Password cannot be less than 5 symbols');
        //     return;
        // }
        // if (pass !== passRepeat) {
        //     alert('The passwords must be equal');
        //     return;
        // }

        const obj = {
            username: username,
            password: pass,
            repeat: passRepeat
        }


        firebase.auth().createUserWithEmailAndPassword(username, pass).then(u => {
            console.log(u);
            this.redirect('#/login');
        });

        // fetch('https://routingproject-fc102.firebaseio.com/users.json', {
        //     method: "POST",
        //     body: JSON.stringify(obj)
        // }).then(data => {
        //     console.log(data);
        // });




    })

    this.post('#/login', function(ctx) {

        const { username, password } = ctx.params;

        firebase.auth().signInWithEmailAndPassword(username, password).then(log => {

            const uid = log.user.uid;
            const username = log.user.email;

            localStorage.setItem('id', uid);
            localStorage.setItem('username', username);

            //localStorage.setItem('userInfo', JSON.stringify({ uid, username }));
            this.redirect('#/home');
        })
    })

    this.post('#/create', function(ctx) {

        const { name, comment } = ctx.params;

        const currentTeam = {
            name: name,
            comment: comment
        }

        DB.collection('teams').add(currentTeam).then(data => {
            console.log(data.id);
        })
    })

});

// start the application


window.addEventListener('load', () => {
    app.run('#/');
})