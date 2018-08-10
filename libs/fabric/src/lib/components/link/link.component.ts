import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ILinkProps, Link } from 'office-ui-fabric-react/lib/Link';

@Component({
  selector: 'fab-link',
  exportAs: 'fabLink',
  template: `
    <Disguise
        #reactNode
        [disguiseRootAs]="LinkType"

        [href]="href"
        [type]="type"
        [download]="download"
        [hrefLang]="hrefLang"
        [media]="media"
        [rel]="rel"
        [target]="target"
        [autoFocus]="autoFocus"
        [form]="form"
        [formAction]="formAction"
        [formEncType]="formEncType"
        [formMethod]="formMethod"
        [formNoValidate]="formNoValidate"
        [formTarget]="formTarget"
        [name]="name"
        [value]="value"
        [as]="linkAs"

        [componentRef]="componentRef"
        [disabled]="disabled"
        [styles]="styles"
        [theme]="theme"
        [keytipProps]="keytipProps">
        <ReactContent><ng-content></ng-content></ReactContent>
    </Disguise>
  `,
  styles: ['react-renderer'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabLinkComponent extends ReactWrapperComponent<ILinkProps> {
  readonly LinkType: any = Link;

  @ViewChild('reactNode')
  protected reactNodeRef: ElementRef;

  @Input()
  href: ILinkProps['href'];
  @Input()
  type?: ILinkProps['type'];
  @Input()
  download?: ILinkProps['download'];
  @Input()
  hrefLang?: ILinkProps['hrefLang'];
  @Input()
  media?: ILinkProps['media'];
  @Input()
  rel?: ILinkProps['rel'];
  @Input()
  target?: ILinkProps['target'];
  @Input()
  autoFocus?: ILinkProps['autoFocus'];
  @Input()
  form?: ILinkProps['form'];
  @Input()
  formAction?: ILinkProps['formAction'];
  @Input()
  formEncType?: ILinkProps['formEncType'];
  @Input()
  formMethod?: ILinkProps['formMethod'];
  @Input()
  formNoValidate?: ILinkProps['formNoValidate'];
  @Input()
  formTarget?: ILinkProps['formTarget'];
  @Input()
  name?: ILinkProps['name'];
  @Input()
  value?: ILinkProps['value'];

  @Input()
  componentRef?: ILinkProps['componentRef'];
  @Input()
  disabled?: ILinkProps['disabled'];
  @Input()
  styles?: ILinkProps['styles'];
  @Input()
  theme?: ILinkProps['theme'];
  @Input('as')
  linkAs?: string | React.ComponentClass | React.StatelessComponent;
  @Input()
  keytipProps?: ILinkProps['keytipProps'];

  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    super(elementRef, changeDetectorRef);
  }
}