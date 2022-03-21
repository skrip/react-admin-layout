import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import img_avatar from '../../public/images/img_avatar.png';
import {PopUpMenu, SideBarMenu} from '.';

export interface AdminLayoutProps {
  name: string;
}

export function AdminLayout(props: AdminLayoutProps) {
  useEffect(() => {
    console.log('props ', props.name);
  }, []);
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex-none flex flex-row justify-between bg-white h-12 shadow z-10">
        <div className="flex flex-row items-center font-bold text-gray-500 ml-4">
          Company Name
        </div>
        <PopUpMenu>
          <div className="flex flex-row h-12 items-center mr-2">
            <div className="w-8">
              <img className="rounded-full" src={img_avatar} />
            </div>
            <div className="mx-2 text-sm">May Your Name</div>
          </div>
        </PopUpMenu>
      </div>

      <div className="grow flex flex-row justify-between overflow-y-hidden">
        <SideBarMenu />
        <div className="bg-gray-100 w-full overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
