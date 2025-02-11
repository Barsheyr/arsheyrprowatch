import WatchDetailsClient from "../../../components/WatchDetails/WatchDetailsClient";
import WatchDetailsServer from "../../../components/WatchDetails/WatchDetailsServer";

const WatchItem = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  return (
    <WatchDetailsClient slug={slug}>
      <WatchDetailsServer slug={slug} />
    </WatchDetailsClient>
  );
};

export default WatchItem;
