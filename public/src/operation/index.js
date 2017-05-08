import React  from 'react';
import './style.css'

var OperationPage =React.createClass( {

    render() {
        return (
            <div className="background">
                {'OperationPage'+this.props.id}
            </div>
        );
    }
});

module.exports=OperationPage;

