import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-basic-practice004-pipe';

  userList: User[] = this.userService.list;

  /**
   * FELADAT!
   * Hozd létre az alábbi változót.
   * @var phrase {string} - a keresőkifejezés
   */



  constructor(
    private userService: UserService,
  ) {}

  onDeleteUser(user: User): void {
    this.userService.removeUser(user);
  }

  /**
   * FELADAT!
   * Hozz létre egy új metódust, amely kezeli a keresőkifejezést.
   * Neve: onChangePhrase
   * Működése: a this.phrase értékét beállítja az
   *  (event.target as HTMLInputElement) értékére.
   * @param event {Event} - az esemény
   * @returns {void}
   */



}
