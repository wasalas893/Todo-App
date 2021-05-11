import 'react-native';
import React from 'react';
import Task from './Task';
import renderer from 'react-test-renderer';


describe('<Task />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<Task />).toJSON();
      expect(tree.children.length).toBe(1);
    });
  });
