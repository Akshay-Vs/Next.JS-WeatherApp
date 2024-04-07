import React from 'react';
import PropTypes from 'prop-types';
import './Typography.scss';
import { IChildren } from '@/interfaces/IChildrenProp';

//#region Interfaces

interface IExtandableProps extends IChildren {
  props?: React.HTMLAttributes<HTMLDivElement>;
  className?: string;
}

interface ITypographyHeading extends IExtandableProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
}

interface ITypographyParagraph extends IExtandableProps {}
//#endregion

const Typography = ({ children, props, className }: IExtandableProps) => {
  return (
    <div className={`typography ${className}`} {...props}>
      {children}
    </div>
  );
};

const Heading = ({
  variant = 'h1',
  className,
  children,
}: ITypographyHeading) => {
  return (
    <div
      className={`typography__heading typography__heading--${variant} ${className}`}
    >
      {children}
    </div>
  );
};

const Paragraph = ({ children, props, className }: ITypographyParagraph) => {
  return (
    <div className={`typography__paragraph ${className}`} {...props}>
      {children}
    </div>
  );
};

Typography.Heading = Heading;
Typography.Paragraph = Paragraph;

// RunTime Typechecking using PropTypes
Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']),
  className: PropTypes.string,
};

export default Typography;
