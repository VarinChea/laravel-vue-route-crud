
<template>
<div class="card mt-5 container-fluid col-md-6">
        <div class="card-header">
            <h2>Update Post</h2>
        </div>
        <div class="card-body">
                <div class="col-lg-12 mt-1 mr-1">
                    <div class="float-right">
                         <router-link class="btn btn-primary" :to="{name:'Index'}">Back</router-link>
                    </div>
                </div>
            <div class="row mt-2">
                <div class="col-lg-12">
                    <form @submit.prevent="updatePost">
                         <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>Title:</strong>
                                    <input type="text" name="title" v-model="posts.title" class="form-control" placeholder="Title">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>Description:</strong>
                                    <textarea class="form-control" style="height:150px" name="description" v-model="posts.description" placeholder="Description"></textarea>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                              <button type="submit" class="btn btn-success">Update</button>
                            </div>
                        </div>
                    </form>
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
                posts: {}
            }
        },
         created() {
                axios
                .get(`http://localhost:8000/api/post/${this.$route.params.id}`)
                .then((response) => {
                    this.posts = response.data;
                    console.log(this.posts);
                });
        },
         methods: {
            updatePost() {
               axios
                    .put(`http://localhost:8000/api/post/${this.$route.params.id}`,this.posts)
                    .then((response) => {
                        this.$router.push({name: 'Index'});
                    });
            }
        }

}
</script>

<style>

</style>
