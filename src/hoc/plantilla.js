import React, { Component } from 'react';

class ExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    tempFunction = () => {
        console.log("tempFunction");
    }

    render() {
        const updateChildrenWithProps = React.Children.map(
            this.props.children,
            (child, i) => {
                return React.cloneElement(child, {
                    tempFunction: this.tempFunction,
                });
            }
        );
        return (
            <div>
                {updateChildrenWithProps}
            </div>
        );
    }
}

export default ExampleComponent;

