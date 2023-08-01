import React, {useRef, useState} from 'react';

const Form = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const person = {
		name: '',
		age: 0,
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!nameRef.current?.value || !ageRef.current?.value)
			throw new Error('Must provide name and age.');

		person.name = nameRef.current?.value;
		person.age = parseInt(ageRef.current?.value);
		console.log(person);
	};

	return (
		<form onSubmit={handleSubmit}>
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
					ref={nameRef}
				/>
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='age'>
					Age
				</label>
				<input
					type='number'
					className='form-control'
					id='age'
					autoComplete='off'
					ref={ageRef}
				/>
			</div>
			<button className='btn btn-primary' type='submit'>
				submit
			</button>
		</form>
	);
};

export default Form;
