import DeleteAccount from "./DeleteAccount";
import UpdateAccount from "./UpdateAccount";

const Account = ({currUser, data, setAccounts, accounts}) => {
    return (
        <section className="accttracker">
            <h4 className='title'><span className="name">{data.name}:</span>  <span className="amt">${data.amount}</span> </h4>
            <details className='popup'>
            <summary className="edit">
                Edit Account
            </summary>
            <UpdateAccount currUser={currUser} setAccounts={setAccounts} accounts={accounts} data={data} />
            </details>
            <DeleteAccount currUser={currUser} setAccounts={setAccounts} accounts={accounts} data={data} />
        </section>
    )

}
export default Account;