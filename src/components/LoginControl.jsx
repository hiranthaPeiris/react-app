class LoginControl extends Component {
  state = {};

  constructor(props) {}
  render() {
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
