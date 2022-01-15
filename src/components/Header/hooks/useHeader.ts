import { useEffect, useState } from 'react';
import { getDate } from '../../../api';
import { Status } from '../../../types';

const useTimer = () => {
  const [status, setStatus] = useState<string>();
  const [rest, setRest] = useState<number>();

  const handleDate = async () => {
    const res = await getDate();

    const { start, end } = res;
    const now = Date.now();

    if (now < start) {
      setStatus(Status.Ready);
    } else if (start <= now && now <= end) {
      setStatus(Status.Open);
      setRest((end - start) / 1000); //초로 환산필요
    } else if (now > end) {
      setStatus(Status.End);
    } else {
      setStatus('Default');
    }
  };

  useEffect(() => {
    handleDate();
  }, []);

  return {
    state: { status, rest },
    actions: {},
  };
};

export default useTimer;
