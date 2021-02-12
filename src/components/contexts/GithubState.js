import {React,useReducer} from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';

const GithubState = props=> {
    
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const[state, dispatch] = useReducer()

}