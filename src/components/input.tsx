import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

export interface InputProps {
  disable?: boolean;
  value?: string;
  type: string;
  title: string;
  placeholder?: string;
  name: string;
  error?: boolean;
  errorText?: string;
  className?: string;
  onChange?: (name: string, value: string) => void;
}

export function Input(props: InputProps) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [value, setValue] = useState(props.value);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [className, setclassName] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    if (props.className) {
      setclassName(props.className);
    }
  }, [props.className]);

  useEffect(() => {
    if (props.disable != undefined) {
      setDisable(props.disable);
    }
  }, [props.disable]);

  useEffect(() => {
    setType(props.type);
  }, [props.type]);

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  useEffect(() => {
    if (props.placeholder != undefined) {
      setPlaceholder(props.placeholder);
    }
  }, [props.placeholder]);

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    if (props.error != undefined) {
      setError(props.error);
    }
  }, [props.error]);

  useEffect(() => {
    if (props.errorText != undefined) {
      setErrorText(props.errorText);
    }
  }, [props.errorText]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(name, e.target.value);
    }
  };

  return (
    <div className="flex flex-col w-full md:mt-2 mt-8 md:mb-2 mb-4">
      <label className="block">
        <span className="md:mt-0 mt-8 md:mb-0 mb-4 block md:text-sm text-5xl font-medium text-gray-700">
          {title}
        </span>
        <input
          required={error}
          disabled={disable}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames(`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md md:text-sm text-5xl shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${className}`)}
        />
      </label>

      <label className={classNames({hidden: !error}, 'label')}>
        <span className="md:text-xs text-4xl text-red-400">{errorText}</span>
      </label>
    </div>
  );
}
