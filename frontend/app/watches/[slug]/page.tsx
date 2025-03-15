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

// import WatchDetailsWrapper from "../../../components/WatchDetails/WatchDetailsWrapper";
// import WatchDetailsServer from "../../../components/WatchDetails/WatchDetailsServer";

// const WatchItem = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = params;

//   return (
//     <WatchDetailsWrapper slug={slug}>
//       <WatchDetailsServer slug={slug} />
//     </WatchDetailsWrapper>
//   );
// };

// export default WatchItem;
