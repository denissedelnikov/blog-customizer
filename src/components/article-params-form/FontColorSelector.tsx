import { fontColors, OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

const TITLE_COLOR_SELECTOR = 'Цвет шрифта';
const OPTIONS_COLOR_SELECTOR: OptionType[] = fontColors;

export const FontColorSelector = ({
	selected,
	onChange,
}: {
	selected: OptionType | null;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title={TITLE_COLOR_SELECTOR}
			selected={selected}
			options={OPTIONS_COLOR_SELECTOR}
			onChange={onChange}
		/>
	);
};
