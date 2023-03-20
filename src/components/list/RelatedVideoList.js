import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Error from "../shared/error/Error";
import Loading from "../shared/loading/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ currentVideoId, tags }) {
  const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id: currentVideoId, tags }));
  }, [dispatch, currentVideoId, tags]);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isError && relatedVideos?.length === 0)
    content = <div className="col-span-12">No related videos found!</div>;

  if (!isLoading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((relatedVideo) => (
      <RelatedVideoListItem key={relatedVideo.id} relatedVideo={relatedVideo} />
    ));

  return <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">{content}</div>;
}
