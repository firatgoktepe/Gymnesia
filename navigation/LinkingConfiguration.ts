/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Loading: 'fullScreenModal',
      HomePage: 'fullScreenModal',
      SignUp: 'modal',
      SignIn: 'modal',
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Timer: {
            screens: {
              TimerScreen: 'two',
            },
          },
          Nutrition: {
            screens: {
              TimerScreen: 'three',
            },
          },
          Profile: {
            screens: {
              TimerScreen: 'four',
            },
          },
        },
      },
      Details: 'modal',
      Workout: 'modal',
      Notification: "modal",
      Nutritions: 'modal',
      BodyParts: 'modal',
      NutritionsAdd: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
