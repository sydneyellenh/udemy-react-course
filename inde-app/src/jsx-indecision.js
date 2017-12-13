//JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subTitle: "Let an app make your choices for you!",
    options: []
}; 

const appRoot = document.getElementById('app'); //Do not delete

function userOptions(options){
    if(options.length > 0){
        return <p>Here are your options!</p>;
    } else {
        return "No options";
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';

        render();
    }    
};

const clear = () => {
    // app.options.length = 0;
    // OR
    app.options = [];

    render();
};

 const onMakeDecision = () => {

    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    console.log(randNum);

    if(app.options.length > 1){
        alert(option);
    }

 };

    const render = () => {
        const template = (
            <div>
                <h1>{app.title}</h1>
                
                {app.subTitle && <p>{app.subTitle}</p>}
        
                <p>{app.options.length > 0 ? 'Here are your options!' : 'No options'}</p>
                <p>{app.options.length}</p>
                <button onClick={onMakeDecision} className="btn-info">What should I do?</button>
                <button className="btn-danger" onClick={clear}>Remove All</button>

                <ul>
                    {app.options.map((option) => <li id={option + '-' + 'item'} key={option}>{option}</li>)}
                </ul>
    
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button className="btn-info">Add Option</button>
                </form>
        
            </div>
        );

        ReactDOM.render(template, appRoot);  
    };


    render();


   