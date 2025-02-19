const fakeRequest = (url)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
            const data = pages[url]
            if(data){
                resolve({status: 200, data});
            }else{
                reject({status: 405});
            }  
        }, 2000);
    })
}

/* Still nested & Uncaught exception for nested calls */
// fakeRequest('/users').then((res)=>{
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then((res)=>{
//         const tpost = res.data.topPostId
//         fakeRequest(`/posts/${tpost}`).then((res)=>{
//             console.log(res.data.title)
//         })
//     })
// }).catch((res)=>{
//     console.log(res.status)
//     console.log("Failure")
// })

fakeRequest('/users')
    .then((res)=>{
        console.log(res)
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`);
    }).then((res)=>{
        console.log(res)
        const tpost = res.data.topPostId
        return fakeRequest(`/posts/${tpost}`)
    }).then((res)=>{
        console.log(res)
        console.log(res.data.title)
    }).catch((res)=>{
        console.log(res.status)
        console.log("Failure")
    })