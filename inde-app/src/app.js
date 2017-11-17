console.log('App.JS is running!');

//JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subTitle: "Let an app make your choices for you!",
    options: ["one", "two"]
}; 

function userOptions(options){
    if(options.length > 0){
        return <p>Here are your options!</p>;
    } else {
        return "No options";
    }
}

//if the above function is used, then you use {userOptions(app.options)} in the HTML to render the text to the screen

const template = (
    <div>
        <h1>{app.title}</h1>
        
        {app.subTitle && <p>{app.subTitle}</p>}

        {app.options.length > 0 ? 'Here are your options!' : 'No options'}

        <ul>
            <li>Item One</li>
            <li>Item Two</li>
        </ul>

    </div>);











//////////////////////////////////////////////////////////

const user = {
    // name: 'Sydney',
    age: 21,
    userLocation: 'Indianapolis'
}

// checks to see if userLocation exists
function getLocation(userLocation){
    if (userLocation){
        return <p>Location: {userLocation}</p>;
    }
   };

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.userLocation)}
        
    </div>
);


const appRoot = document.getElementById('app');
const userRoot = document.getElementById('user');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, userRoot);