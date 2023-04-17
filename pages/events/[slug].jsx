import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import EventsService from "@/src/events/services/EventsService";
import EventDetails from "@/src/events/components/detail/EventDetails";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";

const eventsService = new EventsService();
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { slug } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState(null);
  const [eventCreator, setEventCreator] = useState(null);

  const fetchEventData = useCallback(async () => {
    try {
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/event/fetch/${slug}`;
      setIsLoading(true);
      const Response = await eventsService.get(reqUrl);
      console.log(Response);
      setEventData(Response?.data?.event);
      if (Response?.data?.event) {
        const reqUserUrl = `${process.env.API_BASE_SERVICE}/api/fetchUser/${Response?.data?.event?.creator}`;
        const res = await eventsService.get(reqUserUrl);
        console.log(res);
        setEventCreator(res?.data?.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchEventData();
  }, [fetchEventData, router]);

  return (
    <>
      {isLoading && slug ? (
        <CircularLoaderSkeleton />
      ) : (
        <EventDetails event={eventData} eventCreator={eventCreator} />
      )}
    </>
  );
}
