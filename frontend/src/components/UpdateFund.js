import { useRef } from "react"
import { updateData, getData } from "./helpers/api_fetches";

const UpdateFund=({currUser, setFunds, funds, data, setUpdates})=>{
    const {id, name, allocated, target, target_date } = data;
    const formRef = useRef()

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const fundInfo={
            "fund":{ name: data.name, allocated: data.allocated, target: data.target, target_date: data.date, user_id: data.userid}
        }
        updateData('funds', id, fundInfo, setFunds)
        getData('funds', setFunds)
        e.target.reset()
    }

    return(
        <div className="update">
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="input">
            <input type="text" name='name' defaultValue={name} />
            <br/>
            </div>
            <div className="input">
            <input type="float" name='allocated' defaultValue={allocated} />
            <br/>
            </div>
            <div className="input">
            <input type="float" name='target' defaultValue={target} />
            <br/>
            </div>
            <div className="input">
            <input type="date" name='date' defaultValue={target_date} />
            <br/>
            </div>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input type="hidden" name='fundid' value={id}/>
            <input type='submit' className="button" value="Submit" />
        </form>
    </div>
    )
}
export default UpdateFund