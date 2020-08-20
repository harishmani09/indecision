
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.handleMinusOne= this.handleMinusOne.bind(this);
        this.state = {
            count:0
        };
    }

    componentDidMount() {
        
        try {

        const json = localStorage.getItem('count');
        const count = parseInt(json, 10);

        if(!isNaN(count)){
            this.setState( () => ({ count}) );
        }

        } catch(e) {


        }



    }

    componentDidUpdate(prevState, prevProps) {
        if(prevState.count !== this.state.count) {
        localStorage.setItem('count',this.state.count);

        }

        
    }

    // constructor(props) {
    //     super(props);
    //     this.handleMinusOne= this.handleMinusOne.bind(this);
    // },
    // constructor(props) {
    //     super(props);
    //     this.handleReset=this.handleReset.bind(this);
    // }

    handleAddOne() {
        this.setState( (prevState) => {
            return {
                count:prevState.count+1
            }
        } )
    }
    handleMinusOne() {
        this.setState( (prevState)=> {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset() {
        this.setState( () => {
            return {
                count: 0
            }
        })
    }



    
    render () {
        return (
            <div>
                <h1> Counter: {this.state.count} </h1>
                <button onClick={this.handleAddOne}> + </button>
                <button onClick={this.handleMinusOne}> - </button>
                <button onClick={this.handleReset}> Reset </button>
            </div>
        );
    }
}


ReactDOM.render(<Counter count={2}/>, document.getElementById('app') )

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count=0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById("app");


// const renderCounterApp = () => {

// const templateTwo = (
//     <div>
//     <h1> Count: {count} </h1>
//     <button onClick= {addOne} id="increment" className="button"> +1 </button>
//     <button onClick={minusOne} id="decrement" className="button"> -1 </button>
//     <button onClick={reset} > Reset </button>
//     </div>
// );

// ReactDOM.render(templateTwo, appRoot);

// }

// renderCounterApp();
