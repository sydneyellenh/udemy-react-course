console.log('Visibility.js is working!');

let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
}

const render = () => {

    const jsx = (

        <div>
        <h1>Visibility Toggle</h1>
        <button className="btn-info" onClick={toggle}>
        {visibility ? 'Hide Details' : 'Show details'}
            </button>
            {visibility && (
                <div><p>Here is my text!</p></div>
            )}
        </div>

    );

    ReactDOM.render(jsx, document.getElementById('app'));

};

render();