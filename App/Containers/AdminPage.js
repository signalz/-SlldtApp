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
  // Input
} from 'native-base';
// import { connect } from 'react-redux'

// import LoginPageActions, { LoginPageSelectors } from '../Redux/LoginPageRedux';

export default class AdminPage extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userName: '',
  //     password: '',
  //   };
  // }

  // onInputUserNameChange = e => {
  //   console.log(e);
  //   this.setState({
  //     userName: e,
  //   });
  // }

  // onInputPasswordChange = e =>
  //   this.setState({
  //     password: e,
  //   });

  // onLoginButtonClick = () => {
  //   console.log(this.state.userName, this.state.password);
  //   // console.log(this.props.login);
  //   this.props.login(this.state.userName, this.state.password);
  // };

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
            This is Admin Page
          </Text>
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

// const mapDispatchToProps = (dispatch) => ({
//   login: (username, password) => dispatch(LoginPageActions.userLogin(username, password))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
