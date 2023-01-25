import NewFund from "./NewFund";

const Fund = ({currUser, data, setMessage}) => {
    const {id, name, allocated, target, target_date } = data;
    const ratio = (allocated/target);

    return (
        <section className="fundtracker">
            <h4 className='title'>Your {name} fund has ${allocated} of the ${target} target amount. </h4>
            <h4>You want to reach the target by {target_date}</h4>
        </section>
    )


}

export default Fund;