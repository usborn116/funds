const DeleteAccount =({currUser, id, setAccounts, accounts })=>{
    const logout=async (id)=>{
        try {
            const response=await fetch(`http://localhost:3000/accounts/${id}`,{
                method: "delete",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                },
            })
            const data=await response.json()
            if(!response.ok) throw data.error
            console.log(accounts)
            setAccounts(accounts.filter(item => item.id !== id))
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleClick=e=>{
        e.preventDefault()
        logout(id)
    }
    return (
        <div>
            <input type="button" value='Delete Account' onClick={handleClick}/>
        </div>
    )
}
export default DeleteAccount