import React from 'react'

export default function Register() {
    let sendData=()=>{
        //    alert('okkkk');

        let data={
            username: "Priti",
            email: "priti@gmail.com",
            password: "PrItI@9171"
        }
        fetch('http://localhost:1337/api/auth/local/register',
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // .then((res)=>{
        //     res.json().then((data)=>{
        //         console.log(data);
        //     });
        //     // console.log(res);        
        // })
        .then((res)=>{res.json()})
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{console.log(err);});

    }
    return (
        <form>
            <h1>Register Form</h1>
            <div className="mb-3 mt-5">
                <label htmlFor="username" className="form-label">User Name</label>
                <input type="text" name="username" className="form-control" id="username" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="password" />
            </div>
            <button type="button" onClick={sendData} className="btn btn-primary">Submit</button>
        </form>
    )
}
