class AppPageClass {
  homePage = {
    name: 'Home',
    href: '/',
  }
  registerPage = {
    name: 'Register',
    href: '/register',
  }
  signIn = {
    name: 'Sign In',
    href: '/sign-in',
  }
  verifyEmailPage = '/register/verify-email'
}

const AppPage = new AppPageClass()

export default AppPage
