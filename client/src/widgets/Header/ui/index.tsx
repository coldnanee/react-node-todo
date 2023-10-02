import { useLanguageContext } from "@/shared/lib/hooks/useLanguageContext/useLanguageContext";
import { useThemeContext } from "@/shared/lib/hooks/useThemeContext/useThemeContext";

import { themes } from "@/app/provider/theme";
import { languages } from "@/app/provider/language";

import styles from "./styles.module.scss";

import { IconContext } from "react-icons";
import { BsSun, BsSunFill } from "react-icons/bs";

import { HeaderSearch } from "./HeaderSearch";
import { HeaderProfile } from "./HeaderProfile";

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
				<HeaderSearch />
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
					<HeaderProfile />
				</div>
			</IconContext.Provider>
		</header>
	);
};
