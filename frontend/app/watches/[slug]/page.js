import WatchDetailsClient from "../../../components/WatchDetails/WatchDetailsClient";
import WatchDetailsServer from "../../../components/WatchDetails/WatchDetailsServer";

const WatchItem = ({ params }) => {
  const { slug } = params;

  return (
    <WatchDetailsClient slug={slug}>
      <WatchDetailsServer slug={slug} />
    </WatchDetailsClient>
  );
};

export default WatchItem;
