

function FormComponent({setDescription, setAmount}) {


    return (<>

        <form>
            <input type="text" onChange={setDescription}>Description:</input>
            <input type="amount" onChange={setAmount}>Description:</input>
        </form>

    </>)
}


export default FormComponent;