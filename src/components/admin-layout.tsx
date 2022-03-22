import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import img_avatar from '../../public/images/img_avatar.png';
import {PopUpMenu, PopMenuType, SideBarMenu} from '.';

export interface AdminLayoutProps {
  name: string;
}

export function AdminLayout(props: AdminLayoutProps) {
  useEffect(() => {
    console.log('props ', props.name);
  }, []);

  const [menupopup] = useState<Array<PopMenuType>>([
    {
      name: 'My Profile',
      title: 'My Profile',
      icon: 'FaUser',
      type: 'menu',
    },
    {
      name: 'Account settings',
      title: 'Account settings',
      icon: 'FaCog',
      type: 'menu',
    },
    {
      name: 'divider',
      type: 'divider',
    },
    {
      name: 'Logout',
      title: 'Logout',
      icon: 'FaSignOutAlt',
      type: 'menu',
    },
  ]);

  const onMenuPopUpClick = (name: string) => {
    console.log('klik ', name);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex-none flex flex-row justify-between bg-white h-12 shadow z-30">
        <div className="flex flex-row items-center font-bold text-gray-500 ml-4">
          Company Name
        </div>
        <PopUpMenu menu={menupopup} onClick={onMenuPopUpClick}>
          <div className="flex flex-row h-12 justify-start items-center mr-2 w-48">
            <div className="w-8">
              <img className="rounded-full" src={img_avatar} />
            </div>
            <div className="mx-3 text-xs text-gray-600">May Your Name</div>
          </div>
        </PopUpMenu>
      </div>

      <div className="grow flex flex-row justify-between overflow-y-hidden">
        <SideBarMenu />
        <div className="bg-gray-50 w-full overflow-auto p-4 z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
