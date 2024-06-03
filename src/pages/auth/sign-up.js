import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import AuthInput from '@/components/AuthInput';
import AuthButton from '@/components/AuthButton';

export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
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
      router.push('/auth/sign-in');
    } else {
      setError('Failed to sign up');
    }
  };

  return (
    <div className="min-h-screen bg-dark_bg_1 flex items-center justify-center py-[15px] overflow-hidden">
      <div className="w-full max-w-md p-8 bg-dark_bg_2 rounded-xl">
        <div className="text-center text-dark_text_1">
          <h2 className="mt-2 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-md">Sign up</p>
        </div>
        <form onSubmit={handleSubmit}>
            <AuthInput
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
            <AuthInput
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
            <AuthInput
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
            />
            <AuthInput
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
            <AuthButton label="Sign Up" type="submit" loading={loading}/>
        </form>
        <p className=" text-center text-dark_text_1">
          Already have an account ?{' '}
          <Link href="/auth/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
