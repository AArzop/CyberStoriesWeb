import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../lib/bootstrap/css/bootstrap.min.css'
import IndexPage from './pages/index/IndexPage'
import DownloadPage from './pages/download/DownloadPage'
import LeaderboardPage from './pages/LeaderboardPage'
import NotFoundPage from './pages/NotFoundPage'
import GameResultVisiblePage from './pages/GameResultVisiblePage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PasswordChangePage from './pages/PasswordChangePage'
import PasswordChangeDonePage from './pages/PasswordChangeDonePage'
import PasswordResetPage from './pages/PasswordResetPage'
import PasswordResetDonePage from './pages/PasswordResetDonePage'
import PasswordResetConfirmPage from './pages/PasswordResetConfirmPage'
import PasswordResetCompletePage from './pages/PasswordResetCompletePage'
import GameMasterTokenPage from './pages/GameMasterTokenPage'
import RegisterPage from './pages/register/RegisterPage'
import GameMasterPage from './pages/GameMasterPage'
import PlayerDetailsPage from './pages/PlayerDetailsPage'
import NewsPage from './pages/news/NewsPage'
import GameMasterWriteEmailPage from './pages/GameMasterWriteEmailPage'
import TryPage from './pages/try/TryPage'
import { ParallaxProvider } from 'react-scroll-parallax'
import RentPage from './pages/rent/RentPage'
import ArticlePage from './pages/article/ArticlePage'
import ScrollToTop from './components/ScrollToTop'

class App extends Component {
  render () {
    return (
      <ParallaxProvider>
        <Provider store={store}>
          <Router>
            <ScrollToTop>
              <Switch>
                <Route exact path={'/download/'} component={DownloadPage}/>
                <Route exact path={'/rent'} component={RentPage}/>
                <Route exact path={'/try'} component={TryPage}/>
                <Route exact path={'/news/'} component={NewsPage}/>
                <Route exact path={'/article/'} component={ArticlePage}/>
                <Route exact path={'/leaderboard/'} component={LeaderboardPage}/>
                <Route exact path={'/leaderboard/:playerId/'} component={PlayerDetailsPage}/>
                <Route exact path={'/gameresult_visible/'} component={GameResultVisiblePage}/>
                <Route exact path={'/login/'} component={LoginPage}/>
                <Route exact path={'/register/'} component={RegisterPage}/>
                <Route exact path={'/accounts/profile/'} component={ProfilePage}/>
                <Route exact path={'/accounts/logout/'} component={IndexPage}/>
                <Route exact path={'/accounts/password_change/done/'} component={PasswordChangeDonePage}/>
                <Route exact path={'/accounts/password_change/'} component={PasswordChangePage}/>
                <Route exact path={'/accounts/password_reset/done/'} component={PasswordResetDonePage}/>
                <Route exact path={'/accounts/password_reset/'} component={PasswordResetPage}/>
                <Route exact path={'/accounts/reset/:uid64/:token/'} component={PasswordResetConfirmPage}/>
                <Route exact path={'/accounts/reset/done/'} component={PasswordResetCompletePage}/>
                <Route exact path={'/game_master/token/'} component={GameMasterTokenPage}/>
                <Route exact path={'/game_master/write_email/'} component={GameMasterWriteEmailPage}/>
                <Route exact path={'/game_master/:token/'} component={GameMasterPage}/>
                <Route exact path={'/'} component={IndexPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </ScrollToTop>
          </Router>
        </Provider>
      </ParallaxProvider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
