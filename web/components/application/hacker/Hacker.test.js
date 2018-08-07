import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Redirect } from 'react-router-dom';

import HackerApplication from './Hacker';
import { ProgressGroup, SecondaryButton, PrimaryButton, ButtonGroup } from '../../input/buttons';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

describe('Hacker component', () => {
  let props;
  let wrapper;

  describe('when hacker application exists', () => {
    const getWrapper = () => shallow(
      <HackerApplication {...props} />
    );

    beforeEach(() => {
      props = {
        hackerApplication: {
          name: "John Doe",
          school: "UBC",
        },
      };

      wrapper = getWrapper();
    });

    it('redirects', () => {
      expect(wrapper.find(Redirect).props()).toHaveProperty('to', '/dashboard');
    });
  });

  describe('when hacker application does not exist', () => {
    const getWrapper = () => mount(
      <HackerApplication {...props} />
    );

    beforeEach(() => {
      props = {
        hackerApplication: null,
        count: 10,
        activeIndex: 8,
        lastValidIndex: 9,
        onPageChange: jest.fn(),
        onPageBack: jest.fn(),
        onPageNext: jest.fn(),
      };

      wrapper = getWrapper();
    });

    it('does not redirect', () => {
      expect(wrapper.find(Redirect)).toHaveLength(0);
    });

    describe('progress group', () => {
      let progressGroup;
      let progressGroupProps;

      beforeEach(() => {
        progressGroup = wrapper.find(ProgressGroup);
        progressGroupProps = progressGroup.props();
      });

      it('renders progress group', () => {
        expect(progressGroup).toHaveLength(1);
      });

      it('has correct count', () => {
        expect(progressGroupProps).toHaveProperty('count', 10);
      });

      it('has correct active index', () => {
        expect(progressGroupProps).toHaveProperty('activeIndex', 8);
      });

      it('has correct last valid index', () => {
        expect(progressGroupProps).toHaveProperty('lastValidIndex', 9);
      });

      it('buttons beyond last valid index are disabled', () => {
        for (let i = 0; i < props.count; i++) {
          if (i <= props.lastValidIndex) {
            expect(progressGroup.find('button').at(i).props().disabled).toBeFalsy();
          } else {
            expect(progressGroup.find('button').at(i).props().disabled).toBeTruthy();
          }
        }
      });

      describe('when clicking buttons', () => {
        describe('when clicking a valid button', () => {
          it('onPagechange is called with the page number', () => {
            for (let i = 0; i <= props.lastValidIndex; i++) {
              progressGroup.find('button').at(i).simulate('click');
              expect(props.onPageChange).toHaveBeenCalledWith(i);
            }
          });
        });
      });
    });

    describe('secondary button', () => {
      it('text matches active index', () => {
        for (let i = 0; i < props.count; i++) {
          props.activeIndex = i;
          wrapper = getWrapper();

          if (i === 0) {
            expect(wrapper.find(SecondaryButton).text()).toEqual('Cancel');
          } else {
            expect(wrapper.find(SecondaryButton).text()).toEqual('Back');
          }
        }
      });

      describe('on click', () => {
        beforeEach(() => {
          props.lastValidIndex = props.count-1;
        });

        it('calls onPageBack', () => {
          for (let i = 1; i <= props.count; i++) {
            props.activeIndex = i;
            wrapper = getWrapper();
            wrapper.find(SecondaryButton).simulate('click');

            expect(props.onPageBack).toHaveBeenCalled();

            props.onPageNext.mockClear();
          }
        });

        it('is disabled on first page', () => {
          for (let i = 0; i <= props.count; i++) {
            props.activeIndex = i;
            wrapper = getWrapper();

            if (i === 0) {
              expect(wrapper.find(SecondaryButton).props().disabled).toBeTruthy();
            } else {
              expect(wrapper.find(SecondaryButton).props().disabled).toBeFalsy();
            }
          }
        });
      });
    });

    describe('primary button', () => {
      it('text matches active index', () => {
        for (let i = 0; i < props.count; i++) {
          props.activeIndex = i;
          wrapper = getWrapper();

          if (i === props.count - 1) {
            expect(wrapper.find(PrimaryButton).text()).toEqual('Submit application');
          } else if (i === props.count - 2) {
            expect(wrapper.find(PrimaryButton).text()).toEqual('One last step');
          } else {
            expect(wrapper.find(PrimaryButton).text()).toEqual('Next');
          }
        }
      });

      describe('on click', () => {
        beforeEach(() => {
          props.lastValidIndex = props.count-1;
        });

        it('calls onPageNext when it is not the last page', () => {
          for (let i = 0; i <= props.count; i++) {
            props.activeIndex = i;
            wrapper = getWrapper();
            wrapper.find(PrimaryButton).simulate('click');

            if (i !== props.count - 1) {
              expect(props.onPageNext).toHaveBeenCalled();
            } else {
              expect(props.onPageNext).not.toHaveBeenCalled();
            }

            props.onPageNext.mockClear();
          }
        });
      });
    });
  });
});
