import React, {useState, ReactChild, useEffect} from 'react';
import {Transition, Menu} from '@headlessui/react';
import classNames from 'classnames';
import {Icon} from '.';

export type PopMenuType = {
  name: string;
  title?: string;
  icon?: string;
  type: string;
};

export interface PopUpMenuProps {
  children: ReactChild;
  menu: Array<PopMenuType>;
  onClick?: (name: string) => void;
}

export function PopUpMenu(props: PopUpMenuProps) {
  const [menu, setMenu] = useState<Array<PopMenuType>>([]);

  useEffect(() => {
    if (props.menu) {
      setMenu(props.menu);
    }
  }, [props.menu]);

  const onMenuClick = (menu: PopMenuType) => {
    if (props.onClick) {
      props.onClick(menu.name);
    }
  };

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
              <Menu.Items className="absolute right-1 mt-1 bg-white flex flex-col shadow-lg rounded-sm w-48 mr-2">
                <div className="mt-2 mb-2">
                  {menu.map((mn, idx) => {
                    if (mn.type == 'menu') {
                      return (
                        <Menu.Item as="div" key={idx}>
                          {({active}) => (
                            <div
                              onClick={() => onMenuClick(mn)}
                              className={classNames(
                                {'bg-blue-500 text-white': active},
                                'p-1 text-sm flex flex-row cursor-pointer',
                              )}
                            >
                              {mn.icon && (
                                <div
                                  className={classNames(
                                    {'text-white': active},
                                    {'text-gray-400': !active},
                                    'flex flex-row items-center w-5 p-1 ml-2',
                                  )}
                                >
                                  <Icon name={mn.icon} />
                                </div>
                              )}

                              <div
                                className={classNames(
                                  {'text-white': active},
                                  {'text-gray-500': !active},
                                  'flex flex-row items-center ml-2',
                                )}
                              >
                                {mn.title}
                              </div>
                            </div>
                          )}
                        </Menu.Item>
                      );
                    } else if (mn.type == 'divider') {
                      return (
                        <Menu.Item as="div" key={idx}>
                          <div className="border-t mt-2 mb-2"></div>
                        </Menu.Item>
                      );
                    }
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  };

  return render();
}
