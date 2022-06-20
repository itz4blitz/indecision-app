console.log('App.js is running!');

// if statements
// ternary operators
// logical and operator

const appObject = {
    title: 'React',
    subtitle: 'JavaScript',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            {appObject.title && <h1>{appObject.title}</h1>}
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{appObject.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

render();