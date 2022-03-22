import React, {useState} from 'react';
import {Disclosure, Transition} from '@headlessui/react';
import {Link} from 'react-router-dom';
import {Icon} from '.';
import classNames from 'classnames';
import {ChevronRightIcon, ChevronDoubleRightIcon} from '@heroicons/react/solid';
import produce from 'immer';

export interface SideBarMenuProps {
  name: string;
}

export function SideBarMenu() {
  const [menu, setMenu] = useState([
    {
      name: 'Dashboard',
      title: 'Dashboard',
      icon: 'FaBlogger',
      child: [
        {
          name: 'home',
          title: 'Home',
          link: '/home',
          selected: true,
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
      name: 'Inventory',
      title: 'Inventory',
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
      name: 'Catalog 1',
      title: 'Catalog 1',
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
      name: 'Catalog 2',
      title: 'Catalog 2',
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
      name: 'Catalog 3',
      title: 'Catalog 3',
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
      name: 'Catalog 4',
      title: 'Catalog 4',
      icon: 'FaGithub',
    },
    {
      name: 'Catalog 4',
      title: 'Catalog 4',
      icon: 'FaGithub',
    },
  ]);

  const menuOnClick = (parent: string, name: string) => {
    const nextState = produce(menu, draftState => {
      draftState.map(mn => {
        if (mn.child) {
          mn.child.map(mnc => {
            mnc.selected = false;
          });
        }
      });
      const df = draftState.find(mn => mn.name == parent);
      if (df && df.child) {
        const dd = df.child.find(mn => mn.name == name);
        if (dd) {
          dd.selected = true;
        }
      }
    });
    setMenu(nextState);
  };

  const render = () => {
    return (
      <div className="w-80 h-full overflow-auto scroll-smooth shadow-lg pt-4 z-20">
        {menu.map((mn, idx) => {
          let haschild = false;
          if (mn.child) {
            if (mn.child.length > 0) {
              haschild = true;
            }
          }
          if (haschild) {
            return (
              <Disclosure as="div" className="" key={idx}>
                {({open}) => (
                  <>
                    <Disclosure.Button className="w-full pt-2 pb-2">
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
                      <Disclosure.Panel className="flex flex-col text-gray-500 mt-2 mb-2">
                        {mn.child?.map((mnc, idx) => {
                          return (
                            <div
                              key={idx}
                              onClick={() => menuOnClick(mn.name, mnc.name)}
                              className={classNames({
                                'bg-green-50': mnc.selected,
                              })}
                            >
                              <Link
                                to={mnc.link}
                                className={classNames(
                                  'flex flex-row hover:text-green-500 cursor-pointer p-1 text-sm ml-8',
                                )}
                              >
                                <ChevronDoubleRightIcon className="w-3" />
                                <div className="ml-2">{mnc.title}</div>
                              </Link>
                            </div>
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
                className="pt-2 pb-2 flex flex-row justify-between ml-4 cursor-pointer"
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
