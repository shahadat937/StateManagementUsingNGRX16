import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createCourse, showForm } from '../state/courses.action';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{
   courseForm: FormGroup ;
 constructor(
    private store: Store<AppState>,

  ){}
    ngOnInit() {

    this.init();

  }
   hideCreateForm(){
    this.store.dispatch(showForm({value: false}));
  }
   init(){
     this.courseForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5000)
      ]),
      author: new FormControl(null, [
        Validators.required
      ]),
      price: new FormControl(null),
      image: new FormControl(null)
    })
  }
   async onCreateOrUpdateCourse(){
     console.log(this.courseForm.value);
     if(this.courseForm.invalid){
       return;
     }
     const course = this.courseForm.value;
     this.store.dispatch(createCourse({ course }));
     this.store.dispatch(showForm({ value: false }));
  }
   showTitleValidationerrors(){
    const titleControl = this.courseForm.get('title');
    if(titleControl.touched && !titleControl.valid){
      if(titleControl.errors['required']){
        return 'Title is a required field.';
      }
      if(titleControl.errors['minlength']){
        return 'Title must be at least 6 charachters.';
      }
      if(titleControl.errors['maxlength']){
        return 'Title cannot be more than 100 charachters.';
      }
    }
    return '';
  }
   showDescriptionValidationerrors(){
    const descriptionControl = this.courseForm.get('description');
    if(descriptionControl.touched && !descriptionControl.valid){
      if(descriptionControl.errors['required']){
        return 'Description is a required field.';
      }
      if(descriptionControl.errors['minlength']){
        return 'Description must be at least 10 charachters.';
      }
      if(descriptionControl.errors['maxlength']){
        return 'Description cannot be more than 5000 charachters.';
      }
    }
    return '';
  }

   showAuthorValidationerrors(){
    const authorControl = this.courseForm.get('author');
    if(authorControl.touched && !authorControl.valid){
      if(authorControl.errors['required']){
        return 'Author is a required field.';
      }
    }
    return '';
  }
}
