import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

import {useState} from 'react';

interface Props {
	size?: number | string;
	onClick?: () => void;
}

const Like = ({size = 25, onClick}: Props) => {
	const [liked, setLiked] = useState(false);

	const handleClick = () => {
		setLiked(!liked);
		if (onClick) onClick();
	};

	const iconProps = {
		onClick: handleClick,
		size,
	};
	return liked ? <AiFillHeart {...iconProps} color='red' /> : <AiOutlineHeart {...iconProps} />;
};

export default Like;
