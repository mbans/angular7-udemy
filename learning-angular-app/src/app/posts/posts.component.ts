import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[]

  //Use Http class to send Http requests
  constructor(private postService: PostService) {
    //The private ensues this is added as an instance variable for this class
  }

  //called when constructed
  ngOnInit() {
    this.postService.getAll()
        .subscribe(retrievedPosts => this.posts = retrievedPosts);
  }

  createPost(input: HTMLInputElement) {
    let post = {title : input.value}
    input.value = ''; //reset input once we have posted the value

    this.postService.create(post)
        .subscribe(
          newPost => {
                   post['id'] = newPost.id;
                   this.posts.splice(0,0,post);
          }, 
          (error: AppError)  => {
            if(error instanceof BadInput) {
              // alert("Received a bad request");
              // this.for.setErrors(error)
            }
            else throw error;   //handled by global error handler
          });
  }

  updatePost(post) {
    //For patch we onlt update the fields that are updated
    this.postService.udpdate(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost.json());
        });
  }

  deletePost(post) {
    //For patch we onlt update the fields that are updated
    this.postService.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        },
        (error : AppError) => {
          if(error instanceof NotFoundError)
             alert("This post has already been deleted");
          throw error; //handled by global handler
        });
  }
 }
