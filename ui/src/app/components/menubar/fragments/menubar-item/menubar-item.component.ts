import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'li[app-menubar-item]',
  standalone: true,
  templateUrl: './menubar-item.component.html',
  styleUrl: './menubar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarItemComponent {
  public readonly label = input();
}
