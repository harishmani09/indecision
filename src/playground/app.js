
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if(options) {
            this.setState( () => ({options}));
        }

        } catch (e){


        }

        

    }
    componentDidUpdate(prevState, prevProps ) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
    
        this.setState( () => ({ options:[] }));
    }

    handleDeleteOption(optionToRemove) {

        this.setState( (prevState) => ({ 
            options: prevState.options.filter( (option) => {
                return optionToRemove !== option;
            })

        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option)  
    }

    handleAddOptions(option) {
        if(!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 
        // this.setState( (prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     }
        // })

        this.setState( (prevState) => ({  options: prevState.options.concat([option])} ));

    }

    render() {
        
        const subtitle = 'Put your life in the hands of Tess';
        

        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action 
            handlePick = {this.handlePick}
            hasOptions = {this.state.options.length>0}
            />
            <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOptions 
            handleAddOptions = {this.handleAddOptions}
            />
            </div>
        );
        }
}

IndecisionApp.defaultProps = {
    options : []
};












const Header = (props) => {
    
    return (
        <div>
        <h1> {props.title}</h1>
        {props.subtitle && <h2> {props.subtitle}</h2>}
        
        </div>
        
        );
}





// class Header extends React.Component { 
//     render() {
        
//         return (
//             <div>
//             <h1> {this.props.title}</h1>
//             <h2>{this.props.subtitle} </h2>
            
//             </div>
            
//             );
//     }

// }






Header.defaultProps = {
    title: 'Indecision'
};



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



const Options = (props) => {

    return (
        <div>
            { props.options.map( (option) => (
                <Option 
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}                
                />
            )) 
        }
            <button onClick={props.handleDeleteOptions}> Remove All</button>
            {props.options.length === 0 && <p> Pls add and option to get started</p>}
        <Option />
        </div>
    );

}





// class Options extends React.Component {
//     // constructor(props) {
//     //    super(props); 
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this)
//     // }

//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     // }

//     render() {
//         return (
//             <div>
//                 { this.props.options.map( (option) => <Option key={option} optionText={option}/>) }
//                 <button onClick={this.props.handleDeleteOptions}> Remove All</button>
//             <Option />
//             </div>
//         );
//     }
// }

const Option = (props) => {

    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e) => {   
                props.handleDeleteOption(props.optionText);
            }}
            > 
            Remove
            </button>
        </div>
    );
    
};


// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Options: {this.props.optionText}
//             </div>
//         );
//     }
// }


class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {

            error: undefined
        };
    }

    handleAddOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        
        // this.setState( () => {
        //     return {  error };
            
            
        // }) 
        this.setState( () => ({error}))

        if(!error) {
            e.target.elements.option.value = '';
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit = {this.handleAddOptions}>
                    <input type='text' name="option" />
                    <button> Add Options! </button> 
                    
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return (
        <div>
            <p> Name:{props.name}</p>
            <p> Age: {props.age} </p>
        </div>

    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))