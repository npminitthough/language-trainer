export default function GoogleLoginButton () {
    function onClick () {
        window.location.href = '/api/auth/google'
    }
    return <button onClick={onClick}>Login with Google</button>
}