export type ThemeTypes = {
    name?: string;
    dark: boolean;
    variables?: object;
    colors: {
        background?: string;
        'primary-darken-1'?: string;
        'secondary-darken-1'?: string;
        primary?: string;
        secondary?: string;
        info?: string;
        success?: string;
        accent?: string;
        warning?: string;
        error?: string;
        lightprimary?: string;
        lightsecondary?: string;
        lightsuccess?: string;
        lighterror?: string;
        lightinfo?: string;
        lightwarning?: string;
        textPrimary?: string;
        textSecondary?: string;
        borderColor?: string;
        hoverColor?: string;
        inputBorder?: string;
        containerBg?: string;
        surface?: string;
        'on-surface-variant'?: string;
        grey100?: string;
        grey200?: string;
        muted?: string;
    };
};
