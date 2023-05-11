export const getData= async (endpoint, setter, errsetter)=>{
    try {
        const response=await fetch(`http://localhost:3000/${endpoint}`, {
            method: "get",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        })
        const data=await response.json()
        setter(() => data)
    }
    catch(error){
        errsetter(error)
        setter([])
    }
}

export const updateData = async (endpoint, id, info, setter) => {
    const url=`http://localhost:3000/${endpoint}/${id}`
    try{
        const response=await fetch(url, {
            method: 'put',
            headers: {
                "content-type": 'application/json',
                "accept": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(info)
        }) 
        const data=await response.json()
        if(!response.ok) throw data.error
        getData(endpoint, setter)
    } catch (error){
        console.log("error", error)
    }
}

export const deleteData = async (endpoint, id = 0, setter, state)=>{
    let url = id === 0 ? `http://localhost:3000/${endpoint}` : `http://localhost:3000/${endpoint}/${id}`
    try {
        const response=await fetch(url,{
            method: "delete",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            },
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        console.log(state)
        setter(state.filter(item => item.id !== id))
    } catch (error) {
        console.log("error", error)
    }
}

export const deleteUser = async (setter)=>{
    try {
        const response=await fetch(`http://localhost:3000/signup`,{
            method: "delete",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            },
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        localStorage.removeItem("token")
        console.log(data.message)
        setter({name: null, id: null, email: null, totFunds: 0, totAccts: 0})
    } catch (error) {
        console.log("error", error)
    }
}

export const login = async (user, setter)=>{
    const url="http://localhost:3000/login"
    try{
        const response=await fetch(url, {
            method: "post",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data=await response.json()
        if(!response.ok) 
          throw data.error
        localStorage.setItem("token", response.headers.get("Authorization"))
        setter(data) 
    }catch(error){
      window.alert(error)
    }
}

export const logout = async (setCurrUser, setters)=>{
    try {
        const response=await fetch("http://localhost:3000/logout",{
            method: "delete",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            },
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        localStorage.removeItem("token")
        setters.forEach(setter => setter(0))
        setCurrUser('currUser', {name: null, id: null, email: null})  
    } catch (error) {
        console.log("error", error)
    }
}

export const newData =async (endpoint, info, setter)=>{
    const url=`http://localhost:3000/${endpoint}`
    try{
        const response=await fetch(url, {
            method: 'post',
            headers: {
                "content-type": 'application/json',
                "accept": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(info)
        }) 
        const data=await response.json()
        if(!response.ok) throw data.error
        setter(prevdata => [...prevdata, data])
    } catch (error){
        console.log("error", error)
    }
}