import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import AuthInput from '@/components/AuthInput';
import AuthButton from '@/components/AuthButton';

export default function SignIn() {
  const [form, setForm] = useState({email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // post req
    if (success) {
      router.push('/home');
    } else {
      setError('Failed to sign in');
    }
  };

  return (
    <div className="min-h-screen bg-dark_bg_1 flex items-center justify-center py-[15px] overflow-hidden">
      <div className="w-full max-w-md p-8 bg-dark_bg_2 rounded-xl">
        <div className="text-center text-dark_text_1">
          <h2 className="mt-2 text-3xl font-bold">Welcome Back</h2>
          <p className="mt-2 text-md">Sign In</p>
        </div>
        <form onSubmit={handleSubmit}>
            <AuthInput
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
            <AuthInput
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
            <AuthButton label="Sign In" type="submit" loading={loading}/>
        </form>
        <p className=" text-center text-dark_text_1">
        You do not have an account ?{' '}
          <Link href="/auth/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
