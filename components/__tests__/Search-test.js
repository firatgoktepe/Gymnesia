import * as React from 'react';
import renderer from 'react-test-renderer';
import { MonoText } from '../StyledText';
import Search  from '../Search';
import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

  describe('<Search />', () => {
    it('has 2 children', () => {
      const tree = renderer.create(<Search />).toJSON();
      expect(tree.children.length).toBe(2);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
      });

  });
