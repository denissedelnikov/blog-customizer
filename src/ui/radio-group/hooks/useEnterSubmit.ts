import { useEffect } from 'react';
import { OptionType } from 'src/constants/articleProps';

type UseEnterSubmit = {
	ref: React.RefObject<HTMLDivElement>; // Принимаем реф как пропс
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

export const useEnterSubmit = ({ ref, onChange, option }: UseEnterSubmit) => {
	useEffect(() => {
		const optionHtml = ref.current;
		if (!optionHtml) return;

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === optionHtml && event.key === 'Enter') {
				onChange?.(option);
			}
		};

		optionHtml.addEventListener('keydown', handleEnterKeyDown);

		return () => {
			optionHtml.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [ref, onChange, option]);
};
