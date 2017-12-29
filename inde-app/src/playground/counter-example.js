

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            elapsed: props.elapsed
        }
    }

    tick() {
        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered
    
        this.setState({
          elapsed: new Date() - this.props.start
        });
    
      }

    add(){
        this.setState((prevState) => {
            return {
                elapsed: prevState.elapsed+ 1
            }
        });
        // this.state.count = this.state.count + 1;
        console.log(this.state);

    }

    subtract(){
        this.setState((prevState) => { 
            if(prevState.elapsed >= 1){
            return{
                elapsed: prevState.elapsed - 1
            }
        }
        });
    }

    reset(){
        this.setState(() => {
            return{
                elapsed: 0
            }
        });
    }
    
    render(){
        return (
            <div>
                <h1>Count: {this.state.elapsed}</h1>
                <button className="btn-success" onClick={this.add}>+</button>
                <button className="btn-info" onClick={this.subtract}>-</button>
                <button className="btn-danger" onClick={this.reset}>Reset</button>
                <br/>
            </div>
        )
    }
}

Counter.defaultProps = {
    elapsed: 0
};
  

ReactDOM.render(<Counter/>, document.getElementById('app'));

// const template = (
//     <div>
//         <h1>{app.title}</h1>
        
//         {app.subTitle && <p>{app.subTitle}</p>}

//         {app.options.length > 0 ? 'Here are your options!' : 'No options'}

//         <ul>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ul>

//     </div>);

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// // console.log(templateTwo);

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="add" className="button btn-info" onClick={addOne}>+1</button>
//             <button id="minus" className="button btn-info" onClick={minusOne}>-1</button>
//             <button id="clear" className="button btn-info" onClick={reset}>Clear</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot); //do not delete
// };