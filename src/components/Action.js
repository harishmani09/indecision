import React from 'react';


const Action = (props) => {
    return (
        <div>
        
            <button 
            onClick={props.handlePick}
            disabled = {!props.hasOptions}
            > 
            what should i do?</button>
        </div>
    )
}

// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handlePick')
//     // }

//     render() {
//         return (
//             <div>
            
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled = {!this.props.hasOptions}
//                 > 
//                 what should i do?</button>
//             </div>
//         )
//     }
// }

export default Action;