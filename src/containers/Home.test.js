/* Example Test */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

import * as CalcContextModule from '../components/CalcContext';

Enzyme.configure({ adapter: new Adapter() });

it('should alert non-numeric input', () => {
  jest.spyOn(CalcContextModule, 'useCalcContext').mockImplementation(() => ({
    setNumberOfCalculations: () => {},
    setCalculations: () => {},
  }));
  const setState = jest.fn();
  jest.spyOn(React, 'useState').mockImplementation((init) => [init, setState]);

  let wrap = Enzyme.mount(Enzyme.shallow(<Home />).get(0));

  const input = wrap.find('#calculationsInput').at(1);
  input.instance().value = 'Not a number';
  input.simulate('submit');
  expect(setState).toHaveBeenCalledWith(
    'Please choose a number between 20 and 60.'
  );
});
