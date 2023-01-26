import DeleteAccount from "./DeleteAccount";
import UpdateAccount from "./UpdateAccount";

const Account = ({currUser, data, setAccounts, accounts, setUpdates}) => {
    const {id, name, amount } = data;

    return (
        <section className="accttracker">
            <h4 className='title'>Your {name} account has ${amount} </h4>
            <DeleteAccount currUser={currUser} id={id} setAccounts={setAccounts} accounts={accounts} />
            <UpdateAccount currUser={currUser} id={id} setAccounts={setAccounts} accounts={accounts} setUpdates={setUpdates} data={data} />
        </section>
    )


}

export default Account;