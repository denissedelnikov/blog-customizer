import { contentWidthArr, OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

const TITLE_CONTENT_WIDTH_SELECTOR = 'Ширина контента';
const OPTIONS_CONTENT_WIDTH_SELECTOR: OptionType[] = contentWidthArr;

export const ContentWidthSelector = ({
	selected,
	onChange,
}: {
	selected: OptionType | null;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title={TITLE_CONTENT_WIDTH_SELECTOR}
			selected={selected}
			options={OPTIONS_CONTENT_WIDTH_SELECTOR}
			onChange={onChange}
		/>
	);
};
