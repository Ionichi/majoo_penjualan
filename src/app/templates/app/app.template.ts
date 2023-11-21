import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: './app.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush, // dijalankan ketika halaman diakses
})
export class AppTemplate {
}