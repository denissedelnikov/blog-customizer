import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useContext, useRef, useState } from 'react';
import clsx from 'clsx';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { FontSelector } from './FontSelector';
import { FontSizeSelector } from './FontSizeSelector';
import { FontColorSelector } from './FontColorSelector';
import { BackgroundColorSelector } from './BackgroundColorSelector';
import { ContentWidthSelector } from './ContentWidthSelector';
import { FontContext } from '../context/Conte';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { Text } from 'src/ui/text';
interface FormState {
	fontFamily: OptionType;
	fontSize: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

export const DEFAULT_OPTION: FormState = {
	fontFamily: defaultArticleState.fontFamilyOption,
	fontSize: defaultArticleState.fontSizeOption,
	fontColor: defaultArticleState.fontColor,
	backgroundColor: defaultArticleState.backgroundColor,
	contentWidth: defaultArticleState.contentWidth,
};

export const ArticleParamsForm = () => {
	const { updateSettings } = useContext(FontContext);

	const sideBarRef = useRef<HTMLDivElement>(null);

	const [isSidebarOpen, setIsOpenSidebar] = useState<boolean>(false);
	const toggleSidebar = () => setIsOpenSidebar(!isSidebarOpen);

	const [selectedFont, setSelectedFont] = useState<OptionType>(
		DEFAULT_OPTION.fontFamily
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		DEFAULT_OPTION.fontSize
	);
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		DEFAULT_OPTION.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(DEFAULT_OPTION.backgroundColor);
	const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(
		DEFAULT_OPTION.contentWidth
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateSettings({
			fontFamily: selectedFont?.value || DEFAULT_OPTION.fontFamily?.value,
			fontSize: selectedFontSize?.value || DEFAULT_OPTION.fontSize?.value,
			fontColor: selectedFontColor?.value || DEFAULT_OPTION.fontColor?.value,
			backgroundColor:
				selectedBackgroundColor?.value || DEFAULT_OPTION.backgroundColor?.value,
			contentWidth:
				selectedContentWidth?.value || DEFAULT_OPTION.contentWidth?.value,
		});
	};

	const resetSettings = () => {
		updateSettings({
			fontFamily: DEFAULT_OPTION.fontFamily?.value,
			fontSize: DEFAULT_OPTION.fontSize?.value,
			fontColor: DEFAULT_OPTION.fontColor?.value,
			backgroundColor: DEFAULT_OPTION.backgroundColor?.value,
			contentWidth: DEFAULT_OPTION.contentWidth?.value,
		});

		setSelectedFont(DEFAULT_OPTION.fontFamily);
		setSelectedFontSize(DEFAULT_OPTION.fontSize);
		setSelectedFontColor(DEFAULT_OPTION.fontColor);
		setSelectedBackgroundColor(DEFAULT_OPTION.backgroundColor);
		setSelectedContentWidth(DEFAULT_OPTION.contentWidth);
	};

	useOutsideClickClose({
		isOpen: isSidebarOpen,
		rootRef: sideBarRef,
		onChange: setIsOpenSidebar,
	});

	return (
		<>
			<ArrowButton isOpen={isSidebarOpen} onClick={toggleSidebar} />
			<aside
				ref={sideBarRef}
				className={clsx(styles.container, {
					[styles.container_open]: isSidebarOpen,
				})}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text
						as='h2'
						size={31}
						weight={800}
						uppercase
						align='left'
						dynamicLite>
						Задайте параметры
					</Text>
					<FontSelector selected={selectedFont} onChange={setSelectedFont} />
					<FontSizeSelector
						selected={selectedFontSize}
						onChange={setSelectedFontSize}
					/>
					<FontColorSelector
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
					/>
					<Separator />
					<BackgroundColorSelector
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
					/>
					<ContentWidthSelector
						selected={selectedContentWidth}
						onChange={setSelectedContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							onClick={resetSettings}
							title='Сбросить'
							htmlType='reset'
							type='clear'
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
