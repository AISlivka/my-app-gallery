/* eslint-disable @typescript-eslint/no-explicit-any */
interface Subscriable<K extends Record<string, any>> {
  on: <E extends keyof K>(eventName: E, listener: (payload: K[E]) => void) => void;
  off: <E extends keyof K>(eventName: E, listener?: (payload: K[E]) => void) => void;
}

interface Disposable {
  dispose: () => void;
}

type IEventEmitter<K extends Record<string, any>> = Subscriable<K> &
  Disposable & {
    emit: <E extends keyof K>(eventName: E, payload: K[E]) => void;
  };

export class EventEmitter<K extends Record<string, any>> implements IEventEmitter<K> {
  private readonly eventListeners = new Map<keyof K, Set<(payload: any) => void>>();

  public emit<E extends keyof K>(eventName: E, payload: K[E]): void {
    const handlersList = this.eventListeners.get(eventName);
    if (handlersList) {
      handlersList.forEach(handler => handler(payload));
    }
  }

  public off<E extends keyof K>(eventName: E, listener?: (payload: K[E]) => void): void {
    if (listener) {
      const listeners = this.eventListeners.get(eventName);
      if (listeners) {
        listeners.delete(listener);
      }
    } else {
      this.eventListeners.delete(eventName);
    }
  }

  public on<E extends keyof K>(eventName: E, listener: (payload: K[E]) => void): void {
    let handlersList = this.eventListeners.get(eventName);
    if (!handlersList) {
      handlersList = new Set();
      this.eventListeners.set(eventName, handlersList);
    }
    handlersList.add(listener);
  }

  public dispose(): void {
    this.eventListeners.clear();
  }
}
