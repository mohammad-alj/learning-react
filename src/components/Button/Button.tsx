import styles from './Button.module.css';

interface Props {
	children: string;
	color?: 'primary' | 'secondary' | 'danger' | 'info' | 'success';

	onClick?: () => void;
}

const Button = ({color = 'primary', children, onClick}: Props) => {
	return (
		<button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
