import React, {useState} from 'react';
import * as icons from 'react-icons/fa';

export interface IconProps {
  name: string;
}

export function Icon(props: IconProps) {
  const [Icon] = useState<string>(props.name);

  const render = () => {
    switch (Icon) {
      case 'FaBlogger':
        return <icons.FaBlogger />;
      case 'FaBimobject':
        return <icons.FaBimobject />;
      case 'FaChromecast':
        return <icons.FaChromecast />;
      case 'FaCreativeCommonsBy':
        return <icons.FaCreativeCommonsBy />;
      case 'FaDelicious':
        return <icons.FaDelicious />;
      case 'FaGithub':
        return <icons.FaGithub />;
      default:
        return <></>;
    }
  };

  return render();
}
