import $ from './Ajax';
export var getUserInfo = function (query) { return $.get('/git/users/github'); };
