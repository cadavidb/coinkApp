import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Query } from 'src/app/modules/dashboard/models/query.type';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit {
  form:FormGroup;
  @Output() Onfilter:EventEmitter<Query>=new EventEmitter();
  @Output() OnClean:EventEmitter<Query>=new EventEmitter();
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      user: ['',Validators.minLength(2)],
      date: [''],
  })
}

  ngOnInit(): void {
  }

  clean(){
    this.form.reset();
    this.OnClean.emit();
  }

  search(){
    this.Onfilter.emit(this.form.value);
  }

}
