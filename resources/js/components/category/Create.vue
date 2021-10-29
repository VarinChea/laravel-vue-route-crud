<template>
  <div class="card mt-5 container-fluid col-md-6">
        <div class="card-header">
            <h2 class="text-center">Hello Laravel Crud Vue js</h2>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col-lg-12 mt-1 mr-1">
                    <div class="float-right">
                         <router-link class="btn btn-primary" :to="{name:'Index'}">Back</router-link>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-lg-12">
                    <form @submit.prevent="addPost">
                         <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>Title:</strong>
                                    <input type="text" class="form-control" placeholder="Title" v-model="post.title">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>Description:</strong>
                                    <textarea class="form-control" rows="2" placeholder="Description" v-model="post.description"></textarea>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                                <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                    <p>{{  post.title}}-{{post.description}}</p>
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
                post:{
                    title:'',
                    description:''
                }
            }
        },
        methods:{
            addPost(){
                try{
                   axios.post('api/post',this.post)
                  .then(res=>{
                      this.$router.push({name:"Index"})
                })
                }catch(e){
                    console.log(e)
                }
            }
        }
}
</script>

<style>

</style>
