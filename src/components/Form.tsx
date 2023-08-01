import React, {useRef, useState} from 'react';

const Form = () => {
	const [person, setPerson] = useState({
		name: '',
		age: '',
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log({...person, age: parseInt(person.age)});
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
					value={person.name}
					onChange={e => setPerson({...person, name: e.target.value})}
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
					value={person.age}
					onChange={event => setPerson({...person, age: event.target.value})}
				/>
			</div>
			<button className='btn btn-primary' type='submit'>
				submit
			</button>
		</form>
	);
};

export default Form;
