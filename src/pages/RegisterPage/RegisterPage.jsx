/**
 * @module pages/RegisterPage
 */

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card from '../../components/Card/Card';
import TextField from '../../components/TextField/TextField';
import { register } from '../../services/login-service';
import styles from './RegisterPage.css';

/**
 * User sign up form component.
 */
class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  /**
   * Handles change in text input component.
   * @param {string} value - new value from input.
   * @param {string} part - actual component to save the value to.
   */
  handleChange(value, part) {
    this.setState({ [part]: value });
  }

  /**
   * Handles form submission.
   * @param {object} event - submit event.
   */
  handleSubmit(event) {
    event.preventDefault();

    const { username, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ error: 'Podane hasła nie zgadzają się' });
      return;
    }

    register(username, password, confirmPassword)
      .catch((e) => {
        this.setState({ error: 'Rejestracja nie powiodła się, spróbuj ponownie' });
        console.error(e); // eslint-disable-line
      });
  }

  render() {
    const { error } = this.state;

    return (
      <Card>
        <Typography variant="headline" component="h2">
          Zarejestruj się
        </Typography>
        <div className={styles['input-container']}>
          <TextField
            label="Nazwa użytkownika"
            value={this.state.username}
            onChange={value => this.handleChange(value, 'username')}
            fullWidth
          />
          <TextField
            label="Hasło"
            value={this.state.password}
            onChange={value => this.handleChange(value, 'password')}
            password
            fullWidth
          />
          <TextField
            label="Potwierdź hasło"
            value={this.state.confirmPassword}
            onChange={value => this.handleChange(value, 'confirmPassword')}
            onEnterPress={e => this.handleSubmit(e)}
            password
            fullWidth
          />
          {error && <Typography color="error">{error}</Typography>}
          <div className={styles['button']}>
            <Button
              variant="raised"
              color="primary"
              onClick={e => this.handleSubmit(e)}
            >
              Zarejestruj się
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default RegisterPage;
