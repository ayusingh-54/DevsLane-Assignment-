import react from 'react'

function Login() {

    function LoginButton() {
        alert("Login Successful")
     }

    return (
     
        <>
            <h1 className="text-2xl font-bold mb-4">Login Page</h1>
            <button className='color bg-red-400' onClick={LoginButton}>Login</button>
        
        
        </>
    )
}
export default Login;