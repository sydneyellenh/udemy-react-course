console.log('App.JS is running!');
//stateless functional component
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOne = this.handleDeleteOne.bind(this);
        this.state = {
            options: props.options
        }
    }

componentDidMount(){

    try {

        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
    
        if (options) {
            this.setState(() => ({ options: options}))
        }
    }

    catch (e){
        //do nothing
    }
}

componentDidUpdate(prevProps, prevState){

    if (prevState.options.length !== this.state.options.length){

        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
}

componentWillUnmount(){
    console.log('componentWillUnmount');
}

handleDeleteOptions(){
        this.setState (() => ({ options: [] }));
}

handleDeleteOne(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
          }));
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

        this.setState((prevState) => ( { 
            options: prevState.options.concat(option) 
        } ));
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
                handleDeleteOne={this.handleDeleteOne}
            />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return(
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h3>{props.subtitle}</h3>}
            </div>

    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
            return (
            <div>
                <button id="what-do" 
                onClick={props.handlePick} 
                className="btn-info"
                disabled={!props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
};

const Options = (props) => {
            return (
            <div>
                
                {props.options.length === 0 && <p>Please add an option to get started!</p>}
                { props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOne={props.handleDeleteOne}
                    />
                ) )}

                <button onClick={props.handleDeleteOptions} className="btn-danger">Clear Selection</button>                
                
            </div>
        );
};

const Option = (props) => {
        return (
            <div>
                {props.optionText}
                <button className="btn-warning"
                    onClick={(e) => {
                        props.handleDeleteOne(props.optionText);
                    }}
                >
                    Remove
                </button>
                <br/>
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

            this.setState(() => ({ error }));

            if (!error){
                e.target.elements.option.value = '';
            }

            //this clears the input for the text box upon form enter
            document.getElementsByTagName('input')[0].value = '';
    
    }

    // clearInput(){


    // }
    
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}> 
                <input type="text" name="option" 
                // onSubmit={this.handleAddOption}
                />
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