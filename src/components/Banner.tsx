interface BannerProps {
  title: String;
}

const Banner = ({title}: BannerProps) => (
  <h1>{title}</h1>
);

export default Banner;