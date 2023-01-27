import DeleteAccount from "./DeleteAccount";
import UpdateAccount from "./UpdateAccount";
import {useState} from 'react'

const Account = ({currUser, data, setAccounts, accounts, setUpdates}) => {
    const {id, name, amount } = data;

    return (
        <section className="accttracker">
            <h4 className='title'>Your {name} account has ${amount} </h4>
            <details>
            <summary>
                Edit this account
            </summary>
            <UpdateAccount currUser={currUser} id={id} setAccounts={setAccounts} accounts={accounts} setUpdates={setUpdates} data={data} />
            </details>
            <DeleteAccount currUser={currUser} id={id} setAccounts={setAccounts} accounts={accounts} />
        </section>
    )


}

export default Account;