type BackgroundVideoProps = {
  src: string;
  className?: string;
};

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  className,
}) => (
  <video autoPlay loop muted playsInline className={className}>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default BackgroundVideo;
