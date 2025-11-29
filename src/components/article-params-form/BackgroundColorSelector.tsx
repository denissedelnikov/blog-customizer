import { backgroundColors, OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

const TITLE_BACKGROUND_COLOR_SELECTOR = 'Цвет фона';
const OPTIONS_BACKGROUND_COLOR_SELECTOR: OptionType[] = backgroundColors;

export const BackgroundColorSelector = ({
	selected,
	onChange,
}: {
	selected: OptionType | null;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title={TITLE_BACKGROUND_COLOR_SELECTOR}
			selected={selected}
			options={OPTIONS_BACKGROUND_COLOR_SELECTOR}
			onChange={onChange}
		/>
	);
};
