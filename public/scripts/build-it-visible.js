'use strict';

console.log('App.js is running!');

// if statements
// ternary operators
// logical and operator

var appObject = {
    title: 'Indecision App',
    subtitle: 'An app built using React',
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

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * appObject.options.length);
    var option = appObject.options[randomNum];
    alert(option);
};

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
            'button',
            { disabled: appObject.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
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
