import { PureComponent } from 'react'

class ContactForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }


  // Display success messages if the form submission succeeded
  handleSuccess = () => {
    // Reset the form
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }


  // Display error messages if the form submission failed
  handleFailure = () => {
    // Handle submission failure
    // Parse through failure codes and decide what to do from there
    console.log('failed...')
  }


  // Validate the input submitted by the user
  validateForm = () => {
    // Perform validation
    // Sanitize input
    // Check to make sure email is a valid email
  }


  // Submit the message
  submitForm = (e) => {
    console.log('submitted')
    // Unfocus submit button
    document.getElementById('email-submit').blur()

    // Prevent page refresh
    e.preventDefault()

    // Validate the form
    this.validateForm()

    // Submit the form through express api
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    }).then((res) => {
      res.status === 200 ? this.handleSuccess() : this.handleFailure()
    })
  }


  // Set the react state to visitor's contact info
  setInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  unfocusEmailSubmit = (e) => {
    e.target.blur()
  }


  render() {
    return (
      <div className='col container'>
        <h2 className='cta-header'>Let's get in touch</h2>
        <form
          id='contact-form'
          className='col'
          method='POST'
          onSubmit={ this.submitForm }
        >
          <input
            className='contact-input'
            placeholder='Name'
            name='name'
            type='text'
            value={ this.state.name }
            onChange={ this.setInputValue }
            required
          />
          <input
            className='contact-input'
            placeholder='Email'
            type='email'
            name='email'
            value={ this.state.email }
            onChange={ this.setInputValue }
            required
          />
          <textarea
            id='contact-msg'
            className='contact-input'
            placeholder='Message'
            name='message'
            value={ this.state.message }
            onChange={ this.setInputValue }
            required
          />
          <input
            id='email-submit'
            type='submit'
            value='SUBMIT'
            onMouseLeave={ this.unfocusEmailSubmit }
          />
        </form>
        <div className='row'>
          <p className='alt-text'>or</p>
          <form action='mailto: -fill email securely here-'>
            <input
              type='submit'
              id='email-direct'
              className='alt-text'
              value='email me directly'
            />
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
