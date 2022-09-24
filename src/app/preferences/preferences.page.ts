import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { widgetList } from '../shared/widget.mapper';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  userPreferences = widgetList;
  userPreferencesList = [];
  isAllSelected = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    let allOption = {
      name: 'Select All Widgets',
      desc: 'Choose all widgets',
      img: ''
    };
    this.userPreferences.push(allOption);
  }

  setPreference(widgetIndex) {
    const index = this.userPreferencesList.indexOf(widgetIndex);
    let isCurrentSelectionAll = (widgetIndex === this.userPreferences.length - 1);

    if (isCurrentSelectionAll) {
      if (index > -1) {
        this.userPreferencesList = [];
      } else {
        this.userPreferencesList = [1, 2, 3, 4];
      }
    } else {
      if (index > -1) {
        this.userPreferencesList.splice(index, 1);
      } else {
        this.userPreferencesList.push(widgetIndex);
      }
      let isAllAlreadySelected = this.userPreferencesList.indexOf(4);
      if (isAllAlreadySelected > -1) {
        this.userPreferencesList.splice(isAllAlreadySelected, 1);
      }
    }
    console.log(this.userPreferencesList);
  }

  getBgColor(widgetIndex) {
    const index = this.userPreferencesList.indexOf(widgetIndex);

    if (index > -1) {
      return '#1e4681';
    } else {
      return 'white';
    }
  }

  gotoDashboard() {
    this.apiService.setPreferences(this.userPreferencesList);
    this.router.navigateByUrl('dashboard');
  }
}
