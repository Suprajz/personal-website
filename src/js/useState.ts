export const useState = <T>(
  initialValue: T
): [() => T, (value: T) => void, (callback: (newValue: T) => void) => void] => {
  let value = initialValue;
  const subscribers: ((newValue: T) => void)[] = [];
  const getValue = () => value;
  const setValue = (newValue: T) => {
    value = newValue;
    subscribers.forEach((callback) => callback(newValue));
  };
  const subscribe = (callback: (newValue: T) => void) => {
    subscribers.push(callback);
  };

  return [getValue, setValue, subscribe];
};
