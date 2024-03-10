import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenubarTogglerComponent } from './fragments/menubar-toggler/menubar-toggler.component';
import { MenubarItemsComponent } from './fragments/menubar-items/menubar-items.component';
import { MenubarContactIconComponent } from './fragments/menubar-contact-icon/menubar-contact-icon.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenubarTogglerComponent,
    MenubarItemsComponent,
    MenubarContactIconComponent,
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarComponent {
  readonly opened = signal(false);

  handleToggleClick(toggle: boolean): void {
    this.opened.update(() => toggle);
  }
}
