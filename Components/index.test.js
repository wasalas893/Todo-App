import 'react-native';
import React from 'react';
import Task from './Task';
import{ render,fireEvent} from '@testing-library/react-native';


test('render Task Components',()=>{
  const {getByTestId,getByText,getAllByTestId,queryByText}=render(<Task/>);

  const input=getByTestId('input');
  const button=getByText('Add A Task')

  fireEvent.changeText(input,'task')
  fireEvent.press(button)

  const item=getByText('task');

  expect(item).toBeDefined();



  fireEvent.changeText(input,'item1');
  fireEvent.press(button)
  const item1=getByText('item1');
  expect(item1).toBeDefined();

  const deleteButtons=getAllByTestId('call-delete')
  fireEvent.press(deleteButtons[0]);
  expect(queryByText('item')).toBeNull();



  

})
