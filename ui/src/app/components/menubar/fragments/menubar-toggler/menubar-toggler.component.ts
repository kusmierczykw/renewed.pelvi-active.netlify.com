import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  Output,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Icon } from '../../../../shared/icon/types/icon';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-menubar-toggler',
  standalone: true,
  imports: [NgClass, IconComponent],
  templateUrl: './menubar-toggler.component.html',
  styleUrl: './menubar-toggler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarTogglerComponent {
  @Output()
  readonly toggleClick = new EventEmitter<boolean>();

  private readonly toggle = signal(false);

  protected readonly icon = computed<Icon>(() =>
    this.toggle() ? 'bi-x-lg' : 'bi-text-paragraph',
  );

  handleToggleClick(): void {
    this.toggle.update((toggle) => !toggle);

    this.toggleClick.emit(this.toggle());
  }
}
