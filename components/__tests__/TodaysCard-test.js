import * as React from 'react';
import renderer from 'react-test-renderer';
import { MonoText } from '../StyledText';
import TodaysCard  from '../TodaysCard';
import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

  describe('<TodaysCard />', () => {
    it('has 2 children', () => {
      const tree = renderer.create(<TodaysCard />).toJSON();
      expect(tree.children.length).toBe(2);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<TodaysCard />).toJSON();
        expect(tree).toMatchSnapshot();
      });

    it('renders the correct texts', () => {
        const tree = renderer.create(<TodaysCard />).toJSON();
        expect(tree.children[0].children[0]).toBe('Todays Session');
    })  

  });
