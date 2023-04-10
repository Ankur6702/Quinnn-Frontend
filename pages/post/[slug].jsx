import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import PostsService from "@/src/home/service/PostsService";
import useUserContext from "@/src/profile/context/useUserContext";
import PostDetails from "@/src/home/components/Posts/detail/PostDetails";
import { SITE_NAME, SERVER } from "@/src/common/config/seo";

const postsService = new PostsService();
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const { data: postData, run, status, error, setData } = useAsync();
  const router = useRouter();
  const { user } = useUserContext();
  const { slug } = router.query;

  useEffect(() => {
    const fetchPostData = async () => {
      run(postsService.fetchPostData(slug))
        .then((response) => {})
        .catch((error) => console.error(error));
    };

    slug && fetchPostData();
  }, [run, slug, user._id]);

  return (
    <>
      <Head>
        <title>{`Post | ${SITE_NAME}`}</title>
        <meta name="description" content={`${postData?.data[0]?.text}`} />
        <meta property="og:url" content={`${SERVER}/post/${slug}`} />
        <meta property="og:title" content={`Post | ${SITE_NAME}`} />
        <meta
          property="og:description"
          content={`${postData?.data[0]?.text}`}
        />
        <meta property="og:image" content={`${postData?.data[0]?.imageURL}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <GenericResponseHandler
        status={status}
        error={error}
        skeleton={<CircularLoaderSkeleton />}
      >
        <PostDetails postData={postData?.data[0]} setData={setData} />
      </GenericResponseHandler>
    </>
  );
}
