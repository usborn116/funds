import DeleteAccount from "./DeleteAccount";
import UpdateAccount from "./UpdateAccount";

const Account = ({currUser, data, setAccounts, accounts}) => {
    const {id, name, amount } = data;

    return (
        <section className="accttracker">
            <h4 className='title'><span className="name">{name}:</span>  <span className="amt">${amount}</span> </h4>
            <details>
            <summary className="edit">
                Edit Account
            </summary>
            <UpdateAccount currUser={currUser} id={id} setAccounts={setAccounts} accounts={accounts} data={data} />
            </details>
            <DeleteAccount currUser={currUser} id={id} setAccounts={setAccounts} accounts={accounts} />
        </section>
    )

}
export default Account;