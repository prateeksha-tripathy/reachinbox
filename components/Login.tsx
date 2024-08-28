import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 border-white  p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-white text-2xl mb-6">Create a new account</h2>
        <button className="w-full h-10 flex items-center justify-center bg-white text-black rounded-md my-7 py-2 mb-4">
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
          Sign Up with Google
        </button>
        <button
          className="w-full text-white rounded-md my-10 py-2 mb-4 h-14"
          style={{
            background: "linear-gradient(100deg, #4B63DD 0%, #0524BF 100%)",
          }}
        >
          Create an Account
        </button>
        <p className="text-center text-white mt-4">
          Already have an account? <a href="#" className="text-blue-500">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
