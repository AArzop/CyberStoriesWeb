import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../lib/bootstrap/css/bootstrap.min.css'
import IndexPage from './pages/index/IndexPage'
import DownloadPage from './pages/download/DownloadPage'
import LeaderboardPage from './pages/LeaderboardPage'
import GameResultVisiblePage from './pages/GameResultVisiblePage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import ResetPasswordPage from './pages/resetPassword/ResetPasswordPage'
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
import ChangePasswordPage from './pages/changePassword/ChangePasswordPage'
import { DashboardPage } from './material-dashboard-react-master/src'

class App extends Component {
  render () {
    return (
      <ParallaxProvider>
        <Provider store={store}>
          <Router>
            <ScrollToTop>
              <Switch>
                <Route exact path={'/download/'} component={DownloadPage}/>
                <Route exact path={'/rent/'} component={RentPage}/>
                <Route exact path={'/try/'} component={TryPage}/>
                <Route exact path={'/news/'} component={NewsPage}/>
                <Route exact path={'/article/'} component={ArticlePage}/>
                <Route exact path={'/console/'} component={DashboardPage}/>
                /* TODO move */
                <Route exact path={'/leaderboard/'} component={LeaderboardPage}/>
                <Route exact path={'/leaderboard/:playerId/'} component={PlayerDetailsPage}/>
                /* TODO move */
                <Route exact path={'/gameresult_visible/'} component={GameResultVisiblePage}/>
                <Route exact path={'/login/'} component={LoginPage}/>
                <Route exact path={'/register/'} component={RegisterPage}/>
                <Route exact path={'/profile/'} component={ProfilePage}/>
                /* TODO move */
                <Route exact path={'/accounts/logout/'} component={IndexPage}/>
                <Route exact path={'/change-password'} component={ChangePasswordPage}/>
                <Route exact path={'/reset-password/'} component={ResetPasswordPage}/>
                /* TODO move */
                <Route exact path={'/game_master/token/'} component={GameMasterTokenPage}/>
                /* TODO move */
                <Route exact path={'/game_master/write_email/'} component={GameMasterWriteEmailPage}/>
                /* TODO move */
                <Route exact path={'/game_master/:token/'} component={GameMasterPage}/>
                <Route exact path={'/'} component={IndexPage}/>
                <Route component={IndexPage}/>
              </Switch>
            </ScrollToTop>
          </Router>
        </Provider>
      </ParallaxProvider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
