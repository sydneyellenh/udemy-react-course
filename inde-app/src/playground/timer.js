class TimerExample extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        elapsed: 0
      };


    }
    componentDidMount() {
      // componentDidMount is called by react when the component 
      // has been rendered on the page. We can set the interval here:
  
      //this.timer = setInterval(this.tick.bind(this), 50); //or
      this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
      // This method is called immediately before the component is removed
      // from the page and destroyed. We can clear the interval here:
  
      clearInterval(this.timer);
    }
  
    tick() {
      // This function is called every 50 ms. It updates the 
      // elapsed counter. Calling setState causes the component to be re-rendered
  
      this.setState({
        elapsed: new Date() - this.props.start
      });
  
    }

    startTimer(){
      alert('onclick works!');
    }
  
    render() {
      const elapsed = Math.round(this.state.elapsed / 100);
      const seconds = (elapsed / 100 * 10).toFixed(.5);
      // This will give a number with one digit after the decimal dot (xx.x):
      //if(seconds == 6){
      //  alert('One Minute');
       //} //else if (seconds >= 8){
        //  const minutes = (elapsed * 100).toFixed(1);
      // }
  
      // Although we return an entire <p> element, react will smartly update
      // only the changed parts, which contain the seconds variable.
      
      return ( 
        <div>
          <p> This example was started <b> {seconds} seconds </b> ago.</p>
          <button onClick={start=(Date.now)}>Start</button>
        </div>
      )
    }
  }
  

  
  ReactDOM.render(<TimerExample/>,
    document.getElementById('app')
  );