import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledLoader, Spinner } from './styles';
import { RootState } from '../../store/store';

export const Loader = () => {
  const status = useSelector((state: RootState) => state.products.status);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === 'loading') {
      setShow(true);
    } else if ((status === 'succeeded' || status === 'failed') && show) {
      timer = setTimeout(() => {
        setShow(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [status, show]);

  return (
    <>
      {(show || status === 'loading') &&
        <StyledLoader>
          <Spinner />
        </StyledLoader>
      }
    </>
  );
}
