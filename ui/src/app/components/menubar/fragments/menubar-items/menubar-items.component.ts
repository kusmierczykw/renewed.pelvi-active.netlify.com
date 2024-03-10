import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarItemComponent } from '../menubar-item/menubar-item.component';

@Component({
  selector: 'app-menubar-items',
  standalone: true,
  imports: [MenubarItemComponent],
  templateUrl: './menubar-items.component.html',
  styleUrl: './menubar-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarItemsComponent {}
