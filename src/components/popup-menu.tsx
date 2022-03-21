import React, {useState, ReactChild, useEffect} from 'react';
import {Transition, Menu} from '@headlessui/react';
import classNames from 'classnames';
import {Icon} from '.';

type MyMenuType = {
  [key: string]: string;
};

export interface PopUpMenuProps {
  children: ReactChild;
  menu?: Array<MyMenuType>;
}

export function PopUpMenu(props: PopUpMenuProps) {
  const [menu, setMenu] = useState<Array<MyMenuType>>([
    {
      name: 'My Profile',
      title: 'My Profile',
      icon: 'FaBlogger',
    },
    {
      name: 'Account settings',
      title: 'Account settings',
      icon: 'FaBlogger',
    },
    {
      name: 'Logout',
      title: 'Logout',
      icon: 'FaBlogger',
    },
  ]);

  useEffect(() => {
    if (props.menu) {
      setMenu(props.menu);
    }
  }, [props.menu]);

  const render = () => {
    return (
      <Menu as="div" className="relative">
        {({open}) => (
          <>
            <Menu.Button className={classNames({'bg-gray-100': open}, 'pl-2')}>
              {props.children}
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-1 mt-1 bg-white flex flex-col shadow">
                {menu.map((mn, idx) => {
                  return (
                    <Menu.Item key={idx}>
                      {({active}) => (
                        <div
                          className={classNames(
                            {'bg-blue-500 text-white': active},
                            'p-2 text-sm flex flex-row cursor-pointer',
                          )}
                        >
                          <div
                            className={classNames(
                              {'text-white': active},
                              {'text-gray-400': !active},
                              'flex flex-row items-center w-5 p-1',
                            )}
                          >
                            <Icon name={mn.icon} />
                          </div>
                          <div
                            className={classNames(
                              {'text-white': active},
                              {'text-gray-600': !active},
                              'flex flex-row items-center ml-2 text-sm',
                            )}
                          >
                            {mn.title}
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  };

  return render();
}
