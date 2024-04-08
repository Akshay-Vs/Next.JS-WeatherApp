import { IChildren } from './IChildrenProp';

export interface IExtandable<T extends HTMLElement> extends IChildren {
  props?: React.HTMLAttributes<T>;
  className?: string;
}
