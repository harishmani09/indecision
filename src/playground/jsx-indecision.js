console.log('App is running');


const app = {
    title: 'Indecision App!',
    subtitle: "Put your lives in hand of Pearl!",
    options: ['One', 'Two', 'Three', 'Four']
} 

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        
    }
    getOptionsCounter();
}


const removeItem = (e) => {
    e.preventDefault();

    app.options = [];

    getOptionsCounter();
}


const decision = () => {

    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById("app");




const getOptionsCounter = () => {
    const template = (
        <div>
        <h1> {app.title}   </h1>
        {app.subtitle && <p> {app.subtitle} </p>}
        <p> { app.options.length > 0 ? `Here are your options`: 'No options'}</p>
        <button disabled= {app.options.length===0} onClick= {decision}> What should i do? </button>
        <button onClick= {removeItem} name="buttonVal"> Remove All Items </button>



        <ol>
            {
                app.options.map( (lists) => {
                    return <li key = {lists}> {lists} </li>
                })

            }
        </ol>
        <form onSubmit= {onFormSubmit}>
            <input type="text" name="option"/>
            <button> Add Option </button>
        </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
}

getOptionsCounter();

