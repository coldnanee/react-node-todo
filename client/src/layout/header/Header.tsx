import styles from "./Header.module.scss";

import { themes } from "../../theme/theme.data";

import { useThemeContext } from "../../theme/useThemeContext";

import { Account } from "./account/Account";
import { Search } from "./search/Search";

import { IconContext } from "react-icons";

import { useLanguageContext } from "../../languages/context/useLanguageContext";
import { languages } from "../../languages/i18n";

import { BsSun, BsSunFill } from "react-icons/bs";

export const Header = () => {
	const { activeLanguage, setActiveLanguage } = useLanguageContext();
	const { activeTheme, setActiveTheme } = useThemeContext();

	const isDarkThemeActive = activeTheme === themes.dark;

	return (
		<header className={styles.root}>
			<IconContext.Provider
				value={{
					color: isDarkThemeActive ? "#6c737c" : "#BBBBBD"
				}}>
				<Search />
				<div className={styles.root__profile}>
					<input
						className={styles.root__theme__indicator}
						id="#theme-label"
						type="checkbox"
						checked={isDarkThemeActive}
						onChange={() =>
							setActiveTheme(isDarkThemeActive ? themes.light : themes.dark)
						}
					/>
					<label htmlFor="#theme-label">
						{isDarkThemeActive ? (
							<BsSunFill
								size={"25px"}
								className={styles.root__theme__icon}
							/>
						) : (
							<BsSun
								size={"25px"}
								className={styles.root__theme__icon}
							/>
						)}
					</label>
					<p
						onClick={() =>
							setActiveLanguage(
								activeLanguage === languages.en ? languages.ru : languages.en
							)
						}
						className={styles.root__language}>
						{activeLanguage}
					</p>
					<Account />
				</div>
			</IconContext.Provider>
		</header>
	);
};
