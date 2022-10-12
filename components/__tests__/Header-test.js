import * as React from 'react';
import renderer from 'react-test-renderer';
import { MonoText } from '../StyledText';
import Header  from '../Header';
import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

  describe('<Header />', () => {
    it('has 2 children', () => {
      const tree = renderer.create(<Header />).toJSON();
      expect(tree.children.length).toBe(2);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
      });

    it('renders the correct texts', () => {
      const tree = renderer.create(<Header />).toJSON();
      const rendered = render(<Header />);
      const userName = rendered.getByTestId('userName');
      expect(tree.children[0].children[1].children[0].children[0]).toBe('Hello');
      expect(tree.children[0].children[1].children[1].children[0]).toBe('Have a nice day');
      expect((tree.children[0].children[1].children[0].children[0]).length).toBe(5);
    })

  });
