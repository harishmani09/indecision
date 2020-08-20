
class VisibilityToggle extends React.Component {

    constructor (props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }


    handleToggleVisibility() {
        this.setState( (prevState) => {
            return {

                visibility : !(prevState.visibility)
            }

        })

        
    }


    render() {
        return(
            <div>
            
            <h1> Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}> { this.state.visibility ? 'Hide Details': 'Show Details' } </button>
            { this.state.visibility && ( <div><p> Only this portion is what is visibile to you!</p></div>)}
            </div>
        );
    }
}

ReactDOM.render( <VisibilityToggle />, document.getElementById('app'))









// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const appDir = document.getElementById("app");



// const render = () => {
// var template = (

//     <div>
//     <h1> Visibility Toggle </h1>
//     <button onClick={toggleVisibility} > 
    
//         {visibility ? 'Hide Details': 'Show Details'}
    
//     </button>
//     {visibility && (
//         <div>
//         <p> hey, these are some of the details you can see </p>
//         </div>
//     )}
//     </div>
// );
// ReactDOM.render(template, appDir);
// }

// render();