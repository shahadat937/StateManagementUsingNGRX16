import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/course.model';
import { AppState } from 'src/app/store/app.state';
import { getCourseByIdQueryParams} from '../state/course.selector';
import { createCourse, showForm, updateCourse } from '../state/courses.action';
import { Subscription } from 'rxjs';
import { CourseService } from '../services/course.service';
import { getQueryParams } from 'src/app/store/router/router.selector';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit,OnDestroy {
  courseForm: FormGroup;
  editMode: boolean = false;
  course: Course = null;
  editModeSubscription:Subscription;
  selectedCourseSubscription:Subscription;
  selectedImage: File | null = null;
  constructor(private store: Store<AppState>, private courseService: CourseService,) {}
  ngOnDestroy(): void {
      this.editModeSubscription.unsubscribe();
      this.selectedCourseSubscription.unsubscribe();
  }
  ngOnInit() {
   this.editModeSubscription= this.store.select(getQueryParams).subscribe((quaryParams) => {
      this.editMode = JSON.parse(quaryParams['edit']);
    });
    this.init();
    this.subsribeToSelectedCourse();
  }
  hideCreateForm() {
    this.store.dispatch(showForm({ value: false }));
  }
  init() {
    this.courseForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5000),
      ]),
      author: new FormControl(null, [Validators.required]),
      price: new FormControl(null),
      image: new FormControl(null),
    });
  }
  subsribeToSelectedCourse() {
  this.selectedCourseSubscription=  this.store.select(getCourseByIdQueryParams).subscribe((course) => {
      this.course = course;
    });
    if (this.editMode && this.course) {
      this.courseForm.patchValue(this.course);
    } else {
      this.courseForm.reset();
    }
  }
  async onCreateOrUpdateCourse() {
    console.log(this.courseForm.value);
 //   this.store.dispatch(setEditMode({ editMode: false }));
    if (!this.courseForm.valid) {
      return;
    }
    if(this.editMode)
    {
     //  const url = await this.courseService.uploadImage(this.selectedImage);
       //const imagePath = url ? url : this.courseForm.value.image;
      //this.courseForm.patchValue({ image: imagePath});
      const updatedCoures: Course={
        id:this.course.id,
        title:this.courseForm.value.title,
        description:this.courseForm.value.description,
        author:this.courseForm.value.author,
      //  image:this.courseForm.value.image,
        price:this.courseForm.value.price,
      }
     this.store.dispatch(updateCourse({ course:updatedCoures }));
    }
    else{
     //Create a new course on button click
     // const url = await this.courseService.uploadImage(this.selectedImage);
      //this.courseForm.patchValue({ image: url }); 
         console.log(this.courseForm.value);
      this.store.dispatch(createCourse({ course:this.courseForm.value }));
    } 
    this.store.dispatch(showForm({ value: false }));
  }
  showTitleValidationerrors() {
    const titleControl = this.courseForm.get('title');
    if (titleControl.touched && !titleControl.valid) {
      if (titleControl.errors['required']) {
        return 'Title is a required field.';
      }
      if (titleControl.errors['minlength']) {
        return 'Title must be at least 6 charachters.';
      }
      if (titleControl.errors['maxlength']) {
        return 'Title cannot be more than 100 charachters.';
      }
    }
    return '';
  }
  showDescriptionValidationerrors() {
    const descriptionControl = this.courseForm.get('description');
    if (descriptionControl.touched && !descriptionControl.valid) {
      if (descriptionControl.errors['required']) {
        return 'Description is a required field.';
      }
      if (descriptionControl.errors['minlength']) {
        return 'Description must be at least 10 charachters.';
      }
      if (descriptionControl.errors['maxlength']) {
        return 'Description cannot be more than 5000 charachters.';
      }
    }
    return '';
  }

  showAuthorValidationerrors() {
    const authorControl = this.courseForm.get('author');
    if (authorControl.touched && !authorControl.valid) {
      if (authorControl.errors['required']) {
        return 'Author is a required field.';
      }
    }
    return '';
  }

  onFileSelected(event: any){
    const file = event.target.files[0];
    if(file){
      this.selectedImage = file;
      const fileNameSpan = document.querySelector('.file-name');
      if(fileNameSpan){
        fileNameSpan.textContent = file.name;
      }
    }
  }
}
