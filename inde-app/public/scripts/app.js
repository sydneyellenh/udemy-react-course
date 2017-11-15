"use strict";

console.log('App.JS is running!');

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subTitle: "Let an app make your choices for you!"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subTitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "One"
        ),
        React.createElement(
            "li",
            null,
            "Two"
        ),
        React.createElement(
            "li",
            null,
            "Three"
        )
    )
);

//////////////////////////////////////////////////////////

var user = {
    name: 'Sydney',
    age: 21,
    userLocation: 'Indianapolis'
};

function getLocation(userLocation) {
    if (userLocation) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            userLocation
        );
    }
};

// var userName = "Sydney";
// var age = 21;
// var userLocation = "Indianapolis";

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
