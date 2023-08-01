import {FieldValues, useForm} from 'react-hook-form';

interface FormData {
	name: string;
	age: number;
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<FormData>();

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
					{...register('name', {required: true, minLength: 3})}
					type='text'
					className='form-control'
					id='name'
					autoComplete='new-password'
					autoFocus
				/>
				{errors.name?.type === 'required' && (
					<p className='text-danger'>Name feild is required.</p>
				)}
				{errors.name?.type === 'minLength' && (
					<p className='text-danger'>Name must be atleast 3 characters.</p>
				)}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='age'>
					Age
				</label>
				<input
					{...register('age', {required: true, min: 13})}
					type='number'
					className='form-control'
					id='age'
					autoComplete='new-password'
				/>
				{errors.age?.type === 'required' && (
					<p className='text-danger'>You must enter an age.</p>
				)}
				{errors.age?.type === 'min' && (
					<p className='text-danger'>Age must be greater or equal to 13</p>
				)}
			</div>
			<button className='btn btn-primary' type='submit'>
				submit
			</button>
		</form>
	);
};

export default Form;
