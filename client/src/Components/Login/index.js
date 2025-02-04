import React, { Component } from "react";
import axios from "axios";
import "./login.css";
import Header from "../Header";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
    login: false
  };

  componentDidMount = () => {
    const { history } = this.props;

    axios.get("/check-auth").then(({ data }) => {
      const { success } = data;

      if (success) {
        this.setState({
          login: true
        });
        history.push("/pharmacy");
      } else {
        history.push("/login");
      }
    });
  };

  changName = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  goLogedin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    if (!email && !password) {
      this.setState({ errorMsg: "Type something " });

      return;
    }
    axios.post("/api/login", { email, password }).then(({ data }) => {
      if (data.msg == "true") {
        history.push("/pharmacy");
        //should continue to pharmacist home
      } else {
        const { errorMsg } = this.state;
        this.setState({ errorMsg: "User or password WRONG" });
      }
    });
  };

  render() {
    const { email, password, errorMsg } = this.state;

    return (
      <>
        <Header />
        <form onSubmit={this.goLogedin}>
          <input
            className="input1"
            value={email}
            placeholder="email"
            type="email"
            name="email"
            onChange={this.changName}
          />
          <input
            className="input2"
            value={password}
            placeholder="password"
            type="password"
            name="password"
            onChange={this.changName}
          />
          <input type="submit" className="login" value="Login" />
          {errorMsg && <p className="invalidMsg">{errorMsg}</p>}
        </form>
      </>
    );
  }
}

export default Login;
