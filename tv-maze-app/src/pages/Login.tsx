
import GoogleButton from "react-google-button";
import { UseUserAuth } from "../Context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const { currentUser, signInWithGoogle } = UseUserAuth();



  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/search");
    }
  }, [navigate, currentUser]);

  return (


    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '1080px'
    }}>

      <h3 style={{ color: 'white', position: 'relative', marginTop: '50px', letterSpacing: '1px' }}>SIGN IN FOR MORE CONTENTS</h3>

      <GoogleButton
        style={{
          marginTop: 15,
          marginRight: "auto",
          marginBottom: 15,
          marginLeft: "auto",
          backgroundColor: '#181d31',
          position: 'relative',

        }}
        onClick={signInWithGoogle}
      />
    </div>

  );
}

export default Login;
