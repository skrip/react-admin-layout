import React, {useState} from 'react';
import {Input} from '../components';
import img_avatar from '../../public/images/img_avatar.png';

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
      <div className="flex flex-col md:border p-4 md:w-2/5">
        <div className="flex flex-row justify-center">
          <img src={img_avatar} alt="Logo Pinbeli" width={85} height={28} />
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
        <div className="btn btn-info mt-8 border-t">SIGN IN</div>
        <div className="mt-4 text-gray-500 hover:text-blue-500 cursor-pointer text-sm">
          Belum punya akun, silahkan daftar disini
        </div>
        <div className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer text-sm">
          Lupa password ?
        </div>
      </div>
    </div>
  );
}
