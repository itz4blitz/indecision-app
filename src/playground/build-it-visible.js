let showDetails = false;

const toggleDetails = () => {
    showDetails = !showDetails
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{showDetails ? 'Hide details' : 'Show details'}</button>
            {showDetails && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
                )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

render();
