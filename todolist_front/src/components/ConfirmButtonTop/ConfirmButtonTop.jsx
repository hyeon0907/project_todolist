/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function ConfirmButtonTop({ onSubmit, onCancel, disabled }) {

    const handleCancelClick = () => {
        onCancel();
    }

    const handleSubmitClick = () => {
        onSubmit();
    }

    return (
        <div css={s.layout}>
            <button onClick={handleCancelClick}>&lt; 취소</button>
            <button onClick={handleSubmitClick} disabled={disabled}>&lt; 완료</button>
        </div>
    );
}

export default ConfirmButtonTop;