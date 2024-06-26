import { StyledLoader, Spinner } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';

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
