import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../../shared/jsons/blogs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  blogList = Blogs;
  constructor() {}

  ngOnInit() {}

  onBlogBoxClick(id) {
    console.log(id);
  }
}
