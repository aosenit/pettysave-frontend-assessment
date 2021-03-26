import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

    const state = {
        posts: [],
        activeComments:[],
        post:{}
        }
        
        //to handle state
        const getters = {}
        
        //to handle actions
        const actions = {
        getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        commit('SET_POSTS', response.data)
        })
        },

        getComments({ commit }, postId) {
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => {
            commit('SET_POST_COMMENT', response.data)
            })
            },

        getActivePost({commit}, postId){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
        commit('SET_ACTIVE_POST', response.data)
        })
        }

        }

        
        
        //to handle mutations
        const mutations = {
            SET_POSTS(state, posts) {
            state.posts = posts
            }
            ,
            SET_POST_COMMENT(state, comments){
                state.activeComments = comments
            },
            SET_ACTIVE_POST(state, post){
                state.post = post
            }
        }
        
        //export store module
        export default new Vuex.Store({
        state,
        getters,
        actions,
        mutations
        })

