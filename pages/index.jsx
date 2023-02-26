const index = () => {
  return null;
};

export default index;

export const getServerSideProps = async ({ res }) => {
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );

    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
