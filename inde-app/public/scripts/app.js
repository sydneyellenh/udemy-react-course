"use strict";

console.log('App.JS is running!');

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subTitle: "Let an app make your choices for you!",
    options: ["one", "two"]
};

// Checks to see if subtitle exists - logical style
// function subtitleExist(subTitle){
//     if (subTitle){
//         return <p>{subTitle}</p>;
//     } else {
//         return 'Unknown';
//     }
// }

function userOptions(options) {
    if (options.length > 0) {
        return React.createElement(
            "p",
            null,
            "Here are your options!"
        );
    } else {
        return "No options";
    }
}

//if the above function is used, then you use {userOptions(app.options)} in the HTML to render the text to the screen

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        "p",
        null,
        app.subTitle
    ),
    app.options.length > 0 ? 'Here are your options!' : 'No options',
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    )
);

//////////////////////////////////////////////////////////

var user = {
    // name: 'Sydney',
    age: 21,
    userLocation: 'Indianapolis'

    // checks to see if userLocation exists
};function getLocation(userLocation) {
    if (userLocation) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            userLocation
        );
    }
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById('app');
var userRoot = document.getElementById('user');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, userRoot);
