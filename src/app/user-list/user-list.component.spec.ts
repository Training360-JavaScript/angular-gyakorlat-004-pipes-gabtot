import { UserDetailComponent } from './../user-detail/user-detail.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { User } from '../model/user';
import { FilterPipe } from '../pipe/filter.pipe';
import { SorterPipe } from '../pipe/sorter.pipe';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent,
      UserDetailComponent,
      FilterPipe,
      SorterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('phraseString should exist', () => {
    expect(component.phraseString).toEqual('');
  });

  it('columnKey should exist', () => {
    expect(component.columnKey).toEqual('');
  });

  it('onColumnSelect should exist', () => {
    expect(component.onColumnSelect).toBeTruthy();
  });

  it('onSelectUser should be called', async () => {

    component.users = [
      new User({id: 1, name: 'Bob', email: 'bob@gmail.com', address: 'NY, 24', active: true})
    ];
    spyOn(component, 'onSelectUser');
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector(
      'table tbody tr:nth-child(1) button'
    );
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onSelectUser).toHaveBeenCalled();
    });
  });

});
