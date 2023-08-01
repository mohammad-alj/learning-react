const Form = () => {
	return (
		<form>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					type='text'
					className='form-control'
					id='name'
					autoComplete='off'
					autoFocus
				/>
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='age'>
					Age
				</label>
				<input type='number' className='form-control' id='age' autoComplete='off' />
			</div>
			<button className='btn btn-primary' type='submit'>
				submit
			</button>
		</form>
	);
};

export default Form;
