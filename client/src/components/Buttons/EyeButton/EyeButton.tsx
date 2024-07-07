import { ToggleBtn } from "./styles";
import { ReactComponent as OpenEyeIcon } from "../../../assets/images/icons/eye-open-svgrepo-com.svg"
import { ReactComponent as ClosedEyeIcon } from "../../../assets/images/icons/eye-closed-svgrepo-com.svg"

interface EyeButtonProps {
  value: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const EyeButton: React.FC<EyeButtonProps> = ({ value, onClick }) => {
  return (
    <ToggleBtn onClick={onClick}>
      {value ? <OpenEyeIcon /> : <ClosedEyeIcon />}
    </ToggleBtn>
  )
}
