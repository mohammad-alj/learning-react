interface Props {
	children: string;
	color?:
		| 'primary'
		| 'secondary'
		| 'danger'
		| 'info'
		| 'success'
		| 'warning'
		| 'light'
		| 'dark'
		| 'link';
	onClick?: () => void;
}

const Button = ({color = 'primary', children, onClick}: Props) => {
	return (
		<button className={'btn btn-' + color} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
