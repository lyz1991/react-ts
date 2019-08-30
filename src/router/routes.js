import * as Loadable from 'react-loadable';
import Loader from '../components/common/Loader';
var Index = Loadable({
    loader: function () { return import('../pages/Index'); },
    loading: Loader
});
var Profile = Loadable({
    loader: function () { return import('../pages/Profile'); },
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
];
