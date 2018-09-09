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
import { connect } from 'react-redux'

import LoginPageActions, { LoginPageSelectors } from '../Redux/LoginPageRedux';

export class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
    };
  }

  componentDidMount() {
    if (this.props.user && this.props.user.role) {
      console.log(this.props.user.role);
      this.props.navigation.navigate(`${this.props.user.role}Page`);
    }
  }

  componentDidUpdate() {
    if (this.props.user && this.props.user.role) {
      console.log(this.props.user.role);
      this.props.navigation.navigate(`${this.props.user.role}Page`);
    }
  }

  onInputUserNameChange = e => {
    console.log(e);
    this.setState({
      userName: e,
    });
  }

  onInputPasswordChange = e =>
    this.setState({
      password: e,
    });

  onLoginButtonClick = () => {
    console.log(this.state.userName, this.state.password);
    // console.log(this.props.login);
    this.props.login(this.state.userName, this.state.password);
  };

  render() {
    console.log(this.props.user);
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
          <Input
            placeholder='Username'
            value={this.state.userName}
            onChangeText={this.onInputUserNameChange}
          />
          <Text>
            Password
          </Text>
          <Input
            secureTextEntry
            placeholder='Password'
            type="password"
            value={this.state.password}
            onChangeText={this.onInputPasswordChange}
          />
          <Button onPress={this.onLoginButtonClick}>
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

const mapStateToProps = state => ({ user: LoginPageSelectors.selectUser(state) })

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(LoginPageActions.userLogin(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
