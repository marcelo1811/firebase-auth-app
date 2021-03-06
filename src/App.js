import { Router } from '@reach/router'
import { ProfilePage } from "./Components/ProfilePage"
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import { PasswordReset } from './Components/PasswordReset'

function App() {
  const user = null
  return (
    user ? (
      <ProfilePage />
    ) : (
      <Router>
        <SignIn path='/'/>
        <SignUp path='signUp' />
        <PasswordReset path='passwordReset' />
      </Router>
    )
  )
}

export default App;
