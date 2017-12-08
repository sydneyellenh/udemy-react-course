const template = (
    <div>
        <h1>{app.title}</h1>
        
        {app.subTitle && <p>{app.subTitle}</p>}

        {app.options.length > 0 ? 'Here are your options!' : 'No options'}

        <ul>
            <li>Item One</li>
            <li>Item Two</li>
        </ul>

    </div>);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};


// console.log(templateTwo);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="add" className="button btn-info" onClick={addOne}>+1</button>
            <button id="minus" className="button btn-info" onClick={minusOne}>-1</button>
            <button id="clear" className="button btn-info" onClick={reset}>Clear</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot); //do not delete
};