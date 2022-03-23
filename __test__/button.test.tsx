import * as React from 'react';
import {act} from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import {Button} from '../src/components';

describe('Button', function () {
  it('should display button', function () {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<Button title="testbtn" className="btn" />, container);
    });
    const btn = container.querySelector('.btn');
    expect(btn?.textContent).toBe('testbtn');
  });
});
