import React,  {Component} from 'react';

class PropsClassComponents extends Component {
    render() {
        // Using props in class components through using this keyword
        return (
        <h1>
            Welcome {this.props.name} a.k.a {this.props.professionName}
        </h1>
        );
    }
}

export default PropsClassComponents;