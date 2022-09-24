import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  myText = "Hello Meera";
  recording = false;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    SpeechRecognition.requestPermission();
  }

  ngOnInit() {
    this.speakText();
  }

  logOut() {
    this.router.navigateByUrl('login');
  }

  speakText() {
    TextToSpeech.speak({
      text: this.myText,
    })
  }

  async startRecognition() {
    const { available } = await SpeechRecognition.available();
    console.log("available?:",available);
    if (available) {
      this.recording = true;
      SpeechRecognition.start({
        popup: false,
        partialResults: true,
        language: "en-US"
      });

      SpeechRecognition.addListener("partialResults", (data: any) => {
        console.log("Hi Meera", data);
        console.log("partialResults was fired", data.matches);
        if (data.matches && data.matches.length > 0) {
          this.myText = data.matches[0];
          this.changeDetectorRef.detectChanges();
        }

        console.log("partialResults was fired", data.value);

        if (data.value && data.value.length > 0) {
          this.myText = data.value[0];
          this.changeDetectorRef.detectChanges();
        }
      });
    }
  }

  async stopRecognition() {
    this.recording = false;
    await SpeechRecognition.stop();
  }
}
