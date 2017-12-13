console.log('App.JS is running!');

class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <Action/>
            <Options/>
            <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component{

    render(){
        return (
        
            <div>
                <h1>Indecision App</h1>
                <h3>Not sure what to do?</h3>
                <h3>Put your life in the hands of a computer!</h3>
            </div>

        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button className="btn-info">What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <p>Here are your options!</p>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <button className="btn-success">Add Option</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));