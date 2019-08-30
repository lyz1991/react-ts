import $ from './Ajax'
import {fetchQuery} from "./interface";
export const getUserInfo = (query?: fetchQuery.query) => $.get('/git/users/github')
