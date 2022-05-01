interface OpenPaintEvent {}

// prettier-ignore
export interface EventMap {
  "reset-canvas": OpenPaintEvent;
  "undo": OpenPaintEvent;
  "redo": OpenPaintEvent;
}

type EventCallback = <K extends keyof EventMap>(e: EventMap[K]) => any;

type SubscriberEntry = [keyof EventMap, EventCallback];

type SubscribersList = SubscriberEntry[];
