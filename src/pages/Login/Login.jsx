import React, { useState } from 'react'

const Login = () => {
    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value='submit'/>

                <button>
                    demouser
                </button>
            </form>

        </div>

    )
}

export default Login