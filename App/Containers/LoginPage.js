import React, { Component } from 'react';
import { Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Input
} from 'native-base';

import LoginPageActions, { LoginPageSelectors } from '../Redux/LoginPageRedux';

export class LoginPage extends Component {
  constructor() {
    super();
    console.log('>>>>>>>>>>>');
    this.state = {
      userName: '',
      password: '',
    };
  }

  onInputUserNameChange = e =>
    this.setState({
      userName: e.target.value,
    });

  onInputPasswordChange = e =>
    this.setState({
      password: e.target.value,
    });

  onLoginButtonClick = () => {
    console.log(this.state.userName, this.state.password);
    console.log(this.props.login);
    this.props.login(this.state.userName, this.state.password);
  };

  render() {
    console.log('user', this.props.user);
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
          <Text>
            Username
          </Text>
          <Input placeholder='Username'/>
          <Text>
            Password
          </Text>
          <Input placeholder='Password' type="password"/>
          <Button onClick={this.onLoginButtonClick}>
            <Text>Login</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({ user: LoginPageSelectors.selectUser(state) })

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(LoginPageActions.userLogin(username, password))
})

export default connect(null, mapDispatchToProps)(LoginPage)
