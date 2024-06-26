import { Overlay, Panel } from './styles';

interface SlidePanelProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SlidePanel: React.FC<SlidePanelProps> = ({ isVisible, onClose, children }) => {
  // if (isVisible === false) {
  //   return null;
  // }
  
  return (
    <>
      <Overlay isVisible={isVisible} onClick={onClose} />
      <Panel isVisible={isVisible}>
        {children}
      </Panel>
    </>
  );
};

export default SlidePanel;
