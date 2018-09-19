import React from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';

import { TextInput, PasswordInput } from '../../../input/text';
import { ProgressGroup, SecondaryButton, PrimaryButton, ButtonGroup } from '../../../input/buttons';
import propTypesTemplates from '../../../../prop-types-templates';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      passwordConfirmation: '',
      showError: false,
      isEmailDisabled: true,
    };
  }

  onEmailChange = (email) => {
    const { onHackerApplicationChange, hackerApplication } = this.props;
    const updatedHackerApplication = update(hackerApplication, {
      $merge: { email },
    });
    onHackerApplicationChange(updatedHackerApplication);
  }

  onPasswordChange = (password) => {
    this.setState({ password });

    const { passwordConfirmation } = this.state;
    this.updateNextButtonState(password, passwordConfirmation);
  }

  onPasswordConfirmationChange = (passwordConfirmation) => {
    this.setState({ passwordConfirmation });

    const { password } = this.state;
    this.updateNextButtonState(password, passwordConfirmation);
  }

  onPasswordConfirmationBlur = () => {
    const { showError } = this.state;

    if (!showError) {
      this.setState({ showError: true });
    }
  }

  onSideLinkClick = () => {
    const { isEmailDisabled } = this.state;
    this.setState({ isEmailDisabled: !isEmailDisabled });
  }

  getError = () => {
    const { password, passwordConfirmation } = this.state;
    const match = this.doPasswordsMatch(password, passwordConfirmation);

    if (match) {
      if (password.length === 0) {
        return { message: 'Password is empty' };
      }
      return null;
    }

    return { message: 'Passwords do not match' };
  }

  doPasswordsMatch = (password, passwordConfirmation) => (password === passwordConfirmation);

  updateNextButtonState = (password, passwordConfirmation) => {
    const match = this.doPasswordsMatch(password, passwordConfirmation);

    const enable = match && password.length > 0;
    const { updateNextButtonState } = this.props;
    updateNextButtonState(enable);
  }

  render() {
    const {
      password,
      passwordConfirmation,
      isEmailDisabled,
      showError,
    } = this.state;

    const {
      hackerApplication: {
        email,
      },
      count,
      activeIndex,
      lastValidIndex,
      onPageChange,
      onPageBack,
      onPageNext,
      isNextButtonEnabled,
      cancelHackerApplication,
    } = this.props;

    const error = this.getError();

    const getPrimaryButtonText = (activeIndex, count) => {
      if (activeIndex === count - 1) {
        return 'Submit application';
      }
      if (activeIndex === count - 2) {
        return 'One last step';
      }
      return 'Next';
    };

    return (
      <div className="pad-nav application fill-width flex jc-center">
        <div className="pad-ends-mega">
          <ProgressGroup
            count={count}
            activeIndex={activeIndex}
            lastValidIndex={lastValidIndex}
            onClick={onPageChange}
            className="pad-bottom-mega"
            />
          <div className="hacker-application-page">
            <TextInput
              label="Email"
              onChange={this.onEmailChange}
              value={email}
              name="signup-email"
              disabled={isEmailDisabled}
              sideLinkText={isEmailDisabled ? 'Edit email' : 'Save email'}
              sideLinkOnClick={this.onSideLinkClick}
              className="margin-bottom-mega"
              />
            <PasswordInput
              label="Password"
              onChange={this.onPasswordChange}
              value={password}
              name="signup-password"
              placeholder="Create a password"
              showErrorMessage={false}
              showError={showError}
              error={error}
              className="margin-bottom-mega"
              />
            <PasswordInput
              label="Password"
              onChange={this.onPasswordConfirmationChange}
              value={passwordConfirmation}
              name="signup-password-confirmation"
              placeholder="Re-enter your password"
              onBlur={this.onPasswordConfirmationBlur}
              showErrorMessage={showError}
              showError={showError}
              error={error}
              />
          </div>
          <ButtonGroup className="pad-top-mega">
            <SecondaryButton
              text={activeIndex === 0 ? 'Cancel' : 'Back'}
              onClick={activeIndex === 0 ? cancelHackerApplication : onPageBack}
              />
            <PrimaryButton
              disabled={!isNextButtonEnabled}
              text={getPrimaryButtonText(activeIndex, count)}
              onClick={activeIndex !== count - 1 ? onPageNext : () => console.log('submit application')}
              />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  hackerApplication: propTypesTemplates.application.hacker,
  onHackerApplicationChange: PropTypes.func.isRequired,
  updateNextButtonState: PropTypes.func.isRequired,
};

export default SignUp;
