const Alert = ({children}: {children: string}) => {
	return (
		<div className='alert alert-danger' role='alert'>
			{children}
		</div>
	);
};

export default Alert;
