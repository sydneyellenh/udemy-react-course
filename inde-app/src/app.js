console.log('App.JS is running!');

//stateless functional component



class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return{
                options: []
            }
        });
    }

    handlePick(){

            const randNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randNum];

            if (this.state.options.length > 1){
                alert(option);
            }
    }

    handleAddOption(option){

        if (!option){
            return `Enter valid value to add item`;
        } else if (this.state.options.indexOf(option) > -1){
            return `This option already exists`;
        }
        
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
}

    render(){
        const title = 'Indecision App';
        const subtitle = 'Not sure what to do? Put your life in the hands of a computer!';
        // const options = ['Item One', 'Item Two', 'Item Three'];

        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick} 
            />
            <AddOption
                handleAddOption={this.handleAddOption}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
            />
            </div>
        );
    }
}

const Header = (props) => {
    return(
            <div>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
            </div>

    );
};

const Action = (props) => {
            return (
            <div>
                <button id="what-do" 
                onClick={props.handlePick} className="btn-info"
                disabled={!props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
};

const Options = (props) => {
            return (
            <div>
                <h4>You have {props.options.length} options:</h4>

                {props.options.map((option) => <Option key={option} optionText={option}/> )}

                <button onClick={props.handleDeleteOptions} className="btn-danger">Clear Selection</button>                
                
            </div>
        );
};

const Option = (props) => {
        return (
            <div>
                <li>{props.optionText}</li>
            </div>
        );
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
            
            const option = e.target.elements.option.value.trim();
            const error = this.props.handleAddOption(option);

            this.setState(() => {
                return { error }
            });
}
    
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}> 
                <input type="text" name="option"/>
                <button className="btn-success">Add Option</button>
                </form>                
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

ReactDOM.render(
    <IndecisionApp/>
    // <User name="Sydney" age="21"/>
    , document.getElementById('app'));