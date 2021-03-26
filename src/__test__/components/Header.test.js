import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  test('Render Header component', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Title render', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Test header snapshot', () => {
  test('Test UI Header component', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON).toMatchSnapshot();
  });
});
