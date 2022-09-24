import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { widgetList } from '../shared/widget.mapper';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.page.html',
  styleUrls: ['./widgets.page.scss'],
})

export class WidgetsPage implements OnInit {

  userPreferencesList = [{
    name: "Account Summary",
    desc: "View your account balance",
    img: "../../assets/icon/accountsummary.png"
  }, {
    name: "Funds Transfer",
    desc: "Send money to your family and friends and more",
    img: "../../assets/icon/fundstransfer.png"
  }];
  isListView = true;
  widgetName = "";

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    // this.apiService.getPreferences().subscribe(preferences => {
    //   if (preferences) {
    let preferences = this.apiService.getPreferences();
    if (preferences) {
      this.userPreferencesList = [];
      const userPreferences = preferences.split("");
      userPreferences.forEach(element => {
        let item = {
          name: widgetList[element].name,
          desc: widgetList[element].desc,
          img: this.getImgURL(widgetList[element].name),
        }
        this.userPreferencesList.push(item);
      });
    }
    //   }
    // });
    console.log("this.userPreferencesList:", this.userPreferencesList);
  }

  getImgURL(name) {
    let img = name.trim().toLowerCase();
    img = img.split(" ").join("");
    img = "../../assets/icon/" + img + '.png';
    return img;
  }

  openWidget(widgetName) {
    this.isListView = false;
    this.widgetName = widgetName;
  }

  goBack() {
    this.isListView = true;
  }

}
