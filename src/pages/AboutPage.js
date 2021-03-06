import React from 'react'

import Page from '../components/Page'
import { LinkButton } from '../components/Form'

import demoUsers from '../data/demoUsers.json'

const AboutPage = () => {
  return (
    <Page title='About'>
      <div>
        <h3>Demo Users</h3>
        <p>You can login with existing demo users mentioned here.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {demoUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className='code'>{user.password}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <LinkButton to='/login'>Login </LinkButton>
    </Page>
  )
}

export default AboutPage
