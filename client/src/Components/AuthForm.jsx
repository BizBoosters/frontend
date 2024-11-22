// import React, { useState } from 'react';

// const AuthForm = ({onFormSubmit}) => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleAuthForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
//       <div className="bg-white p-8 rounded-lg shadow w-full max-w-sm">
//         <p className="text-xl text-center text-black-500 font-primary font-bold">
//           {isLogin ? 'Log In' : 'Sign Up'}
//         </p>
//         <form className="mt-6">
//           <div className="mb-5">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//             <input
//               type="email"
//               id="email"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="name@flowbite.com"
//               required
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//             <input
//               type="password"
//               id="password"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               required
//             />
//           </div>

//           {isLogin ? null : (
//             <div className="mb-5">
//               <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 required
//               />
//             </div>
//           )}

//           <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your role</label>
//           <select
//             id="role"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//             <option>Entrepreneur</option>
//             <option>Investor</option>
//           </select>

//           <button
//             type="submit"
//             className="w-full py-2.5 px-5 mt-5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             {isLogin ? 'Log In' : 'Sign Up'}
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
//           {isLogin ? 'Not registered? ' : 'Already registered? '}
//           <span
//             onClick={toggleAuthForm}
//             className="text-blue-500 hover:underline cursor-pointer"
//           >
//             {isLogin ? 'Sign up' : 'Log in'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }




import Cookies from "js-cookie";
// export default AuthForm;
async function login(username, password) {
  const url = "http://localhost:3000/login";

  const response = await fetch(url, {
      method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email:username, password })
  });

  if (response.ok) {
    const data = await response.json();
    Cookies.set("token", data._id, {
      expires: 30,
    });
    console.log("Login successful:", data);
    // return response.json(data);
  } else {
    console.error("Login failed:", response.status, response.statusText);
  }
}

// Function to call the /signup API
async function signup(email, password) {
  const url = "http://localhost:3000/signup";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (response.ok) {
    const data = await response.json();
    // Cookies.set("token", data.accessToken, {
    //   expires: 30,
    // });
    console.log("Signup successful:", data);
    // return response.json(data);
  } else {
    console.error("Signup failed:", response.status, response.statusText);
  }
}
import React, { useState } from 'react';

const AuthForm = ({ onFormSubmit, isVisible }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleAuthForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (isLogin) {
      // Call the login function
      try {
        await login(email, password);
        onFormSubmit(true); // Redirect on successful login
      } catch (error) {
        console.error('Login error:', error);
      }
    } else {
      // Perform signup validation
      if (password === confirmPassword) {
        try {
          await signup(email, password);
          // onFormSubmit(true); // Redirect on successful signup
        } catch (error) {
          console.error('Signup error:', error);
        }
      } else {
        alert('Passwords do not match'); // Simple error handling
      }
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isVisible? 'opacity-100' : 'opacity-0 pointer-events-none'} `}>
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-sm transition-transform transform duration-300 ease-out scale-100"
      style={{transform: isVisible? 'scale(1)' : 'scale(0.95)'}}>
        <p className="text-xl text-center text-black-500 font-primary font-bold">
          {isLogin ? 'Log In' : 'Sign Up'}
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Select your role</label>
          <select
            id="role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Entrepreneur</option>
            <option>Investor</option>
          </select>

          <button
            type="submit"
            className="w-full py-2.5 px-5 mt-5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? 'Not registered? ' : 'Already registered? '}
          <span
            onClick={toggleAuthForm}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
