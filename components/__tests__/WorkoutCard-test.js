import * as React from 'react';
import renderer from 'react-test-renderer';
import { MonoText } from '../StyledText';
import WorkoutCard  from '../WorkoutCard';
import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

  describe('<WorkoutCard />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<WorkoutCard />).toJSON();
      expect(tree.children.length).toBe(1);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<WorkoutCard />).toJSON();
        expect(tree).toMatchSnapshot();
      });

});