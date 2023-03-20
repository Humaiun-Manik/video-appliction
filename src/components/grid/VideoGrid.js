import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Error from "../shared/error/Error";
import Loading from "../shared/loading/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
  const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => <VideoGridItem key={video.id} video={video} />);

  if (!isLoading && !isError && videos.length === 0)
    content = <div className="col-span-12">No videos found!</div>;

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">{content}</div>
      </section>
    </section>
  );
}
