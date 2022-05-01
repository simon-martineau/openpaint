import React, { useEffect } from "react";
import { EventCallback, EventMap, OpenPaintEvent, SubscribersList } from "./events";

interface EventBus {
  dispatchEvent: <K extends keyof EventMap>(eventName: K, event: OpenPaintEvent) => void;
  subscribe: <K extends keyof EventMap>(eventName: K, callback: EventCallback) => void;
  unsubscribe: <K extends keyof EventMap>(eventName: K, callback: EventCallback) => void;
}

let subscribers: SubscribersList = [];

const subscribe: EventBus["subscribe"] = (eventName, callback) => {
  subscribers = [...subscribers, [eventName, callback]];
};

const unsubscribe: EventBus["unsubscribe"] = (eventName, callback) => {
  subscribers = subscribers.filter((subscriber) => subscriber[1] !== callback);
};

const dispatchEvent: EventBus["dispatchEvent"] = (eventName, event) => {
  subscribers.forEach(([subscriberEventName, callback]) => {
    if (eventName === subscriberEventName) {
      callback(event);
    }
  });
};

export const useEventDispatch = () => {
  return dispatchEvent;
};

export const useEventBus = <K extends keyof EventMap>(
  eventName: K,
  callback: EventCallback,
  deps?: React.DependencyList
) => {
  useEffect(() => {
    subscribe(eventName, callback);

    return () => unsubscribe(eventName, callback);
  }, deps);
};
