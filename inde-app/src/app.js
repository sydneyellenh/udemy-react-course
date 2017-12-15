console.log('App.JS is running!');

class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision App';
        const subtitle = 'Not sure what to do? Put your life in the hands of a computer!';
        const options = ['Item One', 'Item Two', 'Item Three'];

        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action/>
            <AddOption/>
            <Options options={options}/>
            </div>
        );
    }
}

class Header extends React.Component{

    render(){
        console.log(this.props);
        return (
        
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>

        );
    }
}

class Action extends React.Component{

    handlePick(){
        
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick} className="btn-info">What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }   

    handleRemoveAll(){
        console.log(this.props.options);
        // alert('clear');
    }

    render(){
        return (
            <div>
                <h4>You have {this.props.options.length} options:</h4>

                {this.props.options.map((option) => <Option key={option} optionText={option}/> )}

                <button onClick={this.handleRemoveAll} className="btn-danger">Clear Selection</button>
                
                <Option/>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        );
    }
}

class AddOption extends React.Component{

    handleAddOption(e){
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
    
        if (option){
            console.log(option);
            this.options.push(option);
            e.target.elements.option.value = '';
    }
}
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}> 
                <input type="text" name="option"/>
                <button className="btn-success">Add Option</button>
                </form>                
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));