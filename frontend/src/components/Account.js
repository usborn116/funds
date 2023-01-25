import DeleteAccount
 from "./DeleteAccount";
const Account = ({currUser, data, setAccounts, accounts}) => {
    const {id, name, amount } = data;

    return (
        <section className="accttracker">
            <h4 className='title'>Your {name} account has ${amount} </h4>
            <DeleteAccount currUser={currUser} id={id} setAccounts={setAccounts} accounts={accounts} />
        </section>
    )


}

export default Account;