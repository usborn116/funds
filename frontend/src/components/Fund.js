import DeleteFund from "./DeleteFund";
import UpdateFund from "./UpdateFund";

const Fund = ({funds, currUser, data, setFunds, setUpdates}) => {
    const {id, name, allocated, target, target_date } = data;
    const ratio = (allocated/target);

    return (
        <section className="fundtracker">
            <h4 className='title'>Your {name} fund has ${allocated} of the ${target} target amount. </h4>
            <h4>You want to reach the target by {target_date}</h4>
            <DeleteFund currUser={currUser} id={id} setFunds={setFunds} funds={funds} />
            <UpdateFund currUser={currUser} data={data} setFunds={setFunds} funds={funds} setUpdates={setUpdates}/>
        </section>
    )


}

export default Fund;