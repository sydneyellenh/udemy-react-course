

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        }
    }
    add(){
        this.setState((prevState) => {
            return {
                count: prevState.count+ 1
            }
        });
        // this.state.count = this.state.count + 1;
        console.log(this.state);

    }

    subtract(){
        this.setState((prevState) => {
            if(prevState.count >= 1){
            return{
                count: prevState.count - 1
            }
        }
        });
    }

    reset(){
        this.setState(() => {
            return{
                count: 0
            }
        });
    }
    
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button className="btn-success" onClick={this.add}>+</button>
                <button className="btn-info" onClick={this.subtract}>-</button>
                <button className="btn-danger" onClick={this.reset}>Reset</button>
                <br/>
            </div>
        )
    }
}

  
  

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