import * as React from 'react';
import {act} from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import {Input} from '../src/components';

describe('Input', function () {
  it('should display Input', function () {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <Input
          name="email"
          title="email"
          type="text"
          value="ok@ok.com"
          className="input"
        />,
        container,
      );
    });
    const input = container.querySelector('.input') as HTMLInputElement;
    expect(input?.value).toBe('ok@ok.com');
  });
});
