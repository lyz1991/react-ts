import * as React from 'react'
import * as Loadable from 'react-loadable'
import Loader from '../components/common/Loader'
const Index  = Loadable({
    loader: () => import('../pages/Index'),
    loading: Loader
});
const Profile = Loadable({
    loader: () => import('../pages/Profile'),
    loading: Loader
});

export default [
  {
    path: '/index',
    components: Index
  },
  {
    path: '/profile',
    components: Profile
  }
]
