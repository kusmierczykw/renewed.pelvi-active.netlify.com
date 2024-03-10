import { inject, Pipe, PipeTransform } from '@angular/core';
import { Icon } from '../types/icon';
import { IconCssProviderService } from '../providers/icon-css-provider.service';

@Pipe({
  name: 'iconCss',
  standalone: true,
})
export class IconCssPipe implements PipeTransform {
  private readonly provider = inject(IconCssProviderService);

  transform(icon: Icon): string {
    return this.provider.getCss(icon);
  }
}
