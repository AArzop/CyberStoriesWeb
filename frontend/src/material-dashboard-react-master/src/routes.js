import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import BubbleChart from '@material-ui/icons/BubbleChart'
import LocationOn from '@material-ui/icons/LocationOn'
import Notifications from '@material-ui/icons/Notifications'
import DashboardPage from './views/Dashboard/Dashboard'
import UserProfile from './views/UserProfile/UserProfile'
import Leaderboard from './views/Leaderboard/Leaderboard'
import Orders from './views/Orders/Orders'
import GameMaster from './views/GameMaster/GameMaster'
import Maps from './views/Maps/Maps'
import NotificationsPage from './views/Notifications/Notifications'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/user',
    name: 'Company',
    icon: Person,
    component: UserProfile,
    layout: '/admin'
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    icon: 'content_paste',
    component: Leaderboard,
    layout: '/admin'
  },
  {
    path: '/orders',
    name: 'Orders',
    icon: LibraryBooks,
    component: Orders,
    layout: '/admin'
  },
  {
    path: '/game-master',
    name: 'Game Master',
    icon: BubbleChart,
    component: GameMaster,
    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: LocationOn,
    component: Maps,
    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin'
  }
]

export default dashboardRoutes
