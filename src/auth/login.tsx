import React, {useState} from 'react';
import {Input, Button} from '../components';
import img_avatar from '../../public/images/img_avatar.png';
import {Link} from 'react-router-dom';

export function LoginPage() {
  const [loading] = useState(false);
  const [form] = useState({
    email: {
      value: '',
      error: false,
      errorText: '',
    },
    password: {
      value: '',
      error: false,
      errorText: '',
    },
  });

  return (
    <div className="flex w-screen h-screen justify-center items-center overflow-y-auto">
      <div className="flex flex-col md:border p-4 md:w-2/6">
        <div className="flex flex-col justify-center items-center w-full">
          <img
            className="rounded-full w-16"
            src={img_avatar}
            alt="Logo Pinbeli"
          />
        </div>
        <div className="text-green-500 font-bold text-center text-base border-b mb-4 p-2">
          SIGN IN
        </div>
        <Input
          name="email"
          title="email"
          type="text"
          value={form.email.value}
          error={form.email.error}
          errorText={form.email.errorText}
          onChange={(name, value) => {
            console.log(`onChange ${name} ${value}`);
          }}
          placeholder="your email"
          disable={loading}
        ></Input>
        <Input
          name="password"
          title="password"
          type="password"
          value={form.password.value}
          error={form.password.error}
          errorText={form.password.errorText}
          onChange={(name, value) => {
            console.log(`onChange ${name} ${value}`);
          }}
          placeholder="your password"
          disable={loading}
        ></Input>
        <div className="flex flex-row w-full justify-center mt-8">
          <Button title="SIGN IN" className="rounded-md w-1/2" />
        </div>
        <Link to="/auth/register">
          <div className="mt-4 text-gray-500 hover:text-blue-500 cursor-pointer text-sm">
            Do not Have an account, please apply here
          </div>
        </Link>
        <div className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer text-sm">
          forget password ?
        </div>
      </div>
    </div>
  );
}
