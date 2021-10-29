<template>
  <div class="card mt-5 container-fluid">
        <div class="card-header">
            <h2>Hello Laravel Crud Vue Js</h2>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-12 mt-1 mr-1">
                    <div class="float-right">
                        <router-link class="btn btn-success" :to="{name:'Create'}">Create New Post</router-link>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-lg-12">
                    <table class="table table-bordered">
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th width="280px">Action</th>
                        </tr>
                        <tr v-for="post in lists" :key="post.id">
                            <td>{{post.id}}</td>
                            <td>{{post.title}}</td>
                            <td>{{post.description}}</td>
                            <td>
                                <router-link style="background-color:green" class="btn btn-success" :to="{ name: 'Edit', params: { id: post.id }}">Edit</router-link>
                                <button style="background-color:red" @click="deletePost(post.id)" type="submit" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>
import axios from 'axios'
export default {
     data() {
            return {
                 lists:[],
            }
        },
     created() {
        this.fetchAll()
     },
     methods:{
            fetchAll() {
            try {
                axios.get('api/post')
                    .then(res => this.lists = res.data)
            } catch (e) {
                console.log(e)
            }
        },
        deletePost(postId) {
                    axios
                    .delete(`api/post/${postId}`)
                    .then(response => {
                        this.fetchAll()
                    });
            }
        }

    }
</script>

<style>

</style>
