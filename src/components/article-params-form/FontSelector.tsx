import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

const TITLE_FONT_SELECTOR = 'шрифт';
const OPTIONS_FONT_SELECTOR: OptionType[] = fontFamilyOptions;

export const FontSelector = ({
	selected,
	onChange,
}: {
	selected: OptionType | null;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title={TITLE_FONT_SELECTOR}
			selected={selected}
			options={OPTIONS_FONT_SELECTOR}
			onChange={onChange}
		/>
	);
};
