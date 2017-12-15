console.log('Visibility.js is working!');

// let visibility = false;

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            visible: false
        }

        //  console.log(this.toggle);
         console.log(this.state.visible);

    }

        toggle(){
            this.setState((prevState) => {
               return{
                visible: !prevState.visible
               } 
               
            });
            console.log(this.state.visible);
        }
        


        render(){
            return(
                <div>
                <h1>Visibility Toggle</h1>
                <button className="btn-info" onClick={this.toggle}>
                {this.state.visible ? 'Hide Details' : 'Show details'}
                    </button>
                    {this.state.visible && (<div><p>Here is my text!</p></div>)}
                </div>
            )
        }
        
    }


ReactDOM.render(<Visibility/>, document.getElementById('app'));
