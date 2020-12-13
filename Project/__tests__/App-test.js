/**
 * @format
 */

import 'react-native';
import React from 'react';
import Carousel from '../src/SDK/Carousel';

import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

const data = [
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'The Shawshank Redemption',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    title: 'The Godfather',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    title: 'The Godfather: Part II',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'The Dark Knight',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: '12 Angry Men',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: "Schindler's List",
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'The Lord of the Rings',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg',
    title: 'Pulp Fiction',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Il buono, il brutto, il cattivo',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Fight Club',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg',
    title: 'Forrest Gump',
  },
  {
    img:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Inception',
  },
];

// adding SnapShot with react-test-renderer
describe('testing <Carousel />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Carousel items={data} onPress={(item) => alert(item.title)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders rounded cards', () => {
    const tree = renderer.create(<Carousel items={data} rounded />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Shallow rendering
describe('testing <Carousel /> with Enzyme', () => {
  it('renders different items per page', () => {
    const wrapper = shallow(<Carousel items={data} itemsPerPage={1} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({itemsPerPage: 2});
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({itemsPerPage: 3});
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({itemsPerPage: 6});
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({itemsPerPage: 8});
    expect(wrapper).toMatchSnapshot();
  });
  it('simulates click items', () => {
    const onButtonPress = sinon.spy();
    const wrapper = shallow(<Carousel items={data} onPress={onButtonPress} />);
    const render = wrapper.dive();
    render.find('Card').forEach((child) => {
      child.simulate('click');
    });
  });
});
