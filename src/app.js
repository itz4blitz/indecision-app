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

const onRemoveAll = () => {
    appObject.options = [];
    render();
}

// const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            {appObject.title && <h1>{appObject.title}</h1>}
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{appObject.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>

            {
                // numbers.map((number) => {
                //     return <p key="number">Number: {number}</p>
                // })
            }

            <ol>
                {
                    appObject.options.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
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