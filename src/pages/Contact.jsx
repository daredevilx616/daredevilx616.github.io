import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Section from '../components/Section'

const Contact = () => {
  const [formData, setFormData] = useState(new FormData())

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(formData.name && formData.email && formData.message)) {
      alert('Something went wrong!')
      return
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`)
    axios.post('https://formspree.io/f/xpzkodjv', formData, {
      Accept: 'application/json',
    })
    setFormData({})
  }

  return (
    <Section id='contact' title='Contact'>
      <div className='row justify-content-between'>
        <div className='col-md-5 order-last order-lg-first' data-aos='fade-up'>
          <div className='subheading mb-3'>I'd love to hear from you</div>
          <form>
            <div className='form-group pt-1 pb-2'>
              <label htmlFor='username'>Full Name</label>
              <input
                type='text'
                className='form-control'
                id='username'
                name='name'
                aria-describedby='emailHelp'
                placeholder='Enter your name'
                value={formData.name || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pt-2 pb-3'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                value={formData.email || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pb-4'>
              <label htmlFor='userMessage'>Message</label>
              <textarea
                className='form-control'
                id='userMessage'
                name='message'
                rows='3'
                placeholder='Enter message'
                value={formData.message || ''}
                onChange={handleChange}
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Contact
