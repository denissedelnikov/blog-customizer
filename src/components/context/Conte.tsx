// contexts/FontContext.tsx
import { createContext, useState } from 'react';
import { DEFAULT_OPTION } from '../article-params-form/ArticleParamsForm';

export type FontSettings = {
	fontFamily: string;
	fontSize: string;
	fontColor: string;
	backgroundColor: string;
	contentWidth: string;
};
type FontContextType = {
	settings: FontSettings;
	updateSettings: (newSettings: Partial<FontSettings>) => void;
};

export const FontContext = createContext<FontContextType>({
	settings: {} as FontSettings,
	updateSettings: () => {},
});

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
	const [settings, setSettings] = useState<FontSettings>({
		fontFamily: DEFAULT_OPTION.fontFamily.value,
		fontSize: DEFAULT_OPTION.fontSize.value,
		fontColor: DEFAULT_OPTION.fontColor.value,
		backgroundColor: DEFAULT_OPTION.backgroundColor.value,
		contentWidth: DEFAULT_OPTION.contentWidth.value,
	});

	const updateSettings = (newSettings: Partial<FontSettings>) => {
		setSettings((prev) => ({ ...prev, ...newSettings }));
	};

	return (
		<FontContext.Provider value={{ settings, updateSettings }}>
			{children}
		</FontContext.Provider>
	);
};
