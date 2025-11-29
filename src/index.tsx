import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useContext } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { FontContext, FontProvider } from './components/context/Conte';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const { settings } = useContext(FontContext);
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': settings.fontFamily,
					'--font-size': settings.fontSize,
					'--font-color': settings.fontColor,
					'--container-width': settings.contentWidth,
					'--bg-color': settings.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<FontProvider>
			<App />
		</FontProvider>
	</StrictMode>
);
