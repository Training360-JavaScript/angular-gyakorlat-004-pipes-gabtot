import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserListComponent,
        UserDetailComponent,
        FilterPipe,
        SorterPipe
      ],
      providers: [
        UserService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('phrase should exist', () => {
    expect(component.phrase).toEqual('');
  });

  it('onChangePhrase should exist', () => {
    expect(component.onChangePhrase).toBeTruthy();
  });

  it('onChangePhrase should be called', async () => {
    spyOn(component, 'onChangePhrase');

    fixture.detectChanges();

    let input: HTMLInputElement = fixture.debugElement.nativeElement.querySelector(
      'input'
    );
    input.value = 'Bob';
    input.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onChangePhrase).toHaveBeenCalled();
    });
  });

});
