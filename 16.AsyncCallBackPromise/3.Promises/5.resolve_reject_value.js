// Resolving and Rejecting value
const fakeRequest = (url)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const page = {
                '/user': [
                    {id: 1, username: "Bershin John"},
                    {id: 5, username: "Thomas Shawn"}
                ],
                '/about': "I am a ecom site"
            }
            const data = page[url]
            if(data){
                resolve({status: 200, data});
            }else{
                reject({status: 404});
            }  
        }, 2000);
    })
}

fakeRequest('/abou').then((res)=>{
    console.log("Success")
    console.log(res.status, res.data)
}).catch((res)=>{
    console.log(res.status)
    console.log("Failure")
})