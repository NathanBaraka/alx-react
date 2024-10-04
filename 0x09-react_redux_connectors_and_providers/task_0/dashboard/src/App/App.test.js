import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    // Mock the state using Immutable's fromJS
    const state = fromJS({
      isUserLoggedIn: true,
    });

    // Call mapStateToProps with the mocked state
    const expectedProps = { isLoggedIn: true };
    const props = mapStateToProps(state);

    // Verify that the output matches the expected object
    expect(props).toEqual(expectedProps);
  });
});

