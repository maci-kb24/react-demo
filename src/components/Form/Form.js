import React, {Component} from 'react'
import styles from './Form.module.scss';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    isSubmitting: false,
    name: '',
    job: ''
  }

  handleChange(e) {
    const {name, value} = e.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSubmitting: true
    })

    // Async call would replace this setTimeout

    setTimeout(() => {
      this.setState({
        isSubmitting: false
      })
    }, 3000)
  }

  render() {
    const { name, job } = this.state

    return(
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="job">Job</label>

            <input
              type="text"
              name="job"
              id="job"
              value={job}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <button type="submit">
              Submit
            </button>
          </div>

          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </form>
    )
  }
}

export default Form
