import NewFund from "./NewFund";
import DeleteFund from "./DeleteFund";

const Fund = ({funds, currUser, data, setFunds}) => {
    const {id, name, allocated, target, target_date } = data;
    const ratio = (allocated/target);
    console.log(funds)

    return (
        <section className="fundtracker">
            <h4 className='title'>Your {name} fund has ${allocated} of the ${target} target amount. </h4>
            <h4>You want to reach the target by {target_date}</h4>
            <DeleteFund currUser={currUser} id={id} setFunds={setFunds} funds={funds} />
        </section>
    )


}

export default Fund;