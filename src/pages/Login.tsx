
import { useState } from 'react';
import Header from '@/components/Header';

const Login = () => {
  const [email, setEmail] = useState('jane@example.com');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Demo Banner */}
      <div className="bg-black text-white text-center py-3 px-4 text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>
      
      <Header />
      
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to access exclusive campaign features</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Password
                </label>
                <button type="button" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="••••••"
              />
            </div>

            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
              <p>For demo purposes, use:</p>
              <p>Email: jane@example.com</p>
              <p>Password: password</p>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button className="text-blue-600 hover:underline font-medium">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
