import React from 'react';
import styled from 'styled-components';

const SignUpDisplay = styled.div`
  background-image: url('./assets/sign-up-2.jpg');
`;

class SignUp extends React.Component {

  render() {
    if (!this.props.signUp) {
      return null;
    }
    return (
      <SignUpDisplay />
    );
  }
};

export default SignUp;

