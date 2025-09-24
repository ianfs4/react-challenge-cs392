interface BannerProps {
  title: String;
}

const Banner = ({title}: BannerProps) => (
  <h1 className="my-3">{title}</h1>
);

export default Banner;