import {FieldValues, useForm} from 'react-hook-form';

const Form = () => {
	const {register, handleSubmit} = useForm();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					{...register('name')}
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
				<input
					{...register('age')}
					type='number'
					className='form-control'
					id='age'
					autoComplete='off'
				/>
			</div>
			<button className='btn btn-primary' type='submit'>
				submit
			</button>
		</form>
	);
};

export default Form;
