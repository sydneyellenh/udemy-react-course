console.log('App.JS is running!');

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subTitle: "Let an app make your choices for you!"
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>

        <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ol>
    </div>);

//////////////////////////////////////////////////////////

var user = {
    name: 'Sydney',
    age: 21,
    userLocation: 'Indianapolis'
}

function getLocation(userLocation){
    if (userLocation){
        return <p>Location: {userLocation}</p>;
    }
   };

// var userName = "Sydney";
// var age = 21;
// var userLocation = "Indianapolis";

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.userLocation)}
        
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);