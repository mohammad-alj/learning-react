import {ReactNode} from 'react';

const Alert = ({children, onClose}: {children: ReactNode; onClose: () => void}) => {
	return (
		<div className='alert alert-warning alert-dismissible' role='alert'>
			{children}
			<button type='button' className='btn-close' onClick={onClose}></button>
		</div>
	);
};

export default Alert;
