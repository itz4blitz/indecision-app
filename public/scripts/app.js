'use strict';

console.log('App.js is running!');

// if statements
// ternary operators
// logical and operator

var appObject = {
    title: 'React',
    subtitle: 'JavaScript',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var appRoot = document.getElementById('app');

var onRemoveAll = function onRemoveAll() {
    appObject.options = [];
    render();
};

// const numbers = [55, 101, 1000];

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        appObject.title && React.createElement(
            'h1',
            null,
            appObject.title
        ),
        appObject.subtitle && React.createElement(
            'p',
            null,
            appObject.subtitle
        ),
        React.createElement(
            'p',
            null,
            appObject.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            appObject.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            appObject.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
