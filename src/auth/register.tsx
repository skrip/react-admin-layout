import React, {useState} from 'react';
import {Input, Button} from '../components';
import img_avatar from '../../public/images/img_avatar.png';
import {Link} from 'react-router-dom';

export function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const [form /*setForm*/] = useState({
    name: {
      value: '',
      error: false,
      errorText: '',
    },
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
    password_confirm: {
      value: '',
      error: false,
      errorText: '',
    },
  });

  const onNameChange = (name: string, value: string) => {
    setLoading(false);
    console.log(`${name} ${value}`);
  };

  const onEmailChange = (name: string, value: string) => {
    setLoading(false);
    console.log(`${name} ${value}`);
  };

  const onPasswordChange = (name: string, value: string) => {
    setLoading(false);
    console.log(`${name} ${value}`);
  };

  const onPasswordVerificationChange = (name: string, value: string) => {
    setLoading(false);
    console.log(`${name} ${value}`);
  };

  const onSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center overflow-y-auto">
      <div className="flex flex-col md:border p-4 mt-16 md:w-2/5">
        <div className="flex flex-col justify-center items-center w-full">
          <img
            className="rounded-full w-16"
            src={img_avatar}
            alt="Logo Pinbeli"
          />
        </div>
        <div className="text-green-500 font-bold text-center text-base border-b border-t mb-4 p-2">
          SIGN UP
        </div>
        <Input
          name="name"
          title="Name"
          type="text"
          value={form.name.value}
          error={form.name.error}
          errorText={form.name.errorText}
          onChange={onNameChange}
          placeholder="your name"
          disable={loading}
        ></Input>
        <Input
          name="email"
          title="email"
          type="email"
          value={form.email.value}
          error={form.email.error}
          errorText={form.email.errorText}
          onChange={onEmailChange}
          placeholder="your email"
          disable={loading}
        ></Input>
        <Input
          name="password"
          title="Password"
          type="password"
          value={form.password.value}
          error={form.password.error}
          errorText={form.password.errorText}
          onChange={onPasswordChange}
          placeholder="your password"
          disable={loading}
        ></Input>
        <Input
          name="password_confirm"
          title="Password Konfirmasi"
          type="password"
          value={form.password_confirm.value}
          error={form.password_confirm.error}
          errorText={form.password_confirm.errorText}
          onChange={onPasswordVerificationChange}
          placeholder="Password Confirmation"
          disable={loading}
        ></Input>
        <div className="flex flex-row w-full justify-center mt-8">
          <Button
            onClick={onSubmit}
            title="SIGN UP"
            className="rounded-md w-1/2"
          />
        </div>
        <Link to="/auth/login">
          <div className="mt-4 text-gray-500 hover:text-blue-500 cursor-pointer text-sm">
            have an account, please sign in here
          </div>
        </Link>
        <div className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer text-sm mb-2">
          forget password ?
        </div>
      </div>
    </div>
  );
}
