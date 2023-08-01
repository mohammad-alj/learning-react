import {FieldValues, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
	name: z.string().min(3, {message: 'Name must atleast be 3 characters long'}),
	age: z
		.number({invalid_type_error: 'Age is required'})
		.min(13, {message: 'Age should atleast be 13 or older'}),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

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
					autoComplete='new-password'
					autoFocus
				/>
				{errors.name && <p className='text-danger'>{errors.name.message}</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='age'>
					Age
				</label>
				<input
					{...register('age', {valueAsNumber: true})}
					type='number'
					className='form-control'
					id='age'
					autoComplete='new-password'
				/>
				{errors.age && <p className='text-danger'>{errors.age.message}</p>}
			</div>
			<button className='btn btn-primary' type='submit' disabled={!isValid}>
				submit
			</button>
		</form>
	);
};

export default Form;
