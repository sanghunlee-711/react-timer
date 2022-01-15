import { useEffect, useRef } from 'react';

interface IUseInterval {
  callback: () => void;
  delay: number | null;
}

const useInterval = ({ callback, delay }: IUseInterval) => {
  const savedCallback = useRef<() => void>();

  //마지막 콜백함수 저장을 위함
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //기간을 세팅하기 위함
  useEffect(() => {
    const tick = () => {
      const callbackFn = savedCallback.current as () => void;
      callbackFn();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
