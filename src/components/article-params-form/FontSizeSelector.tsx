import { fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';

const TITLE_FONT_SIZE_SELECTOR = 'размер шрифта';
const NAME_FONT_SIZE_SELECTOR = 'font-size';
const OPTIONS_FONT_SIZE_SELECTOR: OptionType[] = fontSizeOptions;

export const FontSizeSelector = ({
	selected,
	onChange,
}: {
	selected: OptionType;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<RadioGroup
			name={NAME_FONT_SIZE_SELECTOR}
			title={TITLE_FONT_SIZE_SELECTOR}
			selected={selected}
			options={OPTIONS_FONT_SIZE_SELECTOR}
			onChange={onChange}
		/>
	);
};
