---
title: Contact
description: This is the contact page.
sections:
- template: page-header
  title: Contact
- template: contact
  contact_info:
    title: Hate forms?<br>Write an email or make a call
    email_address: samxan2014@gmail.com
    phone_number: '9932271166'
  title: Contact Qurno
  content: I'm here to help and answer any question you might have. I look forward
    to hearing from you
  form:
    action: samxan2014@gmail.com
    fields:
    - template: textarea
      config:
        required:
          value: true
          message: This field is required.
        minLength:
          message: Not long enough.
          value: 
        maxLength:
          message: Too many characters.
          value: 
        rows: 4
      name: message
      placeholder: Ask a question or just say hi
      id: message
    - template: input
      type: email
      config:
        required:
          value: true
          message: This field is required.
        minLength:
          message: Not long enough.
          value: 
        maxLength:
          message: Too many characters.
          value: 
      name: email
      id: email
      placeholder: Email address
    - template: input
      type: text
      config:
        required:
          value: true
          message: This field is required.
        minLength:
          message: Not long enough.
          value: 
        maxLength:
          message: Too many characters.
          value: 
      name: name
      id: name
      placeholder: Your full name
    title: Contact form

---
