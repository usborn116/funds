const Account = ({currUser, data, setMessage}) => {
    const {id, name, amount } = data;

    return (
        <section className="accttracker">
            <h4 className='title'>Your {name} account has ${amount} </h4>
        </section>
    )


}

export default Account;