import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import type { ThemeTypes } from '@/types/ThemeType';

const myCustomLightTheme: ThemeTypes = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#1877f2',
        'primary-darken-1': '#1056b2',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
    }
};

export default createVuetify({
    components,
    directives,

    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme
        }
    },
    defaults: {
        VBtn: {},
        VCard: {
            rounded: 'md'
        },
        VTextField: {
            rounded: 'lg'
        },
        VTooltip: {
            // set v-tooltip default location to top
            location: 'top'
        }
    }
});
