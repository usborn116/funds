import DeleteFund from "./DeleteFund";
import UpdateFund from "./UpdateFund";

const Fund = ({funds, currUser, data, setFunds, setUpdates}) => {
    const {id, name, allocated, target, target_date } = data;

    return (
        <section className="fundtracker">
            <h4 className='title'>{name}<br></br>
            ${allocated} saved<br></br>
            ${target} target </h4>
            <h4>Due: {target_date}</h4>
            <div className="whole-bar w3-light-grey w3-round-large">
                <div className="progress w3-container w3-blue w3-round-large" style={{width: (allocated/target)*100 + '%'}}>{Math.round(allocated/target*100)}%</div>
            </div>
            <details>
            <summary className="edit">
                Edit this fund
            </summary>
                <UpdateFund currUser={currUser} data={data} setFunds={setFunds} funds={funds} setUpdates={setUpdates}/>
            </details>
            <DeleteFund currUser={currUser} id={id} setFunds={setFunds} funds={funds} />
            
        </section>
    )


}

export default Fund;