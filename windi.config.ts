import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";
import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        neutral: {
          DEFAULT: "rgba(250, 250, 250, 1)",
          dark: "rgba(250, 250, 250, 1)",
          medium: "rgba(113, 113, 122, 1)",
          light: "rgba(24, 24, 27,1)",
        },
        primary: {
          DEFAULT: "rgba(35, 134, 233, 1)",
          light: "rgba(35, 134, 233, 1",
          medium: "rgba(35, 134, 233, 1)",
          dark: "rgba(35, 134, 233, 1",
        },
        secondary: {
          DEFAULT: "rgba(255, 104, 132, 1)",
          light: "rgba(255, 104, 132, 1)",
          medium: "rgba(255, 104, 132, 1)",
          dark: "rgba(255, 104, 132, 1)",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.neutral.700 / 1"),
            "--tw-prose-headings": theme("colors.neutral.800 / 1"),
            "--tw-prose-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-links": theme("colors.primary.700 / 1"),
            "--tw-prose-bold": theme("colors.neutral.900 / 1"),
            "--tw-prose-counters": theme("colors.neutral.800 / 1"),
            "--tw-prose-bullets": theme("colors.neutral.500 / 1"),
            "--tw-prose-hr": theme("colors.neutral.200 / 1"),
            "--tw-prose-quotes": theme("colors.neutral.700 / 1"),
            "--tw-prose-quote-borders": theme("colors.primary.200 / 1"),
            "--tw-prose-captions": theme("colors.neutral.500 / 1"),
            "--tw-prose-code": theme("colors.secondary.700 / 1"),
            "--tw-prose-pre-code": theme("colors.neutral.700 / 1"),
            "--tw-prose-pre-bg": theme("colors.neutral.50 / 1"),
            "--tw-prose-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-td-borders": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-body": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-headings": theme("colors.neutral.50 / 1"),
            "--tw-prose-invert-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-links": theme("colors.primary.400 / 1"),
            "--tw-prose-invert-bold": theme("colors.neutral.DEFAULT / 1"),
            "--tw-prose-invert-counters": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-bullets": theme("colors.neutral.600 / 1"),
            "--tw-prose-invert-hr": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-quotes": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-quote-borders": theme("colors.primary.900 / 1"),
            "--tw-prose-invert-captions": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-code": theme("colors.secondary.400 / 1"),
            "--tw-prose-invert-pre-code": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-pre-bg": theme("colors.neutral.700 / 1"),
            "--tw-prose-invert-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-td-borders": theme("colors.neutral.700 / 1"),
            a: {
              textDecoration: "underline",
              textDecorationColor: theme("colors.primary.300 / 1"),
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.neutral.DEFAULT / 1"),
                textDecoration: "none",
                backgroundColor: theme("colors.primary.600 / 1"),
                borderRadius: "0.09rem",
              },
            },
            "a code": {
              color: "var(--tw-prose-code)",
            },
            kbd: {
              backgroundColor: theme("colors.neutral.200 / 1"),
              padding: "0.1rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            },
            mark: {
              color: theme("colors.neutral.800 / 1"),
              backgroundColor: theme("colors.secondary.200 / 1"),
              padding: "0.1rem 0.2rem",
              borderRadius: "0.12rem",
            },
          },
        },
        invert: {
          css: {
            a: {
              textDecorationColor: theme("colors.neutral.600 / 1"),
            },
            kbd: {
              color: theme("colors.neutral.200 / 1"),
              backgroundColor: theme("colors.neutral.700 / 1"),
            },
            mark: {
              backgroundColor: theme("colors.secondary.400 / 1"),
            },
          },
        },
      }),
    },
  },
});
