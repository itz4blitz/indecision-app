class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisiblity() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisiblity}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                { this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))