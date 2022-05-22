/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export type DataDinamis = {
    name: string;
}

export interface InputProps {
    data: DataDinamis[];
    placeHolder: string;
    onDeleteClick: any;
    onChange: any;
}

export default function InputDinamis(props: InputProps) {
  const {
    data, onDeleteClick, onChange, placeHolder,
  } = props;
  return (
    <div style={{ marginTop: '24px' }}>
      {data && data.map((item, index) => (

        <div className="d-flex align-items-center" style={{ marginTop: '24px' }}>
          <span style={{ fontSize: '18px' }}>
            {(index + 1)}
            .&nbsp;&nbsp;
          </span>
          <input
            type="text"
            className="form-control rounded-pill text-lg input-lg"
            placeholder={placeHolder}
            onChange={(e) => onChange(e, index)}
            value={item.name && item.name}
          />

          <a onClick={() => onDeleteClick && onDeleteClick(item, index)} style={{ marginLeft: '10px' }}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </a>
        </div>
      ))}
    </div>
  );
}
