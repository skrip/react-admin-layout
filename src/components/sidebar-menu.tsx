import React, {useState} from 'react';
import {Disclosure, Transition} from '@headlessui/react';
import {Link} from 'react-router-dom';
import {Icon} from '.';
import classNames from 'classnames';
import {ChevronRightIcon, ChevronDoubleRightIcon} from '@heroicons/react/solid';

export interface SideBarMenuProps {
  name: string;
}

export function SideBarMenu() {
  const [menu] = useState([
    {
      name: 'Inventory',
      title: 'Inventory',
      icon: 'FaBlogger',
      child: [
        {
          name: 'home',
          title: 'Home',
          link: '/home',
        },
        {
          name: 'inventory',
          title: 'Inventory',
          link: '/inventory',
        },
        {
          name: 'user',
          title: 'User Profile',
          link: '/user-profile',
        },
      ],
    },
    {
      name: 'Auth',
      title: 'Authentication Pages',
      icon: 'FaBimobject',
      child: [
        {
          name: 'login',
          title: 'Login',
          link: '/auth/login',
        },
        {
          name: 'register',
          title: 'Register',
          link: '/auth/register',
        },
      ],
    },
    {
      name: 'Catalog',
      title: 'Catalog',
      icon: 'FaChromecast',
      child: [
        {
          name: 'home',
          title: 'Home',
          link: '/home',
        },
        {
          name: 'inventory',
          title: 'Inventory',
          link: '/inventory',
        },
        {
          name: 'user',
          title: 'User Profile',
          link: '/user-profile',
        },
      ],
    },
    {
      name: 'Catalog',
      title: 'Catalog',
      icon: 'FaCreativeCommonsBy',
      child: [
        {
          name: 'home',
          title: 'Home',
          link: '/home',
        },
        {
          name: 'inventory',
          title: 'Inventory',
          link: '/inventory',
        },
        {
          name: 'user',
          title: 'User Profile',
          link: '/user-profile',
        },
      ],
    },
    {
      name: 'Catalog',
      title: 'Catalog',
      icon: 'FaDelicious',
      child: [
        {
          name: 'home',
          title: 'Home',
          link: '/home',
        },
        {
          name: 'inventory',
          title: 'Inventory',
          link: '/inventory',
        },
        {
          name: 'user',
          title: 'User Profile',
          link: '/user-profile',
        },
      ],
    },
    {
      name: 'Catalog',
      title: 'Catalog',
      icon: 'FaGithub',
      child: [
        {
          name: 'home',
          title: 'Home',
          link: '/home',
        },
        {
          name: 'inventory',
          title: 'Inventory',
          link: '/inventory',
        },
        {
          name: 'user',
          title: 'User Profile',
          link: '/user-profile',
        },
      ],
    },
    {
      name: 'Catalog',
      title: 'Catalog',
      icon: 'FaGithub',
    },
    {
      name: 'Catalog',
      title: 'Catalog',
      icon: 'FaGithub',
    },
  ]);

  const render = () => {
    return (
      <div className="w-80 h-full overflow-auto shadow mt-4">
        {menu.map((mn, idx) => {
          let haschild = false;
          if (mn.child) {
            if (mn.child.length > 0) {
              haschild = true;
            }
          }
          if (haschild) {
            return (
              <Disclosure as="div" className="p-1" key={idx}>
                {({open}) => (
                  <>
                    <Disclosure.Button className="w-full">
                      <div className="flex flex-row justify-between ml-4">
                        <div className="grow flex flex-row">
                          <div className="flex flex-row items-center w-5 p-1 text-gray-400">
                            <Icon name={mn.icon} />
                          </div>
                          <div className="flex flex-row items-center ml-2 text-gray-600 text-sm">
                            {mn.title}
                          </div>
                        </div>
                        <div className="w-4 flex-none mr-2 flex flex-row items-center text-gray-400">
                          <ChevronRightIcon
                            className={classNames({
                              'transform rotate-90': open,
                            })}
                          />
                        </div>
                      </div>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="flex flex-col text-gray-500 ml-8">
                        {mn.child?.map((mnc, idx) => {
                          return (
                            <Link
                              key={idx}
                              to={mnc.link}
                              className="flex flex-row hover:text-green-500 cursor-pointer p-1 text-sm"
                            >
                              <ChevronDoubleRightIcon className="w-3" />
                              <div className="ml-2">{mnc.title}</div>
                            </Link>
                          );
                        })}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            );
          } else {
            return (
              <div
                key={idx}
                className="p-1 flex flex-row justify-between ml-4 cursor-pointer"
              >
                <div className="grow flex flex-row">
                  <div className="flex flex-row items-center w-5 p-1 text-gray-400">
                    <Icon name={mn.icon} />
                  </div>
                  <div className="flex flex-row items-center ml-2 text-gray-600 text-sm">
                    {mn.title}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  return render();
}
