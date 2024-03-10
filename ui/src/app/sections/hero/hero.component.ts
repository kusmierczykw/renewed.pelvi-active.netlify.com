import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarComponent } from '../../components/menubar/menubar.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MenubarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
