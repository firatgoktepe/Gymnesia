import * as React from 'react';
import renderer from 'react-test-renderer';
import { MonoText } from '../StyledText';
import Header  from '../Header';

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
      expect(tree.children[0].children[1].children[0].children[0]).toBe('Hello ');
      expect(tree.children[0].children[1].children[1].children[0]).toBe('Have a nice day');
    })

  });
