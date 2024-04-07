import PropTypes from 'prop-types';
import { IChildren } from '@interfaces/IChildrenProp';
import './BluredBlobs.scss';

interface BlobProps {
  className?: string;
}

const BluredBlobs = ({ children }: IChildren) => {
  return (
    <div className="blur-3xl absolute w-full h-full overflow-hidden opacity-70">
      {children}
    </div>
  );
};

const BlobWarm = ({ className }: BlobProps) => {
  return <div className={`blured-blobs__warm ${className}`} />;
};

const BlobCold = ({ className }: BlobProps) => {
  return <div className={`blured-blobs__cold ${className}`} />;
};

const BlobNeutral = ({ className }: BlobProps) => {
  return <div className={`blured-blobs__neutral ${className}`} />;
};

BluredBlobs.BlobCold = BlobCold;
BluredBlobs.BlobNeutral = BlobNeutral;
BluredBlobs.BlobWarm = BlobWarm;

BluredBlobs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BluredBlobs;
