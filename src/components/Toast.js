import React from 'react'

 export class Toast extends React.Component {
    render() {
        const divStyle = {
            position: 'fixed',
            bottom: '50px',
            left: '20px',
            backgroundColor: 'green',
            color: '#fff',
            padding: '15px',
        }

        // Is this an anti-pattern? Not sure how we conditionally render
        // a component when using the container+component structure.
        if (!this.props.toast.message) {
            return null;
        }

         return (
            <div className="Toast-container">
                <div style={divStyle}>
                    {this.props.toast.message}
                </div>
            </div>
        )
    }
}

export default Toast 