import './Login.css';
import spotify from './images/spotify.png';

const Login = () => {
    function login(){
		let client_id = '0bb1e801202d4028b044f848af13e749'; // Your client id
        let redirect_uri = window.location.href + 'app/'; // Your redirect uri
        
		let scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative ';

		let url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(scope)}`
		window.location = url;
	}
    return (
        <div className="login--wrapper">
            <div className="login-card">

                <h1 className="landing-page-title">
                 Listen & Swipe 
                </h1>

                <p id="pitch">
                    Ever loved a song so much you wanted to swipe right on it? Here's an app for you! 
                    With Listen and Swipe, you just need a spotify account and we'll recommend you songs
                    based on your recent playlist history! Swipe the card right if you like the song, and left if you don't.
                    We'll compile the liked songs into a list for you to see!
                    (Remember to click on the album cover to listen to the song on Spotify).
                </p>
                
                <button onClick={login}> Login with Spotify </button>
                
            </div>
        </div>
    )
}

export default Login;